# Estrutura de Dados - JavaScript



### Analisando o desempenho de Arrays e Objetos

#### Objetos

- **Estruturas de dados não ordenadas, onde tudo é armazenado em pares de `chave:valor`;**

- **Big-O de objetos:**

  ```javascript
  // Operações
  Inserção - O(1)
  Remoção - O(1)
  Busca - O(N)
  Acesso - O(1)
  ```

- **Big-O dos métodos de objetos:**

  ```javascript
  Object.keys - O(n)
  Object.values - O(n)
  Object.entries - O(n)
  hasOwnProperty - O(1)
  ```

  

#### Arrays

- **Listas ordenadas;**

- **Big-O de arrays:**

  ```javascript
  // Operações
  Inserção - Depende da posição em que vamos inserir o elemento...
  Remoção - Depende da posição do elemento que queremos remover...
  Busca - O(N)
  Acesso - O(1)
  ```

- **Big-O de operações de array:**

  ```javascript
  push - O(1)
  pop - O(1)
  shift - O(N)
  unshift - O(N)
  concat - O(N)
  slice - O(N)
  splice - O(N)
  sort - O(N * log N)
  forEach/map/filter/reduce - O(N)
  ```

  