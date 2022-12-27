# Estrutura de Dados - JavaScript



### Travessia de árvore

- **Visitar todos os nós de uma árvore;**

- **Dois caminhos:**

  - **Pesquisa em largura (Breadth-first Search);**
  - **Pesquisa em profundidade (Depth-first Search);**

- **Pesquisa em largura (Breadth-first Search - BFS)**

  - **Realiza a travessia na horizontal;**

  - **O objetivo do algoritmo é marcar cada vértice como visitado, evitando ciclos;**

  - **Pseudocódigo (versão iterativa):**

    ```javascript
    /*
    	1 - Crie uma fila (pode ser um array) e uma variável para armazenar os valores dos nós visitados;
    	2 - Coloque o nó raiz na fila;
    	3 - Enquanto houver algo na fila:
    		3.1 - Retire um nó da fila e envie o valor do nó para a variável que armazena os nós;
    		3.2 - Se houver a propriedade left no nó desenfileirado, adicione-o à fila;
    		3.3 - Se houver a propriedade right no nó desenfileirado, adicione-o à fila;
    	4 - Retorne a variável que armazena os valores;
    */
    ```


  <img src="/home/alexa/.config/Typora/typora-user-images/image-20221227005626203.png" alt="image-20221227005626203"  />

- **Pesquisa em profundidade (Depth-first Search - DFS);**

  - **Tem o mesmo objetivo da pesquisa em largura, se diferenciando pelo fato de realizar a travessia verticalmente;**

  - **Dependendo da ordem, podemos ter:**

    - **DFS - PreOrder;**
    - **DFS - InOrder;**
    - **DFS - PostOrder;**

  - **DFS - PreOrder**

    - **Pseudocódigo (versão recursiva):**

      ```javascript
      /*
      	1 - Crie uma variável para armazenar os valores dos nós visitados;
      	2 - Armazene a raiz do árvore em uma variável chamada current;
      	3 - Escreva um método auxiliar que aceite um nó:
      		3.1 - Empurre o valor do nó para a variável que armazena os valores;
      		3.2 - Se o nó tiver a propriedade left, chame o método auxiliar com a propriedade left no nó;
      		3.3 - Se o nó tiver a propriedade right, chame o método auxiliar com a propriedade right no nó;
      	4 - Invoque o método auxiliar com a variável current;
      	5 - Retorne o array de valores;
      */
      ```

    ![image-20221227015841025](/home/alexa/.config/Typora/typora-user-images/image-20221227015841025.png)

    ![image-20221227015904264](/home/alexa/.config/Typora/typora-user-images/image-20221227015904264.png)

    ![image-20221227015920505](/home/alexa/.config/Typora/typora-user-images/image-20221227015920505.png)

    ![image-20221227015936189](/home/alexa/.config/Typora/typora-user-images/image-20221227015936189.png)

    ![image-20221227015959017](/home/alexa/.config/Typora/typora-user-images/image-20221227015959017.png)

    ![image-20221227020019966](/home/alexa/.config/Typora/typora-user-images/image-20221227020019966.png)

    ![image-20221227020036139](/home/alexa/.config/Typora/typora-user-images/image-20221227020036139.png)

  - **DFS - InOrder**

    - **Pseudocódigo (versão recursiva):**

      ```javascript
      /*
      	1 - Crie uma variável para armazenar os valores dos nós visitados;
      	2 - Armazene a raiz do árvore em uma variável chamada current;
      	3 - Escreva um método auxiliar que aceite um nó:
      		3.1 - Se o nó tiver a propriedade left, chame o método auxiliar com a propriedade left no nó; 
      		3.2 - Empurre o valor do nó para a variável que armazena os valores;
      		3.3 - Se o nó tiver a propriedade right, chame o método auxiliar com a propriedade right no nó;
      	4 - Invoque o método auxiliar com a variável current;
      	5 - Retorne o array de valores;
      */
      ```

      ![image-20221227024639025](/home/alexa/.config/Typora/typora-user-images/image-20221227024639025.png)

      ![image-20221227024656430](/home/alexa/.config/Typora/typora-user-images/image-20221227024656430.png)

      ![image-20221227024717750](/home/alexa/.config/Typora/typora-user-images/image-20221227024717750.png)

      ![image-20221227024737890](/home/alexa/.config/Typora/typora-user-images/image-20221227024737890.png)

      ![image-20221227024759452](/home/alexa/.config/Typora/typora-user-images/image-20221227024759452.png)

      ![image-20221227024822632](/home/alexa/.config/Typora/typora-user-images/image-20221227024822632.png)

      ![image-20221227025409607](/home/alexa/.config/Typora/typora-user-images/image-20221227025409607.png)

  - **DFS - PostOrder**

    - **Pseudocódigo (versão recursiva):**

      ```javascript
      /*
      	1 - Crie uma variável para armazenar os valores dos nós visitados;
      	2 - Armazene a raiz do árvore em uma variável chamada current;
      	3 - Escreva um método auxiliar que aceite um nó:
      		3.1 - Se o nó tiver a propriedade left, chame o método auxiliar com a propriedade left no nó;
      		3.2 - Se o nó tiver a propriedade right, chame o método auxiliar com a propriedade right no nó;
      		3.3 - Empurre o valor do nó para a variável que armazena os valores;
      		3.4 - Invoque o método auxiliar com a variável current;
      	4 - Retorne o array de valores;
      */
      ```

    ![image-20221227022357040](/home/alexa/.config/Typora/typora-user-images/image-20221227022357040.png)

    ![image-20221227022410453](/home/alexa/.config/Typora/typora-user-images/image-20221227022410453.png)

    ![image-20221227022425211](/home/alexa/.config/Typora/typora-user-images/image-20221227022425211.png)

    ![image-20221227022440100](/home/alexa/.config/Typora/typora-user-images/image-20221227022440100.png)

    ![image-20221227022454412](/home/alexa/.config/Typora/typora-user-images/image-20221227022454412.png)

    ![image-20221227022508871](/home/alexa/.config/Typora/typora-user-images/image-20221227022508871.png)

    ![image-20221227022526337](/home/alexa/.config/Typora/typora-user-images/image-20221227022526337.png)

    

#### Qual é melhor?

- **Depende da árvore;**

  
