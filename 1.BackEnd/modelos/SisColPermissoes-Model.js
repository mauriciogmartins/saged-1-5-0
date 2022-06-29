class SisColPermissoes {
    constructor(cod, item, ordem, ativo, novo, alterar, excluir, imprimir) {
        this.cod = cod;
        this.item = item;
        this.ordem = ordem;
        this.ativo = ativo;
        this.modulo = modulo;
        this.novo = novo;
        this.alterar = alterar;
        this.excluir = excluir;
        this.imprimir = imprimir;
    }
}

module.exports = SisColPermissoes;