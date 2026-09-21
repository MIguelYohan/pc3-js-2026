const PJ = require('./PJ');

const pedro = new PJ();
pedro.setCNPJ('01.451.373/0003-03');
pedro.setEmail('pedro@gmail.com');
pedro.setNome('Pedro');

console.log(pedro.getNome());
console.log(pedro.getEmail());
console.log(pedro.getCPNJ());
