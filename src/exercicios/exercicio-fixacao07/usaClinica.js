const Cliente = require('./models/Cliente.js');
const Animal = require('./models/Animal.js');
const Prontuario = require('./models/Prontuario.js');
const Veterinario = require('./models/Veterinario.js');

const cliente = new Cliente();
cliente.setNome('Miguel Yohan');
cliente.setTelefone('(62) 98143-4044');

const animal1 = new Animal();
animal1.setNome('Pituxa');
animal1.setEspecie('Cachorro');

const animal2 = new Animal();
animal2.setNome('Jorge');
animal2.setEspecie('Lagarto');

const prontuarioAnimal1 = new Prontuario();
prontuarioAnimal1.setNumero('79500');
animal1.setProntuario(prontuarioAnimal1);

const prontuarioAnimal2 = new Prontuario();
prontuarioAnimal2.setNumero('79501');
animal2.setProntuario(prontuarioAnimal2);

const veterinario1 = new Veterinario();
veterinario1.setNome('Fernando');
veterinario1.setCRMV('19027491827');

const veterinario2 = new Veterinario();
veterinario2.setNome('Maristela');
veterinario2.setCRMV('12980392121');

animal1.addVeterinario(veterinario1);
animal2.addVeterinario(veterinario2);

cliente.addAnimal(animal1);
cliente.addAnimal(animal2);
animal1.setDono(cliente);
animal2.setDono(cliente);

console.log('Nome do Cliente: ' + cliente.getNome());
console.log('Telefone do Cliente: ' + cliente.getTelefone());
console.log('Animais Cadastrados: ' + serialize(cliente.getAnimais()));
console.log('Prontuario Animal 1: ' + animal1.getProntuario().getNumero());
console.log('Prontuario Animal 2: ' + animal2.getProntuario().getNumero());
console.log('Veterinario Animal 1: ' + serialize(animal1.getVeterinarios()));
console.log('Veterinario Animal 2: ' + serialize(animal2.getVeterinarios()));

function serialize(array){
    let text = '';
    for(const item of array){
        text += (item.getNome ? item.getNome() : item) + ' ';
    }
    text = text.trim();
    return text;
}