import { Pessoa } from './models/Pessoa.js';

const p1 = new Pessoa();
p1.setEmail('geraldo@gmail.com');
p1.setNome('Geraldo');

const p2 = new Pessoa();
p2.setEmail('felipe@outlook.com');
p2.setNome('Felipe');

console.log(p2.getNome());