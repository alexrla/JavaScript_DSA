/*
  Adicionar um novo nó ao final da lista!

  Pseudocódigo:
  - O método deve aceitar um valor;
  - Crie um novo nó usando o valor passado para o método;
  - Se a lista estiver vazia (a propriedade head ainda não existe), defina 
  a cabeça (head) e a cauda (tail) como o nó recém-criado;
  - Caso contrário, se existir a propriedade head (a lista não está vazia) 
  defina a próxima propriedade na cauda (tail) para ser  o novo nó e defina 
  a propriedade da cauda (tail) na lista para ser o nó recém-criado;
  - Aumente o comprimento (length) em um;
  - Retorne a lista encadeada;
  */

class Node {
  constructor(value) {
    this.value = value; 
    this.next = null; 
  };
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  };

  push(value) {
    let newNode = new Node(value);

    if(!this.head) { // || if(this.length === 0)

      this.head = newNode;
      this.tail = this.head;
      
    } else {

      this.tail.next = newNode;
      this.tail = newNode;

    }

    this.length += 1;

    return this;
  };

  display() {
    let currentItem = this.head;
    const listItems = [];

    while(currentItem) {
      // console.log(currentItem.value);
      listItems.push(currentItem.value);
      currentItem = currentItem.next;
    }

    return listItems;
  }
}

let list = new SinglyLinkedList();
list.push(15);
list.push(39);
list.push(88);

console.log(list.display());
