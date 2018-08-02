var app = require('./Config/configExpress')();
var rotasProdutos = require ('./routes/produto.js')(app);


app.listen(3000, function() {
    console.log("servidor rodando");
})
