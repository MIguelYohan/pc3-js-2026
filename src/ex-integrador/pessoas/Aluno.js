const Pessoa = require('./Pessoa.js');
const { validarMatricula } = require('../biblioteca/utils.js');

class Aluno extends Pessoa {
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

module.exports = Aluno;