function doClick(e) {
    alert($.label.text);
}

$.index.open();

var carnes = Alloy.createModel('carnes', {
    id: 1
});

var carnesSql = Alloy.createCollection('carne_sql');
var cortesSql = Alloy.createCollection('corte_sql');
var coccionesSql = Alloy.createCollection('coccion_sql');

var start = new Date().getTime();

carnes.fetch({
    success: function(model, response, options){
        var end = new Date().getTime();
        var time = end - start;
        App.log('Execution time: ' + time);
        App.log('API carnes');
        App.log(response);       
        for(var i = 0; i < response.length; ++i) {
            var carneSql = Alloy.createModel('carne_sql', response[i]);
            carneSql.save(null, {
                success: function() {
                    // App.log('Success for ' + i);
                },
                error: function() {
                    App.log('Error for ' + i);
                }
            });
            var IDCarne = response[i].IDCarne;
            fetchCorte(IDCarne);
        } 
    },
    error: function(model, response, options){
        App.log('error');
    },
});

function fetchCorte(IDCarne) {
    var cortes = Alloy.createModel('cortes', {id: IDCarne});
    // App.log('Fetching cortes for ' + IDCarne);
    cortes.fetch({
        success: function(model, response, options) {
            // App.log('API corte success for ' + IDCarne);
            // App.log(response);

            for(var i = 0; i < response.length; ++i) {
                var corteSql = Alloy.createModel('corte_sql', response[i]);
                corteSql.set('IDCarne', IDCarne);
                corteSql.save(null, {
                    success: function() {
                        // App.log('Success for ' + i);
                    },
                    error: function() {
                        App.log('Error for ' + i);
                    }
                });

                var IDCorte = response[i].IDCorte;
                fetchCoccion(IDCorte);
            }
        }, 
        error: function(model, response, options) {
            App.log('Error api corte');
        }
    });
}

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

carnesSql.fetch({
    success: function(model, response, options){
        var end = new Date().getTime();
        var time = end - start;
        App.log('Execution time: ' + time);
        App.log('SQL carnes');
        App.log(typeof model);
        App.log(model);
    },
    error: function(model, response, options){
        App.log('error');
    },
});

cortesSql.fetch({
    success: function(model, response, options){
        var end = new Date().getTime();
        var time = end - start;
        App.log('Execution time: ' + time);
        App.log('SQL cortes');
        App.log(typeof model);
        App.log(model);
    },
    error: function(model, response, options){
        App.log('error');
    },
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
