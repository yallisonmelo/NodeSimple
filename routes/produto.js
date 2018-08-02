module.exports = function(app){
    app.get('/produtos', function(req, res) {
        const pg = require('pg');
        const pool = new pg.Pool({
        user: 'postgres',
        host: '127.0.0.1',
        database: 'testenode',
        password: '1991',
        port: '5432'});
        
        pool.query("SELECT * FROM LIVRO", (err, result) => {
        res.send(result);
        pool.end();
        });
    });
}