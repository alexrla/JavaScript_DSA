# Estrutura de Dados - JavaScript



### Travessia de grafos

- **Visitar, atualizar, verificar: cada vértice de um grafo;**
- **Casos de uso:**
  - **Redes: peer-to-peer;**

  - **Rastreadores da web;**

  - **Encontrar correspondências/recomendações "mais próximas";**

  - **Problemas de caminho mais curto:**
    - **Navegação - GPS;**

    - **Problemas de labirinto;**

    - **IA (caminho mais curto para ganhar um jogo);**




#### Busca em profundida (DFS)

- **"Um galho" é explorado o máximo possível, antes de retrocedermos;**

- **Por exemplo, comçando do vértice A (tentando seguir em ordem alfabética), atravessamo o grafo abaixo, da seguinte forma:**

  ![image-20221229121503006](/home/alexa/.config/Typora/typora-user-images/image-20221229121503006.png)

  ![image-20221229121520047](/home/alexa/.config/Typora/typora-user-images/image-20221229121520047.png)

  ![image-20221229121549200](/home/alexa/.config/Typora/typora-user-images/image-20221229121549200.png)

  ![image-20221229121602605](/home/alexa/.config/Typora/typora-user-images/image-20221229121602605.png)

  ![image-20221229121618358](/home/alexa/.config/Typora/typora-user-images/image-20221229121618358.png)

![image-20221229121641634](/home/alexa/.config/Typora/typora-user-images/image-20221229121641634.png)

![image-20221229121656678](/home/alexa/.config/Typora/typora-user-images/image-20221229121656678.png)

- **Pseudocódigo - versão recursiva:**

  ```javascript
  DFS(vertex):
      if vertex estiver vazio
          return (caso base)
      adicionar vertex à lista de resultados
      marcar vertex como visitado
      for cada_vizinho in vizinho_do_vertex:
         if vizinho não foi visitado:
            DFS(vizinho)
  
  /*
  	- Mais detalhado
  	
  	1 - O método deve aceitar um vértice inicial;
  	2 - Crie uma lista para armazenar o resultado final, o que será retornado no final;
  	3 - Crie um objeto para armazenar vértices visitados;
  	4 - Crie um método auxiliar que aceite um vértice;
  		4.1 - O método auxiliar deve retornar antes se o vértice estiver vazio;
  		4.2 - O método auxiliar deve colocar o vértice no objeto visitado e inserir esse vértice na lista de resultados;
  		4.3 - Percorrer todos os valores na adjacencyList para esse vértice;
  		4.4 - Se algum desses valores não tiver sido visitado, invoque recursivamente o método auxiliar com esse vértice;
  	5 - Invoque o método auxiliar com o vértice inicial;
  	6 - Retorne a lista de resultados;
  */
  ```

  ![image-20221229122147307](/home/alexa/.config/Typora/typora-user-images/image-20221229122147307.png)

  ![image-20221229122202943](/home/alexa/.config/Typora/typora-user-images/image-20221229122202943.png)

  ![image-20221229122227785](/home/alexa/.config/Typora/typora-user-images/image-20221229122227785.png)

  ![image-20221229122239453](/home/alexa/.config/Typora/typora-user-images/image-20221229122239453.png)

  

  ![image-20221229122257374](/home/alexa/.config/Typora/typora-user-images/image-20221229122257374.png)

  ![image-20221229122316930](/home/alexa/.config/Typora/typora-user-images/image-20221229122316930.png)

  - **Pseudocódigo - versão recursiva:**

    ```javascript
    DFS(initialVertex):
    	Defina S como uma lista vazia
        S.push(initialVertex)
        while S não estiver vazio
            vertex = S.pop()
    		if vertex ainda não foi visitado:
    			Adicione-o a lista de visitados
                Rotule-o como visitado
                for cada_vizinho in vizinho_do_vertex:
                	S.push(vizinho)
    
    /*
    	- Mais detalhado
    	
    	1 - O método deve aceitar um vértice inicial;
    	2 - Crie uma pilha (array) para ajudar a acompanhar os vértices;
    	3 - Crie uma lista para armazenar o resultado final, que será retornado no final;
    	4 - Crie um objeto para armazenar vértices visitados;
    	5 - Adicione o vértice inicial à pilha e marque-o como visitado;
    	6 - Enquanto a pilha tem algo nela:;
    		6.1 - Retire o próximo vértice da pilha;
    		6.2 - Se esse vértice ainda não foi visitado:;
    			6.2.1 - Marque-o como visitado;
    			6.2.2 - Adicione-o à lista de resultados;
    			6.2.3 - Empurre todos os seus vizinhos para a pilha;
    	7 - Retorne a lista de resultados;
    */
    ```

  

  #### Busca em largura (BFS)

  - **Visite os vizinhos da faixa horizontal atual, primeiro, antes de descer pelo grafo (visitar todos os vizinhos, antes de partir para os vizinhos dos vizinhos);**

  - **Exemplo (começando a partir do vértice A):**

    ![image-20221229141603808](/home/alexa/.config/Typora/typora-user-images/image-20221229141603808.png)

    ![image-20221229141620860](/home/alexa/.config/Typora/typora-user-images/image-20221229141620860.png)

    ![image-20221229141633832](/home/alexa/.config/Typora/typora-user-images/image-20221229141633832.png)

    ![image-20221229141650062](/home/alexa/.config/Typora/typora-user-images/image-20221229141650062.png)

    ![image-20221229141708894](/home/alexa/.config/Typora/typora-user-images/image-20221229141708894.png)

    ![image-20221229141724740](/home/alexa/.config/Typora/typora-user-images/image-20221229141724740.png)

    ![image-20221229141739358](/home/alexa/.config/Typora/typora-user-images/image-20221229141739358.png)

  - **Pseudocódigo:**

    ```javascript
    /*
    	1 - O método deve aceitar um vértice inicial;
    	2 - Crie uma fila (array) e coloque o vértice inicial nela;
    	3 - Crie uma lista para armazenar o resultado final, que será retornado no final;
    	4 - Crie um objeto para armazenar vértices visitados;
    	5 - Marque o vértice inicial como visitado;
    	6 - Realize um loop, enquanto houver algo na fila;
    	7 - Remova o primeiro vértice da fila e coloque-o no array que armazena os nós visitados;
    	8 -Faça um loop em cada vértice na lista de adjacências para o vértice que você está visitando;
    	9 - Se não estiver no objeto onde estão os nós visitados, marque-o como visitado e coloque esse vértice na fila;
    	10 - Depois de terminar o loop, retorne a matriz de nós visitados;
    */
    ```

  

  

  

