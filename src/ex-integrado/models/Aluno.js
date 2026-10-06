import { Pessoa } from './Pessoa.js';
import { validarMatricula } from '../biblioteca/utils.js';

export class Aluno extends Pessoa {
    #matricula;

    setMatricula(matricula){
        if(validarMatricula(matricula)){
            this.#matricula = matricula;
            return true;
        }
        return false;
    }

    getMatricula(){
        return this.#matricula;
    }
}

