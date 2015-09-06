

exports.definition = {
  config: {
    columns: {
      ID: 'TEXT PRIMARY KEY',
      col2: 'TEXT',
      col3: 'TEXT',
      col4: 'TEXT',
      col5: 'TEXT'
    },
    defaults: {
    },
    adapter: {
      type: 'sql', 
      collection_name: 'cocciones_personalizadas',
      idAttribute: 'ID'
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

