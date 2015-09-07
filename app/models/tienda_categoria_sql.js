

exports.definition = {
  config: {
    columns: {
      IDCateg: 'TEXT PRIMARY KEY',
      nombre: 'TEXT'     
    },
    defaults: {
    },
    adapter: {
      type: 'sql', 
      collection_name: 'tienda_categorias',
      idAttribute: 'IDCateg',
      db_name: 'kanka'
    },
    debug: 0
  },    
  extendModel: function(Model) {
    _.extend(Model.prototype, {
     
    });
    return Model;
  },
  extendCollection: function(Collection) {    
    _.extend(Collection.prototype, {

    });
    
    return Collection;
  }
};

