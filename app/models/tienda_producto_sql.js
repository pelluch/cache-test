

exports.definition = {
  config: {
    columns: {
      IDProducto: 'TEXT PRIMARY KEY',
      IDCateg: 'TEXT',
      nombre: 'TEXT',
      descripcion: 'TEXT',
      img: 'TEXT',
      precio: 'TEXT',
      urlDetalle: 'TEXT'    
    },
    defaults: {
    },
    adapter: {
      type: 'sql', 
      collection_name: 'tienda_productos',
      idAttribute: 'IDProducto',
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

