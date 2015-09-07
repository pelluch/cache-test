
exports.SQL = 0;
exports.API = 1;

var defaults = {
    source: exports.SQL,
    success: function() {},
    error: function() {},
    sync: true
};


exports.getCarnes = function(opts) {
    opts = opts || {};
    _.defaults(opts, defaults);

    if(opts.source === exports.SQL) {
        var carnesSql = Alloy.createCollection('carne_sql');
        carnesSql.fetch({
            success: opts.success,
            error: opts.error,
        });
    } else if(opts.source === exports.API) {
        var carnes = Alloy.createModel('carnes', {
            id: 1
        });
        carnes.fetch({
            success: function(model, response, options){    
                var collection = Alloy.createCollection('carne_sql');
                var models = [];
                for(var i = 0; i < response.length; ++i) {
                    var carneSql = Alloy.createModel('carne_sql', response[i]);
                    // App.log('Carne sql: ', carneSql);
                    models.push(carneSql);
                    // collection.add(carnesSql);
                    if(opts.sync) {
                        carneSql.save(null, {
                            success: function() {

                            }, 
                            error: function() {

                            }
                        });
                        // var IDCarne = response[i].IDCarne;
                    }
                    // fetchCorte(IDCarne);
                }
                collection.reset(models);
                opts.success(collection, response, options);
            },
            error: opts.error,
        });
    } else {
        App.log('Invalid source: ', exports.source);
    }

};


exports.getCortes = function(opts) {
    opts = opts || {};
    _.defaults(opts, defaults);

    if(opts.source === exports.SQL) {
        var cortesSql = Alloy.createCollection('corte_sql');
        var table = cortesSql.config.adapter.collection_name;
        cortesSql.fetch({
            success: opts.success,
            error: opts.error,
            query: 'SELECT * from ' + table + ' where IDCarne="' + opts.IDCarne + '"'
            
        });
    } else if(opts.source === exports.API) {
        var cortes = Alloy.createModel('cortes', {
            id: opts.IDCarne
        });
        cortes.fetch({
            success: function(model, response, options){    
                var collection = Alloy.createCollection('corte_sql');
                var models = [];
                for(var i = 0; i < response.length; ++i) {
                    var corteSql = Alloy.createModel('corte_sql', response[i]);
                    corteSql.set('IDCarne', opts.IDCarne);
                    // App.log('Carne sql: ', carneSql);
                    models.push(corteSql);
                    // collection.add(carnesSql);
                    if(opts.sync) {
                        corteSql.save(null, {
                            success: function() {

                            }, 
                            error: function() {

                            }
                        });
                        // var IDCarne = response[i].IDCarne;
                    }
                    // fetchCorte(IDCarne);
                }
                collection.reset(models);
                opts.success(collection, response, options);
            },
            error: opts.error,
        });
    } else {
        App.log('Invalid source: ', exports.source);
    }

};


exports.getCocciones = function(opts) {
    opts = opts || {};
    _.defaults(opts, defaults);

    if(opts.source === exports.SQL) {
        var coccionesSql = Alloy.createCollection('coccion_sql');
        var table = coccionesSql.config.adapter.collection_name;
        coccionesSql.fetch({
            success: opts.success,
            error: opts.error,
            query: 'SELECT * from ' + table + ' where IDCorte="' + opts.IDCorte + '"'
            
        });
    } else if(opts.source === exports.API) {
        var cocciones = Alloy.createModel('cocciones', {
            id: opts.IDCorte
        });
        cocciones.fetch({
            success: function(model, response, options){    
                var collection = Alloy.createCollection('coccion_sql');
                var models = [];
                for(var i = 0; i < response.length; ++i) {
                    var coccionSql = Alloy.createModel('coccion_sql', response[i]);
                    coccionSql.set('IDCorte', opts.IDCorte);
                    // App.log('Carne sql: ', carneSql);
                    models.push(coccionSql);
                    // collection.add(carnesSql);
                    if(opts.sync) {
                        coccionSql.save(null, {
                            success: function() {

                            }, 
                            error: function() {

                            }
                        });
                        // var IDCorte = response[i].IDCorte;
                    }
                    // fetchCorte(IDCorte);
                }
                collection.reset(models);
                opts.success(collection, response, options);
            },
            error: opts.error,
        });
    } else {
        App.log('Invalid source: ', exports.source);
    }
};

exports.getTiendaCategorias = function(opts) {

};

exports.getTiendaProductos = function(opts) {

};

exports.getCoccionesFavoritas = function(opts) {

};

exports.getCoccionesPersonalizadas = function(opts) {

};


exports.syncAll = function() {
    exports.getCarnes({
        success: function(model, response, options) {
            _.each(response, function(carne) {
                syncCortes(carne.IDCarne);
            });
        },
        error: function(model, response, options) {
            App.log('Error');
        },
        source: App.Database.API,
        sync: true
    });
};

function syncCortes(IDCarne) {
    exports.getCortes({
        success: function(model, response, options) {
            _.each(response, function(corte) {
                syncCocciones(corte.IDCorte);
            });
        },
        error: function(model, response, options) {
            App.log('Error');
        },
        source: App.Database.API,
        sync: true,
        IDCarne: IDCarne
    });
    
}

function syncCocciones(IDCorte) {
    exports.getCocciones({
        success: function(model, response, options) {

        },
        error: function(model, response, options) {
            App.log('Error');
        },
        source: App.Database.API,
        sync: true,
        IDCorte: IDCorte
    });
}
