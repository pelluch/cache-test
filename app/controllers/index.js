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



App.Database.getTiendaCategorias({
    success: function(model, response, options) {
        App.log('Success sql! Got: ', model);
    },
    error: function(model, response, options) {
        App.log('Error');
    },
    source: App.Database.SQL,
    sync: false
});



App.Database.getTiendaProductos({
    success: function(model, response, options) {
        App.log('Success sql! Got: ', model);
    },
    error: function(model, response, options) {
        App.log('Error');
    },
    source: App.Database.SQL,
    sync: true,
    IDCateg: "1"
});

App.Database.getCoccionesFavoritas({
    success: function(model, response, options) {
        App.log('Success sql! Got: ', model);
    },
    error: function(model, response, options) {
        App.log('Error');
    },
    source: App.Database.SQL,
    sync: true,
    email: "pablo.lluch@gmail.com"
});

App.Database.getCoccionesPersonalizadas({
    success: function(model, response, options) {
        App.log('Success sql! Got: ', model);
    },
    error: function(model, response, options) {
        App.log('Error');
    },
    source: App.Database.SQL,
    sync: true,
    email: "pablo.lluch@gmail.com"
});

*/

App.Database.syncAll();

/*






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
