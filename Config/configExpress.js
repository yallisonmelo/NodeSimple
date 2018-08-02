module. exports = function() {
    console.log("modulo ta sendo carregado");
    var app = require('express')();
    app.set('view engine', 'ejs');
    return app;
}