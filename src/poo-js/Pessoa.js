class Pessoa{
    constructor(peso, altura){
        this.peso = peso;
        this.altura = altura;
    }

    imc(){
        return this.peso / (this.altura * this.altura);
    }
}

module.exports = Pessoa;