const Pessoa = require('./Pessoa');

class PJ extends Pessoa{
    #cnpj;

    setCNPJ(cnpj) {
        if(cnpj.lenght < 18) {
            return false;
        }
        this.#cnpj = cnpj;
        return true;
    }

    getCPNJ(){
        return this.#cnpj;
    }

    setEmail(email) {
        if(email !== '' && email.includes('@')){
            super.setEmail(email);
            return true;
        } 
        return false;
    }

}

module.exports = PJ;