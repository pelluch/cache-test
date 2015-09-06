

exports.definition = {
  config: {
    columns: {
      IDCorte: 'TEXT PRIMARY KEY',
      IDCarne: 'TEXT',
      nombre: 'TEXT',
      img: 'TEXT',
      orden: 'TEXT'      
    },
    defaults: {
    },
    adapter: {
      type: 'sql', 
      collection_name: 'cortes',
      idAttribute: 'IDCorte'
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

