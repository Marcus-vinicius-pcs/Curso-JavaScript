//Todo arquivo que contenha código JS é considerado um módulo no NodeJS, contendo variáveis, funções exportadas ou não.
//cada modulo é um objeto


//outra forma de exportar um arquivo é criando um objeto dentro dekle
module.exports  = {
    bomDia: 'Bom Dia!',
    boaNoite() {
        return 'boa noite!'
    }
}