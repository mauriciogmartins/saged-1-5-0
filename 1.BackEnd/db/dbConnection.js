const mysql = require('mysql');

const conexao = mysql.createPool({
    connectionLimit: 20,
    host: "localhost",
    user: "fenixds",
    password: "phenix",
    database: "saged15",
    port: 3307
});

module.exports = conexao;