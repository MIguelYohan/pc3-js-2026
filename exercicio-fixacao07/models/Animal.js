const Cliente = require('./Cliente.js');
const Veterinario = require('./Veterinario.js');
const Prontuario = require('./Prontuario.js');

class Animal{
    #dono;
    #nome;
    #especie;
    #veterinarios = [];
    #prontuario;
    
    getDono(){
        return this.#dono;
    }

    getNome(){
        return this.#nome;
    }

    getEspecie(){
        return this.#especie;
    }

    getVeterinarios(){
        return this.#veterinarios;
    }

    getProntuario(){
        return this.#prontuario;
    }

    setDono(dono){
        if(dono instanceof(Cliente)){
            this.#dono = dono;
            if(!dono.getAnimais().includes(this)){
                dono.addAnimal(this);
            }
            return true;
        }
        return false;
    }

    setNome(nome) {
        if (typeof nome === 'string') {
            this.#nome = nome;
            return true;
        }
        return false;
    }

    setEspecie(especie) {
        if (typeof especie === 'string') {
            this.#especie = especie;
            return true;
        }
        return false;
    }

    addVeterinario(veterinario){
        if (veterianario instanceof(Veterinario)){
            this.#veterinarios.push(veterinario);
            if(!veterinario.getAnimais().includes(this)){
                veterinario.addAnimal(this);
            }
            return true;
        }
        return false;
    }

    setProntuario(prontuario) {
        if (prontuario instanceof(Prontuario)){
            this.#prontuario = prontuario;
            return true;
        }
        return false;
    }
}

module.exports = Animal;