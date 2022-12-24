/*
  Remover um novo nó do início da lista!

  Pseudocódigo:
  - Se length for igual a 0, retorna undefined;
  - Armazene a cabeça (head) atual em uma variável (head antiga);
  - Se length for igual a 1:
    - Definir a cabeça (head) como nula;
    - Define a cauda (tail) como nula;
  - Atualize a cabeça (head) para ser a próxima da head antiga;
  - Defina a propriedade previous da cabeça (head) como nula;
  - Defina o next da head antiga como nulo;
  - Diminua o comprimento em um;
  - Retorne a cabeça (head) removida;
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

  pop() {
    if(this.length === 0) { // if(!this.head)

      // return undefined;
      return "Empty list!"

    }

    let removedNode = this.tail;

    if(this.length === 1) {
      
      this.head = null;
      this.tail = null;

    } else {

      this.tail = removedNode.previous;
      this.tail.next = null;
      removedNode.previous = null;

    }

    this.length--;
    return removedNode.value;
  }

  shift() {
    if(this.length === 0) { // if(!this.head)

      // return undefined;
      return "Empty list!"

    }

    let oldHead = this.head;

    if(this.length === 1) {

      this.head = null;
      this.tail = null;

    } else {

      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;

    }

    this.length--;
    return oldHead.value;
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
console.log(list.pop());
list.push(15);
list.push(39);
list.push(88);
console.log(list.display());

console.log("Removed node value: " + list.pop());
console.log(list.display());
console.log("Removed node value: " + list.pop());
console.log(list.display());
console.log("Removed node value: " + list.pop());
console.log(list.display());
console.log(list);

console.log(list.shift());
list.push(2);
list.push(32);
list.push(74);
console.log(list.display());

console.log("Removed node value: " + list.shift());
console.log(list.display());
console.log("Removed node value: " + list.shift());
console.log(list.display());
console.log("Removed node value: " + list.shift());
console.log(list.display());
console.log(list);
