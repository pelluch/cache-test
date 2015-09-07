

exports.definition = {
  config: {
    columns: {
      IDCoccion: 'TEXT PRIMARY KEY',
      IDCorte: 'TEXT',
      nombre: 'TEXT',
      temperatura: 'TEXT'      
    },
    defaults: {
    },
    adapter: {
      type: 'sql', 
      collection_name: 'cocciones',
      idAttribute: 'IDCoccion',
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

