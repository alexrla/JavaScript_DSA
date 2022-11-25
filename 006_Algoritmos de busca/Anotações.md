# Estrutura de Dados - JavaScript



### Algoritmos de busca



#### Pesquisa/Busca linear

- **Dado um array, a maneira mais simples de procurar um valor é olhar para cada elemento do array e verificar se é o valor que queremos;**

- **Existem muitos métodos que fazem buscas em arrays no JavaScript:**

  - **`indexOf`**
  - **`includes`**
  - **`find`**
  - **`findIndex`**
  - **`etc.`**

- **Na busca linear, visitamos um item de cada vez do array, não importando a ordem (podemos começar pelo início ou pelo final);**

- **Pseudocódigo:**

  ```javascript
  /*
  	- Esta função aceita um array e um valor;
  	
  	- Percorra o array e verifica se o elemento atual do array é igual ao valor;
  	
  	- Se for, retorne o índice no qual o elemento foi encontrado;
  	
  	- Se o valor nunca for encontrado, retorne -1;
  */
  ```

- **BIG-O - Busca linear:**

  - **Melhor caso: `O(1)` (quando o primeiro elemento do array é o elemento que estamos procurando);**
  - **Na média: `O(n)`;**
  - **Pior caso: `O(n)` (quando o elemento buscado é o último do array, ou quando procuramos por um elemento que não existe no array);**



#### Pesquisa/Busca binária

- **Algoritmo de pesquisa mais rápido;**

- **Funciona apenas em arrays classificados;**

- **Na busca binária, vamos eliminando subonjuntos do array;**

- **Pseudocódigo:**

  ```javascript
  /*
  	- Esta função aceita um array e um valor;
  	
  	- Crie um ponteiro esquerdo no início do array e um ponteiro direito no final do array;
  	
  	- Enquanto o ponteiro esquerdo vem antes do ponteiro direito;
  		- Crie um ponteiro no meio;
  		- Se você encontrar o valor que deseja, retorne o índice;
  		- Se o valor for muito pequeno, mova o ponteiro esquerdo para cima;
  		- Se o valor for muito grande, mova o ponteiro direito para baixo;
  	
  	- Se o valor nunca for encontrado, retorne -1;
  */
  ```

- **BIG-O - Busca Binária:**

  - **Melhor caso: `O(1)`;**
  - **Pior caso (e na média): `O(log n)` (toda vez que dobramos a quantidade de item do array, o número de etapas, para se encontrar o elemento que queremos/ou para validar a não existência do elemento no array, é aumentado em uma);**



#### Pesquisa ingênua de strings (Naive string search)

- **Suponha que você queira contar o número de vezes que uma string menor aparece em uma string mais longa:**

  - **Uma abordagem direta envolve a verificação de pares de caracteres individualmente;**

- **Pseudocódigo:**

  ```javascript
  /*
  	- Faça um loop para a string mais longa;
  	
  	- Faça um loop para a string mais curta;
  	
  	- Se os caracteres não corresponderem, saia do loop interno;
  	
  	- Se os personagens combinarem, continue;
  	
  	- Se você completar o loop interno e encontrar uma correspondência, incremente a contagem de correspondências;
  
  	- Retorne a contagem;
  */
  ```

