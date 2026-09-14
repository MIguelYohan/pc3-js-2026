import {carteiraDigital} from './carteiraDigital.js';

const carteira = new carteiraDigital();

carteira.definirTitular('João Silva');
carteira.depositar(200);

console.log(carteira.consultarSaldo());

carteira.sacar(50);

carteira.exibirInformacoes();