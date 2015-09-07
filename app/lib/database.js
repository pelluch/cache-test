
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
            error: opts.error
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
    opts = opts || {};
    _.defaults(opts, defaults);

    if(opts.source === exports.SQL) {
        var tiendaCategsSql = Alloy.createCollection('tienda_categoria_sql');
        tiendaCategsSql.fetch({
            success: opts.success,
            error: opts.error
        });
    } else if(opts.source === exports.API) {
        var tiendaCateg = Alloy.createModel('tiendaCateg', {
            id: 1
        });
        tiendaCateg.fetch({
            success: function(model, response, options){    
                var collection = Alloy.createCollection('tienda_categoria_sql');
                var models = [];
                for(var i = 0; i < response.length; ++i) {
                    var tiendaCategSql = Alloy.createModel('tienda_categoria_sql', response[i]);

                    models.push(tiendaCategSql);
                    if(opts.sync) {
                        tiendaCategSql.save(null, {
                            success: function() {

                            }, 
                            error: function() {

                            }
                        });
                    }
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


exports.getTiendaProductos = function(opts) {
    opts = opts || {};
    _.defaults(opts, defaults);

    if(opts.source === exports.SQL) {
        var tiendaProdSql = Alloy.createCollection('tienda_producto_sql');
        var table = tiendaProdSql.config.adapter.collection_name;
        tiendaProdSql.fetch({
            success: opts.success,
            error: opts.error,
            query: 'SELECT * from ' + table + ' where IDCateg="' + opts.IDCateg + '"'
            
        });
    } else if(opts.source === exports.API) {
        var tiendaProd = Alloy.createModel('tiendaProductos', {
            id: opts.IDCateg
        });
        tiendaProd.fetch({
            success: function(model, response, options){    
                var collection = Alloy.createCollection('tienda_producto_sql');
                var models = [];
                for(var i = 0; i < response.length; ++i) {
                    var tiendaProdSql = Alloy.createModel('tienda_producto_sql', response[i]);
                    tiendaProdSql.set('IDCateg', opts.IDCateg);
                    // App.log('Carne sql: ', carneSql);
                    models.push(tiendaProdSql);
                    // collection.add(carnesSql);
                    if(opts.sync) {
                        tiendaProdSql.save(null, {
                            success: function() {

                            }, 
                            error: function() {

                            }
                        });
                    }
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

exports.getCoccionesFavoritas = function(opts) {
    opts = opts || {};
    _.defaults(opts, defaults);

    if(opts.source === exports.SQL) {
        var coccionesFavoritasSql = Alloy.createCollection('coccion_favorita_sql');
        coccionesFavoritasSql.fetch({
            success: opts.success,
            error: opts.error
        });
    } else if(opts.source === exports.API) {
        var coccionesFavoritas = Alloy.createModel('coccionesFavoritas', {
            id: opts.email
        });
        coccionesFavoritas.fetch({
            success: function(model, response, options){    
                var collection = Alloy.createCollection('coccion_favorita_sql');
                var models = [];
                for(var i = 0; i < response.length; ++i) {
                    var coccionFavoritaSql = Alloy.createModel('coccion_favorita_sql', response[i]);
                    models.push(coccionFavoritaSql);
                    if(opts.sync) {
                        coccionFavoritaSql.save(null, {
                            success: function() {

                            }, 
                            error: function() {

                            }
                        });
                    }
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

exports.getCoccionesPersonalizadas = function(opts) {
    opts = opts || {};
    _.defaults(opts, defaults);

    if(opts.source === exports.SQL) {
        var coccionesPersonalizadasSql = Alloy.createCollection('coccion_personalizada_sql');
        coccionesPersonalizadasSql.fetch({
            success: opts.success,
            error: opts.error
        });
    } else if(opts.source === exports.API) {
        var coccionesPersonalizadas = Alloy.createModel('favoritos', {
            id: opts.email
        });
        coccionesPersonalizadas.fetch({
            success: function(model, response, options){    
                var collection = Alloy.createCollection('coccion_personalizada_sql');
                var models = [];
                for(var i = 0; i < response.length; ++i) {
                    var coccionPersonalizadaSql = Alloy.createModel('coccion_personalizada_sql', response[i]);
                    models.push(coccionPersonalizadaSql);
                    if(opts.sync) {
                        coccionPersonalizadaSql.save(null, {
                            success: function() {

                            }, 
                            error: function() {

                            }
                        });
                    }
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

    exports.getTiendaCategorias({
        success: function(model, response, options) {
            _.each(response, function(categ) {
                syncProductos(categ.IDCateg);
            });
        },
        error: function(model, response, options) {
            App.log('Error');
        },
        source: App.Database.API,
        sync: true
    });

    exports.getCoccionesFavoritas({
        success: function(model, response, options) {

        },
        error: function(model, response, options) {
            App.log('Error');
        },
        source: App.Database.API,
        sync: true,
        email: "pablo.lluch@gmail.com"
    });

    exports.getCoccionesPersonalizadas({
        success: function(model, response, options) {

        },
        error: function(model, response, options) {
            App.log('Error');
        },
        source: App.Database.API,
        sync: true,
        email: "pablo.lluch@gmail.com"
    });
};

function syncProductos(IDCateg) {
    exports.getTiendaProductos({
        success: function(model, response, options) {

        },
        error: function(model, response, options) {
            App.log('Error');
        },
        source: App.Database.API,
        sync: true,
        IDCateg: IDCateg
    });
}


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
