# Estrutura de Dados - JavaScript



### Algoritmo de Dijkstra

- **Sobre o algoritmo:**
  - **Um dos mais famosos e amplamente utilizado;**
  - **Tem como objetivo: encontrar o caminho mais curto entre dois vértices em um grafo;**
    - **"Qual é a maneira mais rápida de ir do ponto A ao ponto B?";**
- **Sobre Dijkstra:**
  - **Edsger Dijkstra era um programador e físico holandês;**
  - **Ajudou no avanaço da área de ciência da computação;**
  - **Muitas de suas descobertas e algoritmos ainda são comumente utilizados até hoje;**
- **Casos de uso:**
  - **GPS - encontrando a rota mais rápida;**
  - **Roteamento de rede - encontra o caminho mais curto, aberto para os dados;**
  - **Biologia - usado para modelar a propagação de vírus entre humanos;**
  - **Bilhetes de avião - encontrar a rota mais barata para o seu destino;**
  - **etc.;**
- **Abordagem:**
  - **Sempre que procuramos visitar um novo nó, escolhemos o nó com a menor distância conhecida, para visitar primeiro;**
  - **Uma vez que nos movemos para o nó que vamos visitar, olhamos para cada um de seus vizinhos;**
  - **Para cada nó vizinho, calculamos a distância somando o total de arestas que levam ao nó que estamos verificando, a partir do nó inicial;**
  - **Se a nova distância total até um nó, for menor que o total anterior, armazenamos a nova distância mais curta para esse nó;**

- **Pseudocódigo:**

  ```javascript
  /*
  	1 - O método deve aceitar um vértice inicial e final;
  	2 - Crie um objeto (vamos chamá-lo de distânces) e defina cada chave para ser cada vértice na lista de adjacências com um 	  valor de infinity, exceto para o vértice inicial que deve ter um valor de 0;
  	3 - Depois de definir um valor no objeto distances, adicione cada vértice com prioridade infinity à fila de prioridade, 	exceto o vértice inicial, que deve ter prioridade 0 porque é por aí que começamos;
  	4 - Crie outro objeto chamado previous e defina cada chave para ser cada vértice na lista de adjacência com um valor 		null;
  	5 - Inicie o loop contanto que haja algo na fila de prioridade;
  		5.1 - Retire um vértice da fila de prioridade;
  		5.2 - Se esse vértice for o mesmo que o vértice final - terminamos;
  		5.3 - Caso contrário, percorra cada valor na lista de adjacência naquele vértice;
  			5.3.1 - Calcule a distância desse vértice a partir do vértice inicial;
  			5.3.2 - Se a distância for menor do que o que está atualmente armazenado em nosso objeto de distâncias;
  				5.3.2.1 - Atualize o objeto de distâncias com a nova distância inferior (a menor);
  				5.3.2.2 - atualize o objeto previous para conter esse vértice;
  				5.3.2.3 - Adicione o vértice com a distância total do nó inicial;
  */
  ```

  
