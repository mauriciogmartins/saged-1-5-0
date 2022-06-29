const db = require('../db/dbConnection');

class SisControle {
    static async verificarStatusLicenca(requisicao, resposta) {
        const sql = `SELECT sis_licenca.* FROM sis_licenca
                     RIGHT JOIN instituicao ON instituicao.cnpj = sis_licenca.cnpj`;

        db.query(sql, (erro, data) => {
            if (erro) {
                resposta.status(500).json({
                    mensagem: "Erro na no banco de dados",
                    detalhes: erro.message
                });
                return;
            }

            if (data[0].tipo_licenca === 'FIXA') {
                resposta.status(201).json({
                    mensagem: "Licença OK"
                });
                return;
            }

            if (new Date(data[0].fim) < new Date()) {
                resposta.status(201).json({
                    mensagem: "Licença expirou"
                });
                return;
            }

            resposta.status(201).json({
                mensagem: "Licença Ok"
            });
        });
    }
}

module.exports = SisControle;