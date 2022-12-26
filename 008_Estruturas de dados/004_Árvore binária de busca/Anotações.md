# Estrutura de Dados - JavaScript



### Árvore binária de busca

- **O que é uma árvore:**

  - **Estrutura de dados que consiste em nós, onde temos relacionamentos pai e filhos;**

  - **Exemplos:**

    - **1**

      ![image-20221225210044917](/home/alexa/.config/Typora/typora-user-images/image-20221225210044917.png)

    - **2**

      ![image-20221225210229478](/home/alexa/.config/Typora/typora-user-images/image-20221225210229478.png)

    - **3**

      ![image-20221225210252040](/home/alexa/.config/Typora/typora-user-images/image-20221225210252040.png)

- **Listas são estruturas lineares (temos um elementos e em seguida o próximo e em seguida o próximo e assim sucessivamente);**

- **Já as árvores são estruturas não lineares (elas se ramificam);**

- **Em uma árvore, os "nós filhos" não podem apontar para os seus "pais", nem para os seus "irmãos":**

  ![image-20221225210938497](/home/alexa/.config/Typora/typora-user-images/image-20221225210938497.png)

-  **Toda árvore precisa de uma raiz:**

  ![image-20221225211053381](/home/alexa/.config/Typora/typora-user-images/image-20221225211053381.png)

- **Terminologia:**

  - **Root (raiz): o nó superior de uma árvore (o nó do topo da árvore);**
  - **Child (filho): um nó diretamente conectado a outro nó, aos se afastar da raiz;**
  - **Parent (pai): o inverso de um filho (o nó que se conecta ao outro);**
  - **Siblings (irmãos): um grupo de nós que possuem o mesmo pai;**
  - **Leaf (folha): um nó sem filhos;**
  - **Edge (aresta): a conexão entre um nó e outro;** 

- **Diferentes aplicações:**

  - **HTML;**

  - **DOM;**

  - **Roteamento de rede;**

  - **Inteligência Artificial;**

  - **Pastas em sistemas operacionais;**

  - **Sistema de arquivos do computador;**

    ![image-20221225223128440](/home/alexa/.config/Typora/typora-user-images/image-20221225223128440.png)

    ![image-20221225223157925](/home/alexa/.config/Typora/typora-user-images/image-20221225223157925.png)

    ![image-20221225223236665](/home/alexa/.config/Typora/typora-user-images/image-20221225223236665.png)

    ![image-20221225223302018](/home/alexa/.config/Typora/typora-user-images/image-20221225223302018.png)

- **Tipos de árvores**

  - **Árvore genérica (Tree): cada nó pode ter qualquer número de nós filhos:**

    ![image-20221225224418164](/home/alexa/.config/Typora/typora-user-images/image-20221225224418164.png)
  - **Árvore binária (Binary Tree): cada nó pode ter no máximo dois filhos:**

    ![image-20221225224513016](/home/alexa/.config/Typora/typora-user-images/image-20221225224513016.png)
  - **Árvore binária de busca (Binary Search Tree);**

- **Árvore binária**

  - **O que não é uma árvore binária:**

    ![image-20221225224717528](/home/alexa/.config/Typora/typora-user-images/image-20221225224717528.png)
  - **Aplicações:**

    - **Árvore de decisão (`true`/`false`);**
    - **Índices de banco de dados;**
    - **Algoritmos de ordenação;**

- **Árvore binária de busca**

  - **Cada nó pai tem no máximo dois filhos;**
  - **Cada nó à esquerda de um nó pai, é sempre menor que o nó pai;**
  - **Cada nó à direita de um nó pai, é sempre maior que o nó pai;**



- **Operações:**
  
  - **Inserção - pseudocódigo:**
    
    ```javascript
    /*
    - Interativamente ou recursivamente
    
     1 - Crie um novo nó;
     2 - A partir da raiz:
     	2.1 - Verifique se há uma raiz, se não, o novo nó criado será a raiz;
     	2.2 - Se houver raiz, verifique se o valor do nó é maior ou menor que o valor da raiz;
     	2.3 - Se for maior:
     		2.3.1 - Verifique se há um nó à direita:
     			2.3.1.1 - Se houver, vá para esse nó e repita essas etapas;
     			2.3.1.2 - se não houver, adicione esse nó como a propriedade right;
     	2.4 - Se for menor:
     		2.4.1 - Verifique se há um nó à esquerda:
     			2.4.1.1 - Se houver, vá para esse nó e repita essas etapas;
     			2.4.1.2 - Se não houver, adicione esse nó como a propriedade left;
    */
    ```
    
    ![image-20221226012645412](/home/alexa/.config/Typora/typora-user-images/image-20221226012645412.png)
    
    ![image-20221226012723667](/home/alexa/.config/Typora/typora-user-images/image-20221226012723667.png)
    
    ![image-20221226012740172](/home/alexa/.config/Typora/typora-user-images/image-20221226012740172.png)
    
    ![image-20221226012805118](/home/alexa/.config/Typora/typora-user-images/image-20221226012805118.png)
    
    ![image-20221226012823431](/home/alexa/.config/Typora/typora-user-images/image-20221226012823431.png)
    
  - **Busca - pseudocódigo:**
    
    ```javascript
    /*
    - Interativamente ou recursivamente
    
     1 - Começando pela raiz;
     	1.2 - Verifique se há uma raiz, se não - terminamos a busca;
     	1.3 - Se houver raiz, verifique se o valor da raiz é o valor que procuramos;
     	1.4 - Caso contrário, verifique se o valor é maior ou menor que o valor da raiz;
     	1.5 - Se for maior:
        	1.5.1 - Verifique se há um nó à direita:
        		1.5.1.1 - Se houver, vá para esse nó e repita essas etapas;
        		1.5.1.2 - Se não houver, terminamos a busca;
     	1.6 - Se for menor:
     		1.6.1 - Verifique se há um nó à esquerda:
     			1.6.1.1 - Se houver, vá para esse nó e repita essas etapas;
     			1.6.1.2 - Se não houver, terminamos a busca;
    */
    ```
  
- **BIG-O:**
  - **Inserção/Busca: `O(log n)`;**
  
    - **O que não é 100% garantido;**
  
  - **OBS.:**
  
    - **Dobre o número de nós:**
  
      ![image-20221226032112982](/home/alexa/.config/Typora/typora-user-images/image-20221226032112982.png)
  
    - **E você só aumenta o número de etapas para inserir/buscarr em 1:**
  
      ![image-20221226032155386](/home/alexa/.config/Typora/typora-user-images/image-20221226032155386.png)
  
    - **2x número de nós: 1 etapa extra;**
    - **4x número de nós: 2 etapas extras;**
    - **8x número de nós: 3 etapas extras;**
