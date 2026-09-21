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
            this.#nome = nome;
            return true;
        }
        return false;
    }

    setTelefone(telefone) {
        if (typeof telefone === 'number'){
            telefone = String(telefone);
            this.#telefone = telefone;
            return true;
        }
        else if(typeof telefone === 'string'){
            telefone.replace('-', '');
            telefone.replace('(', '');
            telefone.replace(')', '');
            this.#telefone = telefone;
            return true;
        }
        return false;
    }

    listarAnimais(){
        for(const animal of this.#animais){
            console.log(animal.getNome() + ' ' + animal.getEspecie());
        }
    }
}

module.exports = Cliente;