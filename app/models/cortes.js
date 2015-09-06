exports.definition = {
    config: {
        columns: {

        },
        defaults: {

        },

        adapter: {
            type: "restapi",
            collection_name: "cortes",
            idAttribute: "id",
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            // extended functions and properties go here
            url: function(){
                return Alloy.Globals.urlAPI + "kanka/cortes";
            }

        });

        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            // extended functions and properties go here

            // For Backbone v1.1.2, uncomment the following to override the
            // fetch method to account for a breaking change in Backbone.
            /*
            fetch: function(options) {
                options = options ? _.clone(options) : {};
                options.reset = true;
                return Backbone.Collection.prototype.fetch.call(this, options);
            }
            */
        });

        return Collection;
    }
};
