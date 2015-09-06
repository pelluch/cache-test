
function apiCall(options, callback) {


    if (Ti.Network.online) {
        var xhr = Ti.Network.createHTTPClient({
            //timeout : options.timeout || 10000
            timeout: 60000
        });

        //Prepare the request
        xhr.open(options.type, options.url);

        xhr.onload = function() {
            var responseJSON, success = true, error;
            try {
                responseJSON = JSON.parse(this.responseText);
            } catch (e) {
                Ti.API.error('[REST API] apiCall ERROR: ', e.message);
                success = false;
                error = e.message;
            }

            callback(this);
        };

        //Handle error
        xhr.onerror = function(e) {
            var responseJSON;

            try {
                responseJSON = JSON.parse(this.responseText);
            } catch (e) {
            }

            callback(this);
            Ti.API.error('[REST API] apiCall ERROR: ' + this.responseText);
            Ti.API.error('[REST API] apiCall ERROR CODE: ' + this.status);
        };

        // headers
        for (var header in options.headers) {
            xhr.setRequestHeader(header, options.headers[header]);
        }

        if (options.beforeSend) {
            options.beforeSend(xhr);
        }

        xhr.send(options.data || null);
    } else {
        // Offline
        callback({
            success : false,
            status : 'offline',
            responseText : null
        });
    }
}

function Sync(method, model, opts) {

    model.idAttribute = model.config.adapter.idAttribute || 'id';
    var parentNode = model.config.parentNode;

    // REST - CRUD
    var methodMap = {
        'create' : 'POST',
        'read' : 'GET',
        'update' : 'PUT',
        'delete' : 'DELETE'
    };

    var type = methodMap[method];
    var params = _.extend({}, opts);
    params.type = type;

    //set default headers
    params.headers = params.headers || {};

    // Send our own custom headers
    if (model.config.hasOwnProperty('headers')) {
        for (var header in model.config.headers) {
            params.headers[header] = model.config.headers[header];
        }
    }


    /*
    Set Authorization header
    var user = App.LoginManager.getUser();
    if(user) {
        params.headers['Authorization'] = user.getAuthorizationHeader();
    }
   */
    // We need to ensure that we have a base url.
    if (!params.url) {
        params.url = (model.config.URL || model.url());
        if (!params.url) {
            Ti.API.error('[REST API] ERROR: NO BASE URL');
            return;
        }
    }

    params.urlparams = params.urlparams || {};
        // Add in the params from the model, either from a function or literal
        if ( typeof model.config.URLPARAMS === 'function' ) {
            _.extend(params.urlparams, model.config.URLPARAMS());
        }
        else if ( typeof model.config.URLPARAMS != 'undefined' ) {
            _.extend(params.urlparams, model.config.URLPARAMS);
        }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (Alloy.Backbone.emulateJSON) {
        params.contentType = 'application/x-www-form-urlencoded';
        params.processData = true;
        params.data = params.data ? {
            model : params.data
        } : {};
    }

    //json data transfers
    params.headers['Content-Type'] = 'application/json';


    switch(method) {
        case 'create' :
            // convert to string for API call
            params.data = JSON.stringify(model.toJSON());
            apiCall(params, function(response) {
                if (response.status === 201 || response.status === 200) {
                    var data = parseJSON(response.responseText);

                    //Rest API should return a new model id.
                    if (data[model.idAttribute] === undefined) {
                        Ti.API.error('[REST API] CREATE did not return an id');
                    }
                    params.success(data);
                    model.trigger('fetch');
                    // fire event
                } else {
                    params.error(response);
                    Ti.API.error('[REST API] CREATE ERROR: ');
                    Ti.API.error(response.responseText);
                }
            });
            break;

            case 'read':
            if (model[model.idAttribute]) {
                params.url = params.url + '/' + model[model.idAttribute];
            }

            if (params.search) {
                params.url = params.url + '/search/' + Ti.Network.encodeURIComponent(params.search);
            }

            // App.log(params.urlparams);
            // App.log(params.url);

            if (params.urlparams) {
                params.url = encodeData(params.urlparams, params.url);

            }

            apiCall(params, function(response) {
                if (response.status === 200) {
                    var data = parseJSON(response.responseText);
                    var values = [];
                    model.length = 0;
                    if(model[model.idAttribute]) {
                        if(data.complaint) {
                            values.push(data.complaint);
                        }
                        else {
                            values.push(data);
                        }                       
                        model.length = 1;
                    }
                    else {
                        for (var i in data) {
                            var item = {};
                            item = data[i];
                            if (item[model.idAttribute] === undefined) {
                                Ti.API.error('[REST API] read did not return an id');
                            }
                            values.push(item);
                            model.length++;
                        }
                    }

                    params.success((model.length === 1) ? values[0] : values);
                    model.trigger('fetch');
                } else {
                    params.error(response);
                    Ti.API.error('[REST API] READ ERROR: ');
                    Ti.API.error(response.responseText);
                }
            });
break;

case 'update' :
if (!model[model.idAttribute]) {
    params.error(null);
    Ti.API.error('[REST API] ERROR: MISSING MODEL ID');
    return;
}

            // setup the url & data
            if (_.indexOf(params.url, '?') === -1) {
                params.url = params.url;
                params.url += '/' + model[model.idAttribute];
                
            } else {
                var str = params.url.split('?');
                var paramString = '?' + str[1];
                params.url = str[0];
                
                params.url += '/' + model[model.idAttribute] + paramString;
                
            }

            if (params.urlparams) {
                params.url = encodeData(params.urlparams, params.url);
            }

            params.data = JSON.stringify(model.toJSON());

            apiCall(params, function(response) {
                if (response.status === 200) {
                    var data = parseJSON(response.responseText);
                    params.success(data);
                    model.trigger('fetch');
                } else {
                    params.error(response);
                    Ti.API.error('[REST API] UPDATE ERROR: ');
                    Ti.API.error(response.responseText);
                }
            });
            break;

            case 'delete' :
            if (!model[model.idAttribute]) {
                params.error(null);
                Ti.API.error('[REST API] ERROR: MISSING MODEL ID');
                return;
            }
            params.url = params.url + '/' + model[model.idAttribute];

            apiCall(params, function(response) {
                if (response.status === 200 || response.status === 204) {
                    var data = parseJSON(response.responseText);
                    params.success(data);
                    model.trigger('fetch');
                } else {
                    params.error(response);
                    Ti.API.error('[REST API] DELETE ERROR: ');
                    Ti.API.error(response.responseText);
                }
            });
            break;
        }

    }

