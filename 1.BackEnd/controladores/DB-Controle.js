const db = require('../db/dbConnection');

class DBControle {
    static async verificarConexao(requisicao, resposta) {
        db.getConnection((erro) => {
            if (erro) {
                resposta.status(500).json({
                    mensagem: "Erro na conexao do banco de dados",
                    detalhes: erro.message
                });
                return;
            }

            resposta.status(201).json({
                mensagem: "Banco de dados conectado",
            });
            return;
        });
    }
}

module.exports = DBControle;