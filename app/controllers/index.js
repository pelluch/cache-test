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



App.Database.getCocciones({
    success: function(model, response, options) {
        App.log('Success! Got: ', model);
    },
    error: function(model, response, options) {
        App.log('Error');
    },
    source: App.Database.API,
    sync: true,
    IDCorte: "2"
});


*/
/*
App.Database.syncAll();


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

*/
