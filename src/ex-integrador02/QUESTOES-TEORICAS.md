1. PJ reaproveita tudo que Pessoa já tem (nome, email e seus métodos) e só acrescenta o que é específico de pessoa jurídica (cnpj e razaoSocial). Issoevita repetir código.
2. Porque a cópia duplica código e dificulta a manutenção: se um método mudar em Pessoa, seria preciso lembrar de alterar também em PJ. Com a herança, existe uma única versão.
3. Verificar se o objeto recebido foi criado a partir da classe PJ. Assim, só objetos válidos são associados à Inscrição Estadual.
4. O teste if (pj) só checa se existe um valor (qualquer objeto, texto ou número "verdadeiro" passa). O teste if (pj instanceof PJ) checa se o valor é realmente uma PJ, rejeitando objetos de outros tipos.
5. IEclss é uma classe: usa atributos privados com #, this e é criada com new. IEfunc() é uma função que cria e devolve um objeto: guarda os dados no escopo da função, sem this e sem new.
6. O objeto dados é criado dentro da função e não é retornado. Fora dela, só se acessa o que o return expõe (os métodos set e get). Os métodos continuam enxergando dados por causa do closure.
7. IEjson é um objeto JavaScript: pode ter métodos e usar this. JSON é um formato de texto para representar e trocar dados: não tem métodos, e os nomes das propriedades ficam entre aspas duplas.
8. A exportação padrão (export default) é única por módulo e é importada sem chaves, com qualquer nome. A exportação nomeada (export) pode ocorrer várias vezes e é importada entre chaves, com o nome exato.
9. Uma classe é um molde, e o new cria uma instância a partir dele. IEfunc() já é uma função que cria e retorna o objeto sozinha, então basta chamá-la.
10. Deixa o projeto mais organizado e fácil de manter, permite reutilizar o código em outros arquivos com import e export e facilita testar cada parte isoladamente.
11. A IE guarda uma referência a um objeto PJ em um atributo (#pj na classe, dados.pj na função fábrica, pj no objeto literal). O setPJ() faz a associação e o getPJ() recupera o objeto.
12. Porque Date é uma classe nativa do JavaScript, já disponível na linguagem. Não precisa ser criada nem importada.
