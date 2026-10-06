import { validarEmail } from '../biblioteca/utils.js';

export class Pessoa {
    #email;
    #nome;

    setEmail(email){
        if(validarEmail(email)){
            this.#email = email;
            return true;
        }
        return false;
    }

    getEmail(){
        return this.#email;
    }

    setNome(nome){
        if(typeof nome == 'string'){
            this.#nome = nome;
            return true;
        }
        return false;
    }

    getNome(){
        return this.#nome;
    }
}