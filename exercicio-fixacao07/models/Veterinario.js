const Animal = require('./Animal.js')

class Veterinario{
    #nome;
    #crmv;
    #animais = [];

    getNome(){
        return this.#nome;
    }

    getCRMV(){
        return this.#crmv;
    }

    getAnimais(){
        return this.#animais;
    }

    setNome(nome) {
        if (typeof nome === 'string') {
            this.#nome = nome;
            return true;
        }
        return false;
    }

    setCRMV(crmv) {
        if (typeof crmv === 'string') {
            this.#crmv = crmv;
            return true;
        }
        return false;
    }

    addAnimal(animal){
        if(animal instanceof(Animal)){
            this.#animais.push(animal);
            if(!animal.getVeterinarios().includes(this)){
                animal.addVeterinario(this);
            }
            return true;
        }
        return false;
    }
}

module.exports = Veterinario;