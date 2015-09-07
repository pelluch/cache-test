function doClick(e) {
    alert($.label.text);
}

$.index.open();

/* App.Database.getCarnes({
    success: function(model, response, options) {
        App.log('Success! Got: ', model);
    },
    error: function(model, response, options) {
        App.log('Error');
    },
    source: App.Database.API,
    sync: false
}); */


/* App.Database.getCortes({
    success: function(model, response, options) {
        App.log('Success! Got: ', model);
    },
    error: function(model, response, options) {
        App.log('Error');
    },
    source: App.Database.SQL,
    sync: true,
    IDCarne: "1"
});
*/ 

/*

var coccionesSql = Alloy.createCollection('coccion_sql');


function fetchCoccion(IDCorte) {
    var cocciones = Alloy.createModel('cocciones', {id:IDCorte});
    cocciones.fetch({
        success: function(model, response, options) {
            for(var i = 0; i < response.length; ++i) {
                App.log('Fetched coccion ', response[i]);
                var coccionSql = Alloy.createModel('coccion_sql', response[i]);
                coccionSql.set('IDCorte', IDCorte);
                coccionSql.save(null, {
                    success: function() {
                        // App.log('Success for ' + i);
                    },
                    error: function() {
                        App.log('Error for ' + i);
                    }
                });
            }
        },
        error: function(model, response, options) {

        }
    });
}


var tiendaCateg = Alloy.createModel('tiendaCateg', {id:1});
tiendaCateg.fetch({
    success: function(model, response, options) {
        for(var i = 0; i < response.length; ++i) {
            fetchProductos(response[i].IDCateg);
            var tiendaCategSql = Alloy.createModel('tienda_categoria_sql', response[i]);
            tiendaCategSql.save(null, {
                success: function() {
                },
                error: function() {
                    App.log('Error for ' + i);
                }
            });
        }        
        
    },
    error: function(model, response, options) {
    }
});

function fetchProductos(IDCateg) {
    var tiendaProductos = Alloy.createModel('tiendaProductos', {id:IDCateg});
    tiendaProductos.fetch({
        success: function(model, response, options) {
            for(var i = 0; i < response.length; ++i) {
                App.log('Got tiendaProducto: ', response[i]);
                var tiendaProductoSql = Alloy.createModel('tienda_producto_sql', response[i]);
                tiendaProductoSql.set('IDCateg', IDCateg);
                tiendaProductoSql.save(null, {
                    success: function() {
                    },
                    error: function() {
                        App.log('Error for ' + i);
                    }
                });
            }
        },
        error: function(model, response, options) {

        }
    });
}

/*
var coccionesFavoritas = Alloy.createModel('coccionesFavoritas', {id: 'pablo.lluch@gmail.com'});
coccionesFavoritas.fetch({
    success: function(model, response, options) {
        for(var i = 0; i < response.length; ++i) {
            var coccionFavoritaSql = Alloy.createModel('coccion_favorita_sql', response[i]);
            coccionFavoritaSql.save(null, {
                success: function() {
                },
                error: function() {
                    App.log('Error for ' + i);
                }
            });
        }        
        
    },
    error: function(model, response, options) {
    }
});


var coccionesPersonalizadas = Alloy.createModel('favoritos', {id: 'pablo.lluch@gmail.com'});
coccionesPersonalizadas.fetch({
    success: function(model, response, options) {
        for(var i = 0; i < response.length; ++i) {
            var coccionPersonalizadaSql = Alloy.createModel('coccion_personalizada_sql', response[i]);
            coccionPersonalizadaSql.save(null, {
                success: function() {
                },
                error: function() {
                    App.log('Error for ' + i);
                }
            });
        }        
        
    },
    error: function(model, response, options) {
    }
});


coccionesSql.fetch({
    success: function(model, response, options){
        var end = new Date().getTime();
        var time = end - start;
        App.log('Execution time: ' + time);
        App.log('SQL cocciones');
        App.log(typeof model);
        App.log(model);
    },
    error: function(model, response, options){
        App.log('error');
    },
});
*/
