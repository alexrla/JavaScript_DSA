# Estrutura de Dados - JavaScript



### Algoritmos classificação/ordenação

- **A classificação é o processo de reorganização dos itens em uma coleção (por exemplo, um array) para que os itens estejam em algum tipo de ordem;**

- **Exemplos:**

  - **Classificando números do menor para o maior;**
  - **Classificando nomes em ordem alfabética;**
  - **Classificando filmes com base no ano de lançamento;**
  - **Classificando filmes com base na receita;**

- **Por que devemos aprender:**

  - **Classificar é uma tarefa incrivelmente comum, por isso é bom saber como funciona;**
  - **Existem muitas maneiras diferentes de classificar as coisas, e diferentes técnicas têm suas próprias vantagens e desvantagens;**

- **JavaScript possui um método de classificação integrado...**

  - **`sort()`**

  - **Porém, esse método nem sempre funciona da maneira esperada;**

  - **Esse método aceita uma função de comparação opcional;**

  - **Podemos usar esta função de comparação para dizer ao JavaScript como desejamos que ele realize a classificação;**

  - **O comparador 9a função de comparação) examina pares de elementos (`a` e `b`) e determina sua ordem de classificação com base no valor de retorno:**

    - **Se retornar um número negativo, `a` deve vir antes de `b`;**
    - **Se retornar um número positivo, `a` deve vir depois de `b`;**
    - **Se retornar 0, `a` e `b` são iguais no que diz respeito à classificação;**

  - **Exemplo:**

    ```javascript
    // Ordenando ums lista numérica
    function numberCompare(num1, num2) {
      return num1 - num2;
    }
    
    [6, 4, 15, 10].sort(numberCompare); // [4, 6, 10, 15]
    
    // Ordenando uma lista de strings através do tamanho das strings
    function compareByLen(str1, str2) {
      return str1.length - str2.length;
    }
    
    ["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
    // [ "Colt", "Steele", "Algorithms", "Data Structures" ]
    ```

    

#### Bubble Sort

- **Não é tão eficiente;**

- **E não é tão utilizado;**

- **Este algoritmo é conhecido por classificação/ordenação por bolha, devido aos maiores valores borbulharem (subirem) para o topo;**

- **OBS.: Muitos algoritmos de classificação envolvem algum tipo de funcionalidade de troca (por exemplo, troca de números para colocá-los em ordem):**

  ```javascript
  // ES5
  function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  
  // ES2015
  const swap = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
  }
  ```

- **Pseudocódigo:**

  ```javascript
  /*
  	- Inicie o loop com uma variável chamada i, que vá do final do array até o início;
  	
  	- Inicie um loop interno com uma variável chamada j, que vá do início até o índice i - 1;
  	
  	- Se arr[j] for maior que arr[j + 1], troque esses dois valores;
  	
  	- Retorne o array ordenado;
  */
  ```

