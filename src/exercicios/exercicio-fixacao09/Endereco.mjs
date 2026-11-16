export default class Endereco {
    #cep;
    #logradouro;
    #bairro;
    #cidade;
    #uf;
    #regiao;
    #estado;
    #complemento;

    async setCep(cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        if (dados.erro) {
            throw new Error("CEP não encontrado na base do ViaCEP.");
        }

        this.#cep = dados.cep;
        this.#logradouro = dados.logradouro;
        this.#bairro = dados.bairro;
        this.#cidade = dados.localidade;
        this.#uf = dados.uf;
        this.#regiao = dados.regiao;
        this.#estado = dados.estado;
        this.#complemento = dados.complemento || "não informado";

    }

    getCep() {
        return this.#cep;
    }

    getLogradouro() {
        return this.#logradouro;
    }

    getBairro() {
        return this.#bairro;
    }

    getCidade() {
        return this.#cidade;
    }

    getUf() {
        return this.#uf;
    }

    getRegiao() {
        return this.#regiao;
    }

    getEstado() {
        return this.#estado;
    }

    getComplemento() {
        return this.#complemento;
    }

    mostrarEnderecoCompleto() {
        try {
            console.log("CEP:", this.getCep());
            console.log("Logradouro:", this.getLogradouro());
            console.log("Bairro:", this.getBairro());
            console.log("Cidade:", this.getCidade());
            console.log("UF:", this.getUf());
            console.log("Região:", this.getRegiao());
            console.log("Estado:", this.getEstado());
            console.log("Complemento:", this.getComplemento());
    
        } catch (erro) {
            console.error("❌ Erro ao definir CEP:", erro.message);
        }
    }
}