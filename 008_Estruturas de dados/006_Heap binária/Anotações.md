# Estrutura de Dados - JavaScript



### Heap binária (Bynary Heap)

- **Semelhante a árvores de busca binária (cada nó pode ter no máximo dois filhos);**

- **É uma estrutura de dados Heap que assume a forma de uma árvore binária;**

- **E por ser uma estrutura de dados Heap, deve atender a uma das propriedades heaps:**
  - **Propriedade de pilha máxima (max heap property - onde temos MaxBinaryHeap): os nós pais são sempre maiores que os nós filhos;**

  - **Propriedade de pilha mínima (min heap property - onde temos MinBinaryHeap): os nós pais são sempre menores que os nós filhos;**

- **E ainda, os elementos podem/não estarem postos em ordem;**




#### MaxBinaryHeap

- **Cada pai tem no máximo dois nós filhos;**
- **O valor de cada nó pai é sempre maior que seus nós filhos;**
- **Em um heap binário máximo, o pai é maior que os filhos, mas não há garantias entre os nós irmãos;**
- **Um heap binário é o mais compacto possível;**
  - **Todos os filhos de cada nó estão tão cheios quanto possível e os filhos esquerdos são preenchidos primeiro;**

![image-20221227135219942](/home/alexa/.config/Typora/typora-user-images/image-20221227135219942.png)

- **Operações**

  - **Inserção - pseudocódigo:**

    ```javascript
    /*
    	1 - Empurre o valor para a propriedade values no heap;
    	2 - Ordene:
    	  2.1 - Crie uma variável chamada index que é o comprimento da propriedade values - 1;
    	  2.2 - Crie uma variável chamada parentIndex que é valor de (index-1)/2, arredondado para baixo;
    	  2.3 - Continue iterando enquanto o elemento values no parentIndex for menor que o elemento values no índice filho;
    	    2.3.1 - Troque o valor do elemento values no parentIndex pelo valor da propriedade do elemento no índice filho;
    		2.3.2 - Defina o índice como parentIndex e comece de novo;
    */
    ```

    ![image-20221227184546255](/home/alexa/.config/Typora/typora-user-images/image-20221227184546255.png)

    ![image-20221227184600754](/home/alexa/.config/Typora/typora-user-images/image-20221227184600754.png)

    ![image-20221227184615865](/home/alexa/.config/Typora/typora-user-images/image-20221227184615865.png)

    ![image-20221227184634684](/home/alexa/.config/Typora/typora-user-images/image-20221227184634684.png)

  - **Extract-Max**

    - **Extrair o nó de maior valor (o nó raiz) e retorná-lo;**

    - **O procedimento para extrair a raiz do heap (extrair efetivamente o elemento máximo em um heap máximo ou o elemento mínimo em um heap mínimo) e restaurar as propriedades é chamado de down-heap (também conhecido como bubble-down, percolate-down , sift-down, trickle down, heapify-down, cascade-down e extract-min/max);**

    - **Pseudocódigo:**

      ```javascript
      /*
      	1 - Troque o primeiro valor na propriedade values pelo último;
      	2 - Pop na propriedade values, para que você possa retornar o valor no final;
      	3 - Faça com que o nó raiz atual, "afunde"/"desça" para a sua posição correta;
      	  3.1 - O índice pai começa em 0 (a raiz);
      	  3.2 - Encontre o índice do filho à esquerda: 2 * índice + 1 (certifique-se de que não está fora dos limites);
      	  3.3 - Encontre o índice do filho à direita: 2 * índice + 2 (certifique-se de que não está fora dos limites);
      	  3.4 - Se o filho à esquerda ou à direita for maior que o elemento... troque;
      	    3.4.1 - Se os filhos à esquerdo e à direita forem maiores, troque com o filho maior;
      	  3.5 - O índice do filho para o qual você trocou agora se torna o novo índice do pai;
      	  3.6 - Continue repetindo e trocando até que nenhum filho seja maior que o elemento;
      	  3.7 - Devolva a raiz removida;
      */
      ```

      ![image-20221227215132099](/home/alexa/.config/Typora/typora-user-images/image-20221227215132099.png)

      ![image-20221227215149044](/home/alexa/.config/Typora/typora-user-images/image-20221227215149044.png)

      ![image-20221227215201995](/home/alexa/.config/Typora/typora-user-images/image-20221227215201995.png)

      ![image-20221227215213920](/home/alexa/.config/Typora/typora-user-images/image-20221227215213920.png)

      ![image-20221227215236883](/home/alexa/.config/Typora/typora-user-images/image-20221227215236883.png)

      ![image-20221227215251124](/home/alexa/.config/Typora/typora-user-images/image-20221227215251124.png)



#### MinBinaryHeap

![image-20221227135331198](/home/alexa/.config/Typora/typora-user-images/image-20221227135331198.png)



#### Porque é importante aprendermos Heaps binários?

- **São utilizados para implementar filas de prioridade (priority queues), que são estruturas de dados muito utilizadas;**
- **E também são bastante utilizadaos em algoritmos de travessia de grafos;**



#### Representação de um Heap

- **Para qualquer índice de um array de tamanho n, temos:**
  - **O filho à esquerda é armazenado no índice `2n + 1`;**
  - **O filho a direita é armazenado no índice `2n + 2`;**

![image-20221227142736717](/home/alexa/.config/Typora/typora-user-images/image-20221227142736717.png)

![image-20221227143813474](/home/alexa/.config/Typora/typora-user-images/image-20221227143813474.png)

![image-20221227143830472](/home/alexa/.config/Typora/typora-user-images/image-20221227143830472.png)

![image-20221227143855096](/home/alexa/.config/Typora/typora-user-images/image-20221227143855096.png)

![image-20221227143913484](/home/alexa/.config/Typora/typora-user-images/image-20221227143913484.png)

![image-20221227143929644](/home/alexa/.config/Typora/typora-user-images/image-20221227143929644.png)

- **E dado um filho, para encontrarmos o seu pai, temos que:**
  - **Para qualquer nó filho de índice n:**
    - **Seu pai está no índice `(n-1)/2` (arredondando essa divisão para baixo);**

![image-20221227144206897](/home/alexa/.config/Typora/typora-user-images/image-20221227144206897.png)

![image-20221227144227565](/home/alexa/.config/Typora/typora-user-images/image-20221227144227565.png)



#### Big-O

- **Inserção/Remoção: `O(log N)`;**
- **Busca/Pesquisa: `O(N)`;**