- **BIG-O - Bubble Sort:**

  - **Melhor caso: `O(n)` (quando o array já está classificado/quase lá);**
  - **Pior caso: `O(n²)` (O Bubble sort emprega dois loops: um loop interno e um loop externo, cada qual podendo passar por todo o array, com isso, temos: `O(nxn) = O(n²)`;**
    - **E o pior caso pode ocorrer se quisermos classificar em ordem crescente e o array estiver em ordem decrescente;**

#### Selection Sort

- **Semelhante ao `bubble sort` só que, ao invés de colocar os valores maiores em suas devidas posições (a ordenação é feita a partir dos maiores valores), aqui os valores menores é que são primeiramente ordenados (colados em sua devidas posições);**

- **Pseudocódigo:**

  ```javascript
  /*
  	- Armazene o primeiro elemento como o menor valor que você viu até agora;
  	
  	- Compare este item com o próximo item do array até encontrar um número menor;
  	
  	- Se um número menor for encontrado, designe esse número menor como o novo "mínimo" e continue até o final do array;
  	
  	- Se o "mínimo" não for o valor(índice) com o qual você começou inicialmente, troque os dois valores (o que salvamos na 	real, não é o número e sim o índice);
  	
  	- Repita isso com o próximo elemento até que o array seja classificada;
  */
  ```

- **BIG-O - Selection Sort:**
  - **Melhor caso: `O(n²)` (quando o array já está classificado/quase lá);**
  - **Pior caso: `O(n²)` (O Selection sort também emprega dois loops: um loop interno e um loop externo, cada qual podendo passar por todo o array, com isso, temos: `O(nxn) = O(n²)`;**
    - **E mais uma vez, o pior caso pode ocorrer se quisermos classificar em ordem crescente e o array estiver em ordem decrescente;**



#### Insertion Sort

- **A ordenação/classificação é feita, criando-se gradualmente, uma metade à esquerda maior, que é sempre ordenada (pega cada elemento e o coloca onde ele deve ficar na metade ordenada - insere de cada vez, os itens, no local correto);**

- **Pseudocódigo:**

  ```javascript
  /*
  	- Comece escolhendo o segundo elemento da matriz (a parte ordenada é considerada o primeiro item do array);
  	
  	- Agora compare esse segundo elemento com o anterior e troque-os de posição caso necessário;
  	
  	- Siga para o próximo elemento e, se ele estiver na ordem incorreta, percorra a parte ordenada (o lado esquerdo) para 		colocar o elemento no local correto;
  	
  	- Repita os passos acima até que a matriz esteja totalmente ordenada;
  */
  ```

- **BIG-O - Insertion Sort:**

  - **Melhor caso: `O(n)`;**
  - **Pior caso: `O(n²)`**



#### BIG-O: Bubble, Selection e Insertion Sort

|   Algoritmo    | Complexidade de Tempo (Melhor caso) | Complexidade de Tempo (Média) | Complexidade de Tempo (pior caso) | Complexidade de espaço |
| :------------: | :---------------------------------: | :---------------------------: | :-------------------------------: | :--------------------: |
|  Bubble Sort   |                O(n)                 |             O(n²)             |               O(n²)               |          O(1)          |
| Selection Sort |                O(n²)                |             O(n²)             |               O(n²)               |          O(1)          |
| Insertion Sort |                O(n)                 |             O(n²)             |               O(n²)               |          O(1)          |

- **Os melhores casos acontecem quando os arrays estão já estão ordenados, ou quando os mesmo estão quase ordenados;**



#### Nota

- **Os algoritmos de ordenação vistos até agora: `Bubble Sort`, `Selection Sort` e `Ìnsertion Sort`, são algoritmos que não funcionam bem quando trabalhamos com um grande número de dados (são muito lentos). Logo, precisaremos de algoritmos de ordenação capazes de ordenar arrays com grandes quantidades de itens, de forma mais rápida;**
- **E existe uma gama de algoritmos de ordenação mais rápidos, que melhoram a complexidade de tempo de  O (n²), para O (n log n);**
- **Porém, há uma troca entre eficência e simplificidade: esses algoritmos são mais eficientes, mas são menos simples e levam mais tempo para se entender;**



#### Merge Sort

- **Combinação de duas coisas: mesclar e ordenar;**
- **OBSs.: **
  - **Explora o fato de que arrays de 0/1 elemento estarem sempre ordenados;**
  - **Funciona decompondo um array em vários arrays menores de 0/1 elementos e, em seguida, contrói um novo array (maior), agora ordenado;**

- **Mesclando arrays**

  - **Para implementar o `Merge Sort` é útil, primeiro, implementar a função responsável por mesclar dois arrays ordenados;**
    - **Dados dois arrays  já ordenados, esta função auxiliar deve criar um novo array que também é ordenada e que contêm todos os itens de ambos os arrays dados na entrada;**
  - **Esta função deve ser executada é um tempo O(n + m) e espaço O(n + m) e não deve modificar os parâmetros passados a ela;**

- **Pseudocódigo - Mesclagem de arrays::**

  ```javascript
  /*
  	- Crie um array vazio (e dê uma olhada nos menores valores de cada array da entrada);
  	
  	- Enquanto existir valores que ainda não olhamos (em pelo menos um dos arrays):
  	
  		- Se o valor do primeiro array for menor que o valor do segundo array, insira o valor do primeiro array no array 			criado inicialmente (o array de retorno) e passe para o próximo item do primeiro array;
  		
  		- Se o valor do primeiro array for maior que o primeiro valor do segundo array, insira o valor do segundo array no 			array de retorno e passe para o próximo item do segundo array;
  		
  		- Depois de esgotar um array, insira todos os valores restantes do outro array, no array de retorno;
  */
  ```

- **Pseudocódigo:**

  ```javascript
  /*
  	- Divida o array em metades até que você tenha arrays vazios ou unitários (de um elemento);
  	
  	- Em seguida, depois de ter os arrays menores ordenados, mescle esses arrays com os demais até que se tenha um array com 	 todos os elementos (com o comprimento total do array) ordenados;
  	
  	- Uma vez que o array foi mesclado totalmente, retorne o array mesclado (e ordenado);
  */
  ```

- **Exemplo:**

  ![image-20221128164205330](/home/alexa/.config/Typora/typora-user-images/image-20221128164205330.png)

- **BIG-O - Merge Sort:**

  | Complexidade de Tempo (Melhor caso) | Complexidade de Tempo (Média) | Complexidade de Tempo (pior caso) | Complexidade de espaço |
  | :---------------------------------: | :---------------------------: | :-------------------------------: | :--------------------: |
  |             O(n log n)              |          O(n log n)           |            O(n log n)             |          O(n)          |



#### Quick Sort

- **Assim como o `Merge Sort`, explora o fato de que os arrays de 0/1 elemento, estão sempre ordenados;**

- **Funciona selecionando um elemento (chamado de "pivô" - "pivot" - um ponto de articulação/de partida) e encontrando o índice onde esse elemento deve terminar após a ordenação do array;**

  - **Depois que esse elemento estiver posicionado corretamente, o `quiksort` pode selecionar qualquer elemento (à direita/ à esquerda do pivô);**

- **Pivot Helper**

  - **Para implementar o `quiksort`, é útil primeiro implementarmos uma função responsável por organizar os elementos em um array, em ambos os lados do "pivô";**

    - **Dado um array, esta função auxiliar deve designar um elemento como o "pivô";**
    - **Em seguida ela deve reorganizar os itens no array, para que todos os valores menores que o "pivô" sejam movidos para à esquerda do "pivô" e todos os valores maiores que o "pivô", sejam movidos para a sua direita;**
    - **A ordem dos elementos de cada lado do "pivô" não importa;**
    - **O helper deve fazer isso, sem precisar criar um novo array;**
    - **Quando concluído o processo, a função auxiliar (helper) deve retornar o índice do pivô;**

  - **Exemplo:**

    ```javascript
    let arr = [ 5, 2, 1, 8, 4, 7, 6, 3 ]
    
    pivot(arr); // 4;
    
    arr;
    // qualquer um destes é uma mutação aceitável:
    // [2, 1, 4, 3, 5, 8, 7, 6]
    // [1, 4, 3, 2, 5, 7, 6, 8]
    // [3, 2, 1, 4, 5, 7, 6, 8]
    // [4, 1, 2, 3, 5, 6, 8, 7]
    // existem outras mutações aceitáveis também!
    
    /*
     - Tudo o que importa é que 5 esteja no índice 4, que os valores menores fiquem à esquerda e os valores maiores fiquem à direita;
    */
    ```

- **Escolhendo um pivô:**

  - **O tempo de execução do `quiksort`, depende em parte, de como o "pivô" é selecionado;**
  - **Idealmente, o "pivô" deve ser escolhido de forma que seja aproximadamente, o valor médio do conjunto de dados que estamos buscando ordenar;**
  - **Porém, para simplificar, optamos por escolher o primeiro elemento;**

- **Pseudocódigo - Pivot (Pivô):**

  ```javascript
  /*
  	- Aceita três argumentos (o array, o índice inicial e o índice final - eles, os índices, podem ser padronizados em 0 e o 	 comprimento do array menos 1, respectivamente);
  	
  	- Pegue o "pivô" desde o início do array;
  	
  	- Armazene o índice do "pivô" atual em uma variável (isso irá acompanhar onde o "pivô" deve terminar);
  	
  	- Percorra o array desde o início até o fim;
  	
  		- Se o "pivô" for maior que o elemento atual, incremente a variável que guarda o índice do "pivô" e então troque o 			elemento atual pelo elemento no índice do pivô; 
  		
  		- Troque o elemento atual (o "pivô"), pelo elemento do índice do "pivô" (aonde o pivô deve ficar);
  		
  	- Retorn o índice do "pivô";
  */
  ```

- **Pseudocódigo:**

  ```javascript
  /*
  	- Chame a função responsável por retornar o "pivô";
  	
  	- Quando essa função auxiliar (helper) retornar o índice do pivô atualizado, realize a chamada recursiva, passando o 		índice do "pivô" que foi retornado, juntamente com os "subarrays" à direita e á esquerda dele;
  	
  	O caso base ocorre quando passamos a considerar um "subarray" com menos de 2 elementos;
  */
  ```

- **BIG-O - Quick Sort:**

  | Complexidade de Tempo (Melhor caso) | Complexidade de Tempo (Média) | Complexidade de Tempo (pior caso) | Complexidade de espaço |
  | :---------------------------------: | :---------------------------: | :-------------------------------: | :--------------------: |
  |             O(n log n)              |          O(n log n)           |               O(n²)               |        O(log n)        |



#### Complexidade de tempo - Casos médio

- **Bubble Sort: `O(n²)`;**

- **Insertion Sort: `O(n²)`;**

- **Selection Sort: `O(n²)`;**

- **Merge Sort: `O(n log n)`;**

- **Quick Sort: `O(n log n)`;**

  **Existe formas melhores de ordenação, mas que são feitas, sem utilizar a comparação dos valores (qual é maior/menor);**



#### Radix Sort

- **Funciona com lista de números;**

- **Explora o fato de que as informações sobre o tamanho de um número, são codificadas no número de dígitos;**

- **Nunca faz comparação entre os elementos do array;**

- **Mais dígitos significa um número maior;**

- **Helpers:**

  - **Para implementar o `radix sort`, precisaremos criar algumas funções auxiliares;**

    - **A primeira função retorna o dígito de um número, através de um valor fornecido (um índice, que faz referência a posição do dígito);**

    - **A segunda função auxiliar retorna o número de dígitos que o número possui (utilizada para sabermos o maior número e a quantidade de vezes que iremos realizar o processo);**
    - **A terceira e última função auxiliar, é utilizada para retornar o número de dígitos do maior número (utilizada em conjunto com a segunda função auxiliar);**

- **Pseudocódigo:**

  ```javascript
  /*
  	- Definir uma função que aceita uma lista de números;
  	
  	- Descubra quantos algarismos tem o maior número;
  	
  	- Loop de k = 0, até o maior número de dígitos;
  	
  	- Para cada iteração do loop:
  		
  		- Crie "baldes" para cada dígito (0... 9);
  		
  		- Coloque cada número no balde correspondente, com base no seu késimo dígito;
  		
  	- Substitua o array existente por valores em nossos "baldes", começando com 0 e indo até o 9;
  		
  	- Retorne o "array final";
  */
  ```

- **BIG-O - Radix Sort:**

  | Complexidade de Tempo (Melhor caso) | Complexidade de Tempo (Média) | Complexidade de Tempo (pior caso) | Complexidade de espaço |
  | :---------------------------------: | :---------------------------: | :-------------------------------: | :--------------------: |
  |                O(nk)                |             O(nk)             |               O(nk)               |        O(n + k)        |

  **- _n_: tamanho do array;**

  **- _k_: número de dígitos;**



#### Observações

- **`Merge Sort` e `Quick Sort` são algoritmos de ordenação, eficientes e padrões;**
- **`Quick Sort` pode ser lento no piro dos casos, mas é comparável ao `Merge Sort` em média;**
- **`Merge Sort` ocupa mais memória porque cria um novo array;**
- **`Radix Sort` é um algoritmo de ordenação rápido para números (ele explora o valor posicional para ordenar os números em tempo linear, para um número fixo de dígitos);**

