# Estrutura de Dados - JavaScript



### Recursão

- **Um processo (uma função no nosso caso) que chama a si mesmo;**
  - **A ideia é basicamente pegar um problema e fazê-lo repetidamente em um pedaço menor ou em um pedaço que muda até que você atinja algum ponto final que chamamos de caso base;**
    - **Soluções onde aplicamos a recursão são mais legíveis e "mais limpa" que as soluções iterativas (que envolvem loops);**



#### A recursão está...

- **`JSON.parse` / `JSON.stringify`;**
- **`document.getElementById`;**
- **Algoritmos de travessia do DOM;**
- **Travessia de objetos;**
- **Algoritmos complexos;**



#### Funções

- **Em quase todas as linguagens de programação, existe uma estrutura de dados integrada que gerencia o que acontece quando as funções são invocadas;**
  - **Essa estrutura de dados é chamada de `call stack`;**
- **Call Stack**
  - **Sempre que uma função é invocada, ela é colocada (empurrada) no topo da call stack;**
  - **Quando o JavaScript vê a palavra-chave `return` ou quando a função termina, o compilador remove (pop);**
- **OBS.:**
  - **Você está acostumado com as funções sendo colocadas na pilha de chamadas e exibidas quando terminam;**
  - **Quando escrevemos funções recursivas, continuamos colocando novas funções na pilha de chamadas;**



#### Funcionamento das funções recursivas

- **Invocamos a mesma função com uma entrada diferente até chegar ao seu caso base;**
- **Caso base**
  - **Condição que encerra a recursão;**
- **Partes essenciais de uma função recursiva:**
  - **Caso base;**
  - **Entrada diferente;**



#### Erros cometidos ao se trabalhar com recursão

- **Esquecer o caso base/ definí-lo de forma errada;**
- **Esquecer de retornar um valor ou retornar o valor errado;**
- **Estouro de pilha (quando a recursão nunca para);**



#### Método helper (auxiliar)

- **Design Pattern (HELPER METHOD RECURSION);**

- **Nos exemplos iniciais, é comum a função chamar a si mesma, a partir do seu interior (de dentro);**

- **Com o método _helper_, temos a função externa e dentro dela, temos a função recursiva:**

  ````javascript
  function externa(entrada){
      
     let variavelEeEscopoExterno = []
  
      function auxiliar(entradaAuxiliar){
          // modifica a variavelEeEscopoExterno
          auxiliar(entradaAuxiliar--)
      }
      
     auxiliar(entrada)
  
      return variavelEeEscopoExterno;
  
  }
  ````

  - **Isso geralmente é feito quando precisamos compilar algo como uma matriz ou uma lista de dados (não estamos simplesmente somando/multiplicando um valor repetidamente);**



#### Recursão pura

- **Quando a função em si, é totalmente independente;**
- **Dicas da recursão pura:**
  - **Para arrays, use métodos como slice, spread operator e concat que fazem cópias de arrays para que você não os modifique;**
  - **Lembre-se de que as strings são imutáveis, então você precisará usar métodos como slice, substr ou substring para fazer cópias de strings;**
  - **Para fazer cópias de objetos, use `Object.assign` ou o `spread operator`;**



#### Exemplo sumRange()

![image-20221122214258364](/home/alexa/.config/Typora/typora-user-images/image-20221122214258364.png)
