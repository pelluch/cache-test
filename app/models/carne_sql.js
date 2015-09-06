

exports.definition = {
  config: {
    columns: {
      IDCarne: 'TEXT PRIMARY KEY',
      nombre: 'TEXT',
      img: 'TEXT',
      orden: 'TEXT'      
    },
    defaults: {
    },
    adapter: {
      type: 'sql', 
      collection_name: 'carnes',
      idAttribute: 'IDCarne'
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