/////////////////////////////////////////////
// HELPERS
/////////////////////////////////////////////


function parseJSON(text) {
    var json;
    if(typeof text === 'string') {
        try {
            json = JSON.parse(text);
        }
        catch(e) {
            json = null;
        }
        return json;
    }
    else {
        return null;
    }
}

function encodeData(obj, url) {

    if(Object.keys(obj).length === 0) {
        return url;
    }
    var str = [];
    for (var p in obj) {
        str.push(Ti.Network.encodeURIComponent(p) + '=' + Ti.Network.encodeURIComponent(JSON.stringify(obj[p])));        
    }

    if (_.indexOf(url, '?') === -1) {
        return url + '?' + str.join('&');
    } else {
        return url + '&' + str.join('&');
    }
}

//we need underscore
if(typeof _ === 'undefined') {
    var _ = require('alloy/underscore')._;
}
//until this issue is fixed: https://jira.appcelerator.org/browse/TIMOB-11752
var Alloy = require('alloy'), Backbone = Alloy.Backbone;

module.exports.sync = Sync;

module.exports.beforeModelCreate = function(config, name) {
    config = config || {};
    return config;
};

module.exports.afterModelCreate = function(Model, name) {
    Model = Model || {};
    Model.prototype.config.Model = Model;
    Model.prototype.idAttribute = Model.prototype.config.adapter.idAttribute;
    return Model;
};
