# Estrutura de Dados - JavaScript



### Programação dinâmica

- **O que é:**
  - **"Um método para resolver um problema complexo dividindo-o em uma coleção de subproblemas mais simples, resolvendo cada um desses subproblemas apenas uma vez e armazenando suas soluções."**
- **Só funciona em problemas com subestrutura ideial (optimal substructure) e com subproblemas sobrepostos (overlapping subproblems);**

- **Subproblemas sobrepostos (overlapping subproblems):**
  - **Diz-se que um problema tem subproblemas sobrepostos se puder ser dividido em subproblemas que são reutilizados várias vezes;**
  - **Exemplo: Sequência de Fibonacci**
    - **"Todo número depois dos dois primeiros é a soma dos dois anteriores";**
- **Subestrutura ideial (optimal substructure):**
  - **Diz-se que um problema tem subestrutura ideial, se sua solução ideal (sua melhor solução) poder ser construída a partir das soluções ideias dos seus subproblemas;**
  - **Exemplos:**
    - **Mais uma vez: Sequência de Fibonacci (a solução ideial para o Finacci do elemento atual, depende da melhor solução do Fibonacci dos dois elementos anteriores);**
    - **E agora, o algoritmo de caminho mais curto (onde para se encontrar o caminho mais curto entre dois vértices, o _x_ do problema, devemos encontrar o caminho mais curto entres os vértices que estão dispostos pelo caminho);**
- **Memoização (Memoization - tipo de programação dinâmica)**
  - **Armazenar os resultados de chamadas de função " caras "e retornar o resultado em cache quando as mesmas entradas ocorrerem novamente;**
  - **Essa estratégia é uma maneira de lembrar ou armazenar as respostas para os subproblemas repetidos. Logo, não precisaremos refazer tarefas já feitas e isso acelera muito as coisas;**

- **Tabulação (Tabulation - outro tipo de programação dinâmica)**
  - **Nessa estratégia, armazenamos o resultado de um resultado anterior, em uma "tabela" (geralmente um array);**
  - **Geralmente é feito usando iteração;**
  - **Uma melhor complexidade espacial pode ser alcançada usando tabulação;**
  - **Aqui o trabalho é feito debaixo para cima;*
