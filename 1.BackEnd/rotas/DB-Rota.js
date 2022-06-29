const DBControle = require('../controladores/DB-Controle');
const rotas = require('express').Router();

rotas.get('/verificarConexao', DBControle.verificarConexao);

module.exports = {
    base: "/db",
    rotas: rotas
};