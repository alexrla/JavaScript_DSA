# Estrutura de Dados - JavaScript



### Hash table

- **Estrutura de dados que armazenam pares de chave-valor;**

  - **Semelhante aos arrays, mas as chaves não são ordenadas;**
  - **E ao contrário dos arrays, as Hash Tables são rápidas para todas as seguintes operações: encontrar/buscar valores, inserir/adicionar valores e remover valores;**

- **Quase toda linguagem de programação, possui algum tipo de estrutura de dados de Hash Table , incorporada:**

  | Linguagens       | Estruturas      |
  | ---------------- | --------------- |
  | Python           | Dicionários     |
  | JavaScript       | Objetos e Maps* |
  | Java, Go e Scala | Maps            |
  | Ruby             | Hashes          |

- **E devido a sua velocidade, são bastante utilizadas;**

- **Para implementar a nossa própria versão de um Hash Table, usaremos um array;**

- **Para procurar por chave, precisamos de uma forma de converter chaves em índices de array, válidos;**

  - **As funções que executam essa tarefa, são chamadas de função hash;**
  - **E uma boa função hash, deve:**
    - **Ser rápida;**
    - **Não agrupar saídas em índices específicos, mas distribuir de maneira uniforme;**
    - **Determinística (a mesma entra deve produzir sempre a mesma saída);**

- **O porquê de utilizar números primos:**

  - **O número primo na função hash é útil para distribuir as chaves de maneira mais uniforme;**
  - **Também é útil se o array na qual você está colocando valores tiver um comprimento primo;**

- **Colisões**

  - **Mesmo com utilizando um grande array e uma ótima função hash, as colisões são inevitáveis;**
  - **Existem muitas estratégias para lidar com colisões, duas delas são:**
    - **Encadeamento separado (Separate Chaining): em cada índice do array, armazenamos valores usando uma estrutura de dados mais sofisticada (por exemplo, um outro array ou uma lista encadeada). Isso acaba permitindo armazenar vários pares chave-valor no mesmo índice;**
    - **Sondagem linear (Linear Probing): quando detectamos uma colisão, buscamos no array o próximo espaço vazio. Ao contrário do encadeamento separado, isso nos permite armazenar um único para chave-valor em cada índice;**

- **Operações**

  - **Set - pseudocódigo:**

    ```javascript
    /*
    	1 - Esse método aceita uma chave e um valor;
    	2 - Aplica o método (função) hash;
    	3 - Armazena o par chave-valor no array da tabela hash por meio do encadeamento separado;
    */
    ```

  - **Get - pseudocódigo:**

    ```javascript
    /*
    	1 - Esse método aceita uma chave;
    	2 - Aplica o método (função) hash;
    	3 - Recupera o par chave-valor na tabela hash;
    	4 - Se a chave não for encontrada, retorna undefined;
    */
    ```

  - **Keys (retorna todas as chaves) - pseudocódigo:**

    ```javascript
    /*
    	1 - Percorre o array do Hash Table e retorne um array de chaves;
    */
    ```

  - **Values (retorna todos os valores) - pseudocódigo:**

    ```javascript
    /*
    	1 - Percorre o array do Hash Table e retorne um array de valores;
    */
    ```

- **BIG-O:**
  - **Inserção: `O(1)`;**
  - **Remoção: `O(1)`;**
  - **Acesso (encontrar um valor a partir da sua chave): `O(1)`;**
