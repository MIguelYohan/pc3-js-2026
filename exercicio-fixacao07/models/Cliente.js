const Animal = require('./Animal.js');

class Cliente{
    #nome;
    #animais = [];
    #telefone;


    addAnimal(animal){
        if(animal instanceof(Animal)){
            this.#animais.push(animal);
            return true;
        }
        return false;
    }


    getAnimais(){
        return this.#animais;
    }

    getNome(){
        return this.#nome;
    }

    getTelefone(){
        return this.#telefone;
    }

    setNome(nome) {
        if (typeof nome === 'string') {
            this.nome = nome;
        }
    }

    setTelefone(telefone) {
        if (typeof )
    }
}