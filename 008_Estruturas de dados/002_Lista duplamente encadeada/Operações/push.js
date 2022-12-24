/*
  Adicionar um novo nó ao final da lista!

  Pseudocódigo:
  - Crie um novo nó com o valor passado para o método;
  - Se a propriedade head for nula, defina a cabeça (head) e a 
  cauda (tail) como o nó recém-criado;
  - Caso contrário, defina a propriedade next da cauda (tail) para 
  ser esse nó;
  - Defina a propriedade previous no nó recém-criado para ser a 
  cauda (tail);
  - Defina a cauda (tail) como o nó recém-criado;
  - Aumente o comprimento (length) em um;
  - Retorne a lista duplamente encadeada;
  */

class Node {
  constructor(value) {
    this.value = value; // Dado
    this.next = null; // Referência para o próximo nó
    this.previous = null; // Referência para o nó anterior
  };
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  };

  push(value) {
    let newNode = new Node(value);

    if(this.length === 0) { // if(!this.head)

      this.head = newNode;
      this.tail = newNode;

    } else {

      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;

    }

    this.length++;
    return this;
  }

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

let list = new DoublyLinkedList();
console.log(list);
list.push(15);
console.log(list);
list.push(39);
console.log(list);
list.push(88);
console.log(list);

console.log(list.display());
