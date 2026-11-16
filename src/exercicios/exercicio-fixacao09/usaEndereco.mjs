import Endereco from './Endereco.mjs';

const endValido = new Endereco();
const endInvalido = new Endereco();

await endValido.setCep('70763030');
endValido.mostrarEnderecoCompleto();

console.log('');

// Inválido, vai dar erro
await endInvalido.setCep('1234');
endInvalido.mostrarEnderecoCompleto();
