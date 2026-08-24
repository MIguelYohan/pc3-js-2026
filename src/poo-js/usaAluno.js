const Aluno = require('./Aluno.js');

const joao = new Aluno();

joao.escola = "IFB";
joao.setMatricula(12345);
joao.setCurso("Ciência da Computação");

console.log(joao.getMatricula());
console.log(joao.getCurso());
console.log(`Escola: ${joao.escola}`);