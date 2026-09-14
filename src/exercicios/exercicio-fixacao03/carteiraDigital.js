class carteiraDigital {

    #titular;
    #saldo = 0;

    definirTitular(nome){
        const isAlpha = str => /^[a-zA-ZÀ-ÿ]+(\s[a-zA-ZÀ-ÿ]+)*$/.test(str);
        if(isAlpha(nome)){
            this.#titular = nome;
            return true;
        }
        return false;
    }

    consultarTitular(){
        return this.#titular;
    }

    depositar(valor){
        if(valor >= 0){
            this.#saldo += valor;
            return true;
        }
        return false;
    }

    sacar(valor){
        if(valor >= 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            return valor;
        }
        return false;
    }

    consultarSaldo(){
        return this.#saldo;
    }

    exibirInformacoes(){
        console.log(
            `Titular: ${this.consultarTitular()}\nSaldo: ${this.consultarSaldo()}`
        );
    }
}

export {carteiraDigital};