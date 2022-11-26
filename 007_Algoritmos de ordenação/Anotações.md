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



