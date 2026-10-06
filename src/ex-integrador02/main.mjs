import IEclss, { IEfunc, IEjson } from './objetos/IE.mjs';
import PJ from './pessoas/PJ.mjs';

// 1 e 2. Dois objetos PJ, com nome, e-mail, CNPJ e razão social
const pj1 = new PJ();
pj1.setNome('Padaria Café e Pão');
pj1.setEmail('contato@cafeepao.com');
pj1.setCNPJ('12.345.678/0001-90');
pj1.setRazaoSocial('Padaria Café e Pão LTDA');

const pj2 = new PJ();
pj2.setNome('Sapataria Marcinho');
pj2.setEmail('contato@marcinhosapatos.com');
pj2.setCNPJ('98.765.432/0001-10');
pj2.setRazaoSocial('Sapataria Marcinho S/A');

// 3. Objeto Date
const now = new Date();

// 4. IE com a classe
const ieC = new IEclss();
ieC.setNumero('111');
ieC.setEstado('SP');
ieC.setDataRegistro(now);

// 5. IE com a função fábrica
const ieF = IEfunc();
ieF.setNumero('222');
ieF.setEstado('RJ');
ieF.setDataRegistro(now);

// 6. Configurar o objeto literal
IEjson.setNumero('333');
IEjson.setEstado('MG');
IEjson.setDataRegistro(now);

// 7. Associar PJs às três implementações
console.log('Associação (Classe):', ieC.setPJ(pj1));
console.log('Associação (Factory):', ieF.setPJ(pj2));
console.log('Associação (Objeto Literal):', IEjson.setPJ(pj1));
console.log('');

// 8. Recuperar os objetos relacionados com getPJ()
const pjC = ieC.getPJ();
const pjF = ieF.getPJ();
const pjJ = IEjson.getPJ();

// 9. Exibir os dados
function relatorio(titulo, ie, pj) {
    console.log(`##### ${titulo} #####`);
    console.log('=== Pessoa Jurídica ===');
    console.log(`Nome: ${pj.getNome()}`);
    console.log(`E-mail: ${pj.getEmail()}`);
    console.log(`CNPJ: ${pj.getCNPJ()}`);
    console.log(`Razão Social: ${pj.getRazaoSocial()}`);
    console.log('');
    console.log('=== Inscrição Estadual ===');
    console.log(`Número: ${ie.getNumero()}`);
    console.log(`Estado: ${ie.getEstado()}`);
    console.log(`Data de Registro: ${ie.getDataRegistro().toLocaleString('pt-BR')}`);
    console.log(`Pessoa Jurídica: ${pj.getRazaoSocial()}`);
    console.log('');
}

relatorio('IEclss', ieC, pjC);
relatorio('IEfunc()', ieF, pjF);
relatorio('IEjson', IEjson, pjJ);

// Testes - instanceof
console.log("== TESTES Inválidos ==")
const objetoInvalido = {
    nome: 'Empresa Inválida'
};

const ieCTeste = new IEclss();
if(!ieCTeste.setPJ(objetoInvalido)){
    console.log('Objeto Inválido - IEclss');
}

const ieFTeste = IEfunc();
if(!ieFTeste.setPJ(objetoInvalido)){
    console.log('Objeto Inválido - IEfunc');
}

if(!IEjson.setPJ(objetoInvalido)){
    console.log('Objeto Inválido - IEjson');
}
// Objeto válido:
const objetoValido = new PJ();
const ieCVerdadeiro = new IEclss();

if(!ieCVerdadeiro.setPJ(objetoValido)){
    console.log('Objeto Inválido');
}
else{
    console.log('Objeto Válido');
}
