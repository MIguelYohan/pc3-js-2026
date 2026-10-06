const { validarEmailProfessor } = require('../biblioteca/utils.js')
const Pessoa = require('./Pessoa.js');

class Professor extends Pessoa{
    setEmail(email){
        if(validarEmailProfessor(email)){
            super.setEmail(email);
            return true;
        }
        return false;
    }
}

module.exports = Professor;