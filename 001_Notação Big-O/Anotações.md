# Estrutura de Dados - JavaScript



### Notação Big-O

- **Forma de generalizar o código;**
- **Aborda o código e realiza comparações em relação ao desempenho desse código;**
- **Ela nos dá uma representação numérica do desempenho do código;**



#### Exemplo

##### 1 - Função que calcula a soma de todos os números de um, até n:

```javascript
// Solução 1
function soma(n) {
    let total = 0;
    
    for(let i = 1; i < n; i++)	{
        total += i;
    }
    
    return total;
}

// Solução 2
function soma2(n) {
    return n * (n + 1) / 2;
}
```

- **Agora, qual seria a melhor solução?**
- **Primeiro, o que significa melhor, nesse caso:**
  - **Melhor pode significar uma solução mais rápido em segundo/milissegundos;**
    - **O código que é mais rápido quando adicionamos um número, seja ele pequeno ou grande;**
  - **Uma solução que consome menos recursos de hardware;**
  - **Uma solução mais legível;**



- **Para avaliar a velocidade, poderíamos utilizar funções de temporização embutidas:**

  ```javascript
  function soma(n) {
      let total = 0;
      
      for(let i = 1; i < n; i++)	{
          total += i;
      }
      
      return total;
  }
  
  let t1 = performance.now();
  soma(1000000000);
  let t2 = performance.now();
  console.log(`Tempo decorrido: ${(t2 - t1)} / 1000} segundos.`)
  ```

  - **Esse processo não é o mais confiável para cronometrar manualmente e realizarmos comparações;**
    - **Ele pode nos levar a problemas de tempo, já que máquinas registram o tempo de forma diferente;**
    - **E uma mesma máquina, registra tempos diferentes;**

- **Com isso, ao invés de contar os segundos, que podem ser variáveis, contamos o número de operações simples, que o computador tem de realizar;**

  - **Esse número (de operações) permanece constante;**

  - **Com isso, não importa a máquina em que estamos, se um código apresenta 'x' operações a serem realizadas e um outro código, apresenta 'x + n', fica evidente a solução mais eficiente para determinado problema;**

  - **Voltando para as soluções vistas anteriomente, temos:**

    ```javascript
    // Solução 1
    function soma(n) {
        let total = 0;
        
        for(let i = 1; i < n; i++)	{
            total += i;
        }
        
        return total;
    }
    
    /*
    	5n + 2 operações:
    		- Temos n adições e n atribuições (relacionadas a operação 'total += i');
    		- Novamente, temos n adições e n atribuições (relacionadas agora ao 'i++'');
    		- Temos uma atribuição (relacionada ao 'let total = 0');
    		- Temos mais uma atribuição (relacionada ao 'let i = 1');
    		- E por fim, temos n comparações (relacionadas ao 'i <= n');
    */
    
    // Solução 2
    function soma2(n) {
        return n * (n + 1) / 2;
    }
    
    /*
    	3 operações (independente do valor de n):
    		- Uma multiplicação;
    		- Uma soma;
    		- E uma divisão;
    */
    ```

    

#### Introdução a notação Big-O

- **Nos permite falar formalmente sobre como o tempo de execução de um algoritmo cresce à medida que as entradas crescem;**

  - **Não nos importaremos com os detalhes, apenas com as tendências;**

- **Definição**

  - **Dizemos que um algoritmo é `O(f(n))` se o número de operações simples que o computador precisa fazer, é menor que uma constante vezes `f(n)`, à medida que n aumenta;**
  - **Exemplos:**
    - **`f(n)` pode ser linear `(f(n) = n)`;**
    - **`f(n)` pode ser quadrático `(f(n) = n²)`;**
    - **`f(n)` pode ser constante `(f(n) = 1)`**;
    - **`f(n)` poderia ser algo completamente diferente;**

- **Voltando para as soluções mostradas anteriormente, temos:**

  ```javascript
  // Solução 1
  function soma(n) {
      let total = 0;
      
      for(let i = 1; i < n; i++)	{
          total += i;
      }
      
      return total;
  }
  /*
  	O número de operações é (eventualmente), limitado por n: O(n)
  	
  	- O tempo de execução da função deve ser aproximadamente proporcional ao 
  	tamanho de n (o tempo de execução é dimensionado em proporção ao tamanho 
  	da entrada);
  */
  
  // Solução 2
  function soma2(n) {
      return n * (n + 1) / 2;
  }
  
  /*
  	Apenas 3 operações: O(1)
  	
  	- Independentemente do tamanho da entrada, o tempo de execução do algoritmo 
  	não crescerá além de um tamanho constante. Será aproximadamente o mesmo, 
  	independentemente da entrada (o tempo de execução não depende do tamanho da 
  	entrada);
  */
  ```

  

#### Simplificando expresões Big-O

- **Existem regras que são úteis para simplificar expressões grandes:**

  - **Constantes não importam:**
    - **`O(2n)` ==> `O(n)`;**
    - **`O(500)` ==> `O(1)`;**
    - **`O(13n²)` ==> `O(n²)`;**
  - **Temos menores não importam:**
    - **`O(n + 10)` ==> `O(n)`;**
    - **`O(1000n + 50)` ==> `O(n)`;**
    - **`O(n² + 5n + 8)` ==> `O(n²)`;**

