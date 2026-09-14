const Pessoa = require('./Pessoa.js');

const joao = new Pessoa();

joao.setNome('Joao');
console.log(joao.getNome())

joao.setEmail('joaozinho@gmail.com')
console.log(joao.getEmail())