//Bibliotecas básicas
const express = require('express');
const cors = require('cors');

//Iniciando dados da API
const api = express();
const porta = 9669;

//Configurado CORS
api.use(cors({ credentials: true, origin: 'http://localhost:8080/' }));

//Arquivos publicos
api.use(express.static('app-files'));

//Configurando para API usar o padrão JSON
api.use(express.json());

//Rotas da API

//Ativando Servidor
api.listen(porta);