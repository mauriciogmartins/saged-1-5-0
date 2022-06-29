class InstituicaoParametros {
    constructor(cnpj_institucao, list_genero, list_raca, list_estado_civil,
        list_transporte, aluno_max_contatos, alunos_list_doe_congenita, alunos_list_doe_contraidas,
        alunos_list_nec_especiais, alunos_list_dif_aprendizagem) {

        this.cnpj_institucao = cnpj_institucao;
        this.list_genero = list_genero;
        this.list_raca = list_raca;
        this.logo = logo;
        this.list_estado_civil = list_estado_civil;
        this.list_transporte = list_transporte;
        this.aluno_max_contatos = aluno_max_contatos;
        this.alunos_list_doe_congenita = alunos_list_doe_congenita;
        this.alunos_list_doe_contraidas = alunos_list_doe_contraidas;
        this.alunos_list_nec_especiais = alunos_list_nec_especiais;
        this.alunos_list_dif_aprendizagem = alunos_list_dif_aprendizagem;
    }
}

module.exports = InstituicaoParametros;