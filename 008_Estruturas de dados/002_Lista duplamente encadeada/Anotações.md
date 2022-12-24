# Estrutura de Dados - JavaScript



### Lista duplamente encadeada

- **"Sinônimos":**
  - **Lista duplamente encadeada/vinculada/ligada;**


- **O que é**

  - **Semelhante as listas simplemente encadeadas, mas agora para cada nó, existirá um outro ponteiro, que aponta para o nó anterior;**
  
  ![image-20221223172621541](/home/alexa/.config/Typora/typora-user-images/image-20221223172621541.png)
  
  - **Agora, apesar de ganhar mais flexibilidade, em relação as listas simplemente encadeadas, o uso de listas duplamente encadeadas, requer maior uso de memória;**



### BIG-O

- **Inserção: `O(1)`;**

- **Remoção: `O(1)`;**

- **Busca: `O(N)`;**

  - **OBS.: tecnicamente, a busca é `O(N/2)`, o que ainda é `O(N)`;**

- **Acessar um item: `O(N)`;** 

  

### Observações

- **As listas duplamente encadeadas são quase idênticas às listas simplesmente encadeadas, exceto que há um ponteiro adicional para os nós anteriores;**
- **Listas duplamente encadeadas são melhores do que listas simplesmente encadeadas para encontrar nós e pode ser feito na metade do tempo;**
  - **No entanto, elas ocupam mais memória considerando o ponteiro extra;**
- **Listas duplamente encadeadas são usadas para implementar outras estruturas de dados e certos tipos de caches;**
