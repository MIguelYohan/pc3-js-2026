const Pessoa = require('./pessoas/Pessoa.js');
const Aluno = require('./pessoas/Aluno.js');
const Professor = require('./pessoas/Professor.js');
const { mostrarDados } = require('./biblioteca/utils.js');

// Cadastrando 2 Pessoas
const p1 = new Pessoa();
p1.setEmail('geraldo@gmail.com');
p1.setNome('Geraldo');

const p2 = new Pessoa();
p2.setEmail('felipe@outlook.com');
p2.setNome('Felipe');

// Cadastrando 2 Alunos
const a1 = new Aluno();
a1.setEmail('fabricio@gmail.com');
a1.setNome('Fabricio');
a1.setMatricula('2026002190abc');

const a2 = new Aluno();
a2.setEmail('ronaldo@gmail.com');
a2.setNome('Ronaldo');
a2.setMatricula('2026003523xyz');

// Cadastrando 2 Professores
const pr1 = new Professor();
pr1.setEmail('nelson@professor.edu.br');
pr1.setNome('Nelson');

const pr2 = new Professor();
pr2.setEmail('amanda@professor.edu.br');
pr2.setNome('Amanda');

// Teste de dados invalidos
console.log('\nTESTE DE DADOS INVALIDOS:');
// Email invalido:
if(p1.setEmail('geraldo.com')) {
    console.log('Email válido');
}
else {
    console.log('Email inválido -> geraldo.com');
}

// Email professor invalido:
if(pr2.setEmail('amanda@gmail.com')){
    console.log('Email válido');
}
else {
    console.log('Email inválido -> amanda@gmail.com');
}
// Matricula inválida:
if(a1.setMatricula('-/.,.,==../````+_+')){
    console.log('Matrícula válida');
}
else{
    console.log('Matrícula inválida -> -/.,.,==../````+_+');
}

// Relatorio Final:
console.log('\nRELATORIO FINAL:')
mostrarDados(p1);
mostrarDados(p2);

mostrarDados(a1);
mostrarDados(a2);

mostrarDados(pr1);
mostrarDados(pr2);