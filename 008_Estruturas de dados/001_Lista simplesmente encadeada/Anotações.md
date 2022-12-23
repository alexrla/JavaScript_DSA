# Estrutura de Dados - JavaScript



### Lista simplesmente encadeada

- **"Sinônimos":**
  - **Lista encadeada/vinculada;**
  - **Lista simplesmente encadeada/vinculada;**
  - **Lista encadeada/vinculada individualmente;**
  - **Lista encadeada/vinculada unicamente (porque cada nó se conecta a outro em uma única direção);**


- **O que é**

  - **Estrutura de dados que contém as seguintes propriedades:**
    - **Head (cabeça);**
    - **Tail (cauda);**
    - **Length (comprimento);**
  - **Listas encadeadas são constituídas de nós, e cada nó tem um valor e um ponteiro que aponta para o próximo nó, ou para um valor nulo (quando se temos o último nó da lista);**

  ![image-20221217100257833](/home/alexa/.config/Typora/typora-user-images/image-20221217100257833.png)

  - **Os nós não são indexados;**

- **Listas x Arrays**

  - **Listas:**
    - **Não possui índices;**
    - **Um nó se conectam ao próximo através de um ponteiro;**
    - **O acesso aleatório não é permitido (não podemos podemos pedir um elemento da lista e obtê-lo de imediato, devemos percorrer a lista desde o começo, até o elemento que pedimos);**
  - **Arrays:**
    - **Indexado em ordem;**
    - **Operações de inserção e exclusão, podems ser custosas;**
    - **Pode ser acessado rapidamente em um índice específico;**



### Reverse

![image-20221223124531887](/home/alexa/.config/Typora/typora-user-images/image-20221223124531887.png)



### BIG-O

- **Inserção: `O(1)`;**
- **Remoção (depende da onde estamos removendo): `O(1)` ou `O(N)`;**
- **Busca: `O(N)`;**
- **Acessar um item: `O(N)`;** 



### Observações

- **As listas vinculadas individualmente são uma excelente alternativa aos arrays, quando a inserção e exclusão no início são frequentemente necessárias;**
- **Os arrays contêm um índice integrado, enquanto as listas vinculadas não;**
- **A ideia de uma estrutura de dados de lista que consiste em nós, é a base para outras estruturas de dados como Pilhas e Filas;**
