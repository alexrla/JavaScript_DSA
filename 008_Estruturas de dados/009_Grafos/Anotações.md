# Estrutura de Dados - JavaScript



### Grafos

- **Estrutura de dados que consiste em um conjunto finito (e possivelmente mutável) de nós (vérticesou pontos), que se conectam a outras nós, por meios de arestas (conexões entres os nós);**

  ![image-20221228144659032](/home/alexa/.config/Typora/typora-user-images/image-20221228144659032.png)

  ![image-20221228144712022](/home/alexa/.config/Typora/typora-user-images/image-20221228144712022.png)

  ![image-20221228144723298](/home/alexa/.config/Typora/typora-user-images/image-20221228144723298.png)

  ![image-20221228144734408](/home/alexa/.config/Typora/typora-user-images/image-20221228144734408.png)

  

  - **Uma árvore é um caso especial de grafo;**

- **Onde os grafos são utilizados:**

  - **Redes sociais;**
  - **Localização / Mapeamento;**
  - **Algoritmos de Roteamento;**
  - **Hierarquia visual;**
  - **Otimizações do sistema de arquivos;**
  - **Recomendações:**
    - **"As pessoas também assistiram";**
    - **"Você pode gostar também..."**
    - **"Pessoas que você talvez conheça";**
    - **"Frequentemente comprado com";**
  - **etc.;**

- **Terminologia**

  - **Vértice (Vertex): um nó;**

  - **Aresta (Edge): conexão entre dois nós;**

    ![image-20221228153155579](/home/alexa/.config/Typora/typora-user-images/image-20221228153155579.png)

  - **Grafo ponderado: quandos as arestas do grafo possuem peso (valores são atribuídos as arestas);**

    ![image-20221228153710606](/home/alexa/.config/Typora/typora-user-images/image-20221228153710606.png)

    - **Sendo assim, grafos não ponderados são grafos onde suas arestas não possuem peso;**

  - **Grafo direcionado (dirigido/orientado): quando só existe um caminho entre dois vértices que se conectam (direções  são atribuídas a aresta que conecta os nós). Por exemplo, podemos ter uma aresta que liga os vértices  u e v, a aresta (u, v), mas o contrário, a aresta (v, u), pode não existir;**

    ![image-20221228154034228](/home/alexa/.config/Typora/typora-user-images/image-20221228154034228.png)

    - **Logo, um grafo não direcionado, é um grafo onde a partir da aresta que conecta os nós, eu posso ir de um nó até o outro e vice-versa (uma conexão bidirecional);**

- **Representações de um grafo:**

  - **Os grafos são comumente representados de duas maneiras:**

    - **Matriz de adjacência:**

      ![image-20221228160321040](/home/alexa/.config/Typora/typora-user-images/image-20221228160321040.png)

      **- Estrutura (array) bidimensional;**

      **- Cada linha e coluna representam um vértice;**

      **- Uns e zeros indicam se há ou não, conexão entre os vértices, respectivamente;**

      **- Sempre que um novo vértice é adicionado ao grafo, a matriz deve ganhar uma linha e uma coluna, referentes ao vértice adicionado;**
    
    - **Lista de adjacência:**
    
      ![image-20221228160841520](/home/alexa/.config/Typora/typora-user-images/image-20221228160841520.png)
    
      ![image-20221228160858755](/home/alexa/.config/Typora/typora-user-images/image-20221228160858755.png)
      
      **- É usado um array para armazenar as conexões (as ligações) entre os nós;**
      
      **- No primeiro exemplo, as conexões entre os vértices se dão a partir dos índices do array, começando pelo zero;**
      
      **- Já no segundo exemplo, é utilizado um Hash Table, euma estrutura de dados que armazenas pares chave-valor;**

  - **BIG-O (`|V|` - número de vértices e `|E|` - número de arestas):**

    | Operação           | Lista de adjacência | Matriz de adjacência |
    | ------------------ | ------------------- | -------------------- |
    | Adição de vértice  | O(1)                | O(\|V²\|)            |
    | Adição de aresta   | O(1)                | O(1)                 |
    | Remoção de vértice | O(\|V\| + \|E\|)    | O(\|V²\|)            |
    | Remoção de aresta  | O(\|E\|)            | O(1)                 |
    | Consulta           | O(\|V\| + \|E\|)    | O(1)                 |
    | Armazenamento      | O(\|V\| + \|E\|)    | O(\|V²\|)            |

  - **Diferenças:**

    | Lista de adjacência                                   | Matriz de adjacência                          |
    | ----------------------------------------------------- | --------------------------------------------- |
    | Pode ocupar menos espaço (em grafos esparsos)         | Ocupa mais espaço (em grafos esparsos)        |
    | Mais rápido para iterar em todas as arestas           | Mais lento para iterar sobre todas as arestas |
    | Pode ser mais lento para procurar arestas específicas | Mais rápido para procurar arestas específicas |

  - **Qual usar?**
    - **Devido a maioria dos dados no mundo real tenderem a se prestar como gráfos mais esparsos e/ou maiores, ficamos com lista de adjacência;**

- **Operações:**

  - **Adição de vértice - pseudocódigo:**

    ```javascript
    /*
    	1 - Escreva um método chamado addVertex, que aceita o nome de um vértice;
    	2 - Ele deve adicionar uma chave à lista de adjacência com o nome do vértice e definir seu valor como uma matriz vazia;
    */
    ```

  - **Adição de aresta - pseudocódigo:**

    ```javascript
    /*
    	1 - Este método deve aceitar dois vértices, podemos chamá-los de vertex1 e vertex2;
    	2 - O método deve encontrar na lista de adjacências a chave do vertex1 e enviar o vertex2 para o array;
    	3 - O método também deve encontrar na lista de adjacências a chave do vertex2 e enviar o vertex1 para o array;
    
    	OBS.: Não se preocupe em lidar com erros/vértices inválidos;
    */
    ```

  - **Remoção de aresta - pseudocódigo:**

    ```javascript
    /*
    	1 - Este método deve aceitar dois vértices, podemos chamá-los de vertex1 e vertex2;
    	2 - O método deve reatribuir a chave de vertex1 para ser um array que não contém vertex2;
    	3 - O método também deve deve reatribuir a chave de vertex1 para ser um array que não contém vertex2;
    
    	OBS.: Não se preocupe em lidar com erros/vértices inválidos;
    */
    ```

  - **Remoção de vértice - pseudocódigo:**

    ```javascript
    /*
    	1 - Este método deve aceitar deve aceitar um vértice para remover;
    	2 - O método deve iterar enquanto houver outros vértices na lista de adjacências para esse vértice;
    	3 - Dentro do loop, chame o método removeEdge com o vértice que estamos removendo e quaisquer valores na lista de adjacência para esse vértice;
    	4 - Exclua a chave na lista de adjacência para esse vértice;
    */
    ```
