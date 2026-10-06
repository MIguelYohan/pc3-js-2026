import Pessoa from './Pessoa.js';

class PJ extends Pessoa {
    #cnpj
    #razaoSocial

    setCNPJ(cnpj){
        const cpnjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
        if(typeof(cnpj) == 'string' && cpnjRegex.test(cnpj)){
            this.#cnpj = cnpj;
            return true;
        }
        return false;
    }

    getCNPJ(){
        return this.#cnpj;
    }

    setRazaoSocial(razaoSocial){
        if(typeof(razaoSocial) == 'string'){
            this.#razaoSocial = razaoSocial;
            return true;
        }
        return false;
    }

    getRazaoSocial(){
        return this.#razaoSocial;
    }
}

export default PJ;