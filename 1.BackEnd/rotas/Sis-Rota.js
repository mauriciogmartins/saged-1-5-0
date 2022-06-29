const SisControle = require('../controladores/Sis-Controle');

const rotas = require('express').Router();
rotas.get('/verificarStatusLicenca', SisControle.verificarStatusLicenca);

module.exports = {
    base: "/sis",
    rotas: rotas
}