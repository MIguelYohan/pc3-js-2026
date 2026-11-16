1. Qual a vantagem de consultar diretamente a API antes de modificar a classe?

Resposta: Permite conhecer a estrutura dos dados retornados pela API, identificar os nomes das propriedades disponíveis e verificar quais informações podem ser utilizadas na classe.

2. Por que os novos dados devem ser armazenados em atributos privados?

Resposta: Para manter o encapsulamento, protegendo os dados contra alterações diretas externas e garantindo maior controle sobre o acesso às informações da classe.

3. Qual a finalidade dos métodos get adicionados à classe?

Resposta: Permitir o acesso controlado aos atributos privados, possibilitando consultar seus valores sem precisar expor diretamente as propriedades da classe.

4. Por que não devemos acessar diretamente os atributos retornados pela API fora de setCep()?

Resposta: Porque o método setCep() é responsável por receber os dados da API e armazená-los nos atributos privados da classe. Dessa forma, mantemos a organização e o encapsulamento, evitando dependências diretas da estrutura da API em outras partes do código.

5. Qual a diferença entre o nome de uma propriedade da API e o nome de um atributo da classe?

Resposta: O nome da propriedade da API é definido pelo serviço que fornece os dados, enquanto o nome do atributo da classe é definido pelo desenvolvedor, de acordo com a organização e as necessidades do projeto.

6. Por que a classe não precisa utilizar obrigatoriamente os mesmos nomes adotados pelo ViaCEP?

Resposta: Porque a classe possui sua própria estrutura e organização. Podemos utilizar nomes diferentes e fazer a correspondência entre as propriedades retornadas pela API e os atributos privados da classe.

7. O que aconteceria se a API adicionasse novos campos no futuro?

Resposta: Os novos campos não seriam armazenados automaticamente na classe. Seria necessário analisar os dados adicionados e modificar a classe para incluir os novos atributos e, se necessário, seus respectivos métodos de acesso.

8. Por que o tratamento com try/catch deve continuar funcionando mesmo após a inclusão de novos atributos?

Resposta: Porque o tratamento com try/catch é responsável por capturar erros que podem acontecer durante a execução, como falhas na conexão com a API, CEP inválido ou problemas na conversão dos dados. A inclusão de novos atributos não altera a finalidade desse mecanismo de tratamento de erros.