- **Exemplos:**

  - **Simplifique as expressão Big-O o máximo possível: **

    **1 - `O(n + 10)`**

    ​	**Resposta: `O(n)`**

    **2 - `O(1000 * n)`**

    ​	**Resposta: `O(n)`**

    **3 - `O(25)`**

    ​	**Resposta: `O(1)`**

    **4 - `O(n² + n³)`**

    ​	**Resposta:  `O(n³)`**

    **5 - `O(n + n + n + n)`**

    ​	**Resposta: `O(n)`**

  - **Determine a complexidade de tempo, para as seguintes funções:**

    ```javascript
    // 1
    function logUpTo(n) {
        for (let i = 1; i <= n; i++) {
            console.log(i);
        }
    }
    
    // Resposta: O(n)
    
    // 2
    function logAtMost10(n) {
        for (let i = 1; i <= Math.min(n, 10); i++) {
            console.log(i);
        }
    }
    
    // Resposta: O(1)
    
    // 3
    function logAtLeast10(n) {
        for (let i = 1; i <= Math.max(n, 10); i++) {
            console.log(i);
        }
    }
    
    // Resposta: O(n)
    
    // 4
    function onlyElementsAtEvenIndex(array) {
        let newArray = Array(Math.ceil(array.length / 2));
        for (let i = 0; i < array.length; i++) {
            if (i % 2 === 0) {
                newArray[i / 2] = array[i];
            }
        }
        return newArray;
    }
    
    // Resposta: O(n)
    
    // 5
    function subtotals(array) {
        let subtotalArray = Array(array.length);
        for (let i = 0; i < array.length; i++) {
            let subtotal = 0
            
            for (let j = 0; j <= i; j++) {
                subtotal += array[j];
            }
            
            subtotalArray[i] = subtotal;
        }
        return subtotalArray;
    }
    
    // Resposta: O(n²)
    ```

    

#### Complexidade de espaço

- **A preocupação com o tempo, a rapidez com que os algoritmos são executados, o tempo de execução, é chamado de complexidade de tempo;**

  - **Analisamos o tempo de execução de um algoritmo, conforme o tamanho da entrada aumenta;**

- **Agora temos a complexidade de espaço: o que acontece com o espaço que o algorimo ocupa, à medida que o tamanho da entrada aumenta;**

  - **O que teremos aqui de fato, é a complexidade de espaço auxiliar, que se refere ao espaço requerido pelo algoritmo, sem incluir o espaço ocupado pelas entradas;**
  - **Também podemos utilizar a notação Big-O, para analisar a complexidade de espaço;**

- **Complexidade de espaço em JavaScript:**

  - **Tipos primitivos (booleanos, números, null, undefined), são espaços constantes;**
    - **Não importa o tamanho da entrada. Por exemplo: um booleano (`true`/`false`), ocupa a mesma quantidade de espaço;**
  - **Strings exigem `O(n)` de espaço (`n` corresponde ao comprimento da string);**
  - **Também temos uma exigência de `O(n)` para arrays (`n` em arrays, corresponde ao seu comprimento, quantidade de itens) e objetos (`n` em objetos corresponde ao seu número de chaves);**

- **Exemplos:**

  - **Determine a complexidade do espaço para as seguintes funções:**

    ```javascript
    // 1
    function logUpTo(n) {
        for (let i = 1; i <= n; i++) {
            console.log(i);
        }
    }
    
    // Resposta: O(1)
    
    // 2
    function logAtMost10(n) {
        for (let i = 1; i <= Math.min(n, 10); i++) {
            console.log(i);
        }
    }
    
    // Resposta: O(1)
    
    // 3
    function logAtMost10(n) {
        for (let i = 1; i <= Math.min(n, 10); i++) {
            console.log(i);
        }
    }
    
    // Resposta: O(1)
    
    // 4
    function onlyElementsAtEvenIndex(array) {
        var newArray = Array(Math.ceil(array.length / 2));
        for (var i = 0; i < array.length; i++) {
            if (i % 2 === 0) {
                newArray[i / 2] = array[i];
            }
        }
        return newArray;
    }
    
    // Resposta: O(n)
    
    // 5
    function subtotals(array) {
        var subtotalArray = Array(array.length);
        for (var i = 0; i < array.length; i++) {
            var subtotal = 0;
            for (var j = 0; j <= i; j++) {
                subtotal += array[j];
            }
            subtotalArray[i] = subtotal;
        }
        return subtotalArray;
    }
    
    // Resposta: O(n)
    ```

    

#### Logaritmos

- **Além das complexidades mais comuns e fáceis de entender (`O(1)`, `O(n)` e `O(n²)`), existem algumas complexidades que envolvem expressões matemáticas mais complexas: `O(log n)`  e `O(n log n)`;**

- **Primeiramente, a operação de logaritmo é o inverso da operação de exponenciação;**

- **Exemplo:**

  **log<sub>2</sub>(valor) = expoente  ===>  2<sup>expoente</sup> = valor **

- **OBS.: log === log<sub>2</sub>**
- **É comum vermos essas complexidades que envolvem logaritmos, em determinados algoritmos de busca e classificação, e em casos que envolvem recursão (aqui nos referimos a complexidade de espaço);**