class Prontuario{
    #numero;
    #observacoes;
    #animal;

    getNumero(){
        return this.#numero;
    }

    getObservacoes(){
        return this.#observacoes;
    }

    getAnimal(){
        return this.#animal;
    }

    setNumero(numero){
        if (typeof numero === 'string') {
            this.#numero = numero;
            return true;
        }
        return false;
    }

    setObservacoes(observacoes){
        if (typeof observacoes === 'string') {
            this.#observacoes = observacoes;
            return true;
        }
        return false;
    }

    setAnimal(animal){
        if (animal instanceof Animal){
            this.#animal = animal;
            return true;
        }
        return false;
    }
}

module.exports = Prontuario;

const Animal = require('./Animal.js');