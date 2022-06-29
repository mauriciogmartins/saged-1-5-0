class ColaboradoresPermissoesGerais {
    constructor(cod, cod_colaborador, cod_item, consultar, novo, alterar, excluir, imprimir) {
        this.cod = cod;
        this.cod_colaborador = cod_colaborador;
        this.cod_item = cod_item;
        this.consultar = consultar;
        this.novo = novo;
        this.alterar = alterar;
        this.excluir = excluir;
        this.imprimir = imprimir;
    }
}

module.exports = ColaboradoresPermissoesGerais;