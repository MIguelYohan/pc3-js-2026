var x = 6; // Variavel 'public' escopo global
console.log(x);

const y = 'a'; // Variavel 'const' não permite reatribuição
// y = 'b' // Não funciona
console.log(y);

{
  // Variável 'z' funciona apenas dentro do bloco {}
  let z = 'b';
  console.log(z);
}
