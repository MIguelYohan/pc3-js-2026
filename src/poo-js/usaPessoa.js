const Pessoa = require('./Pessoa.js');

const joao = new Pessoa(80, 1.75);
console.log(Math.round(joao.imc()));

const pedro = new Pessoa();
pedro.peso = 100;
pedro.altura = 1.6;
console.log(Math.round(pedro.imc()));