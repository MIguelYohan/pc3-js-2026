import { validarEmailProfessor } from '../biblioteca/utils.js';
import { Pessoa } from './Pessoa.js';

export class Professor extends Pessoa{
    setEmail(email){
        if(validarEmailProfessor(email)){
            super.setEmail(email);
            return true;
        }
        return false;
    }
}

