/*
  Adicionar um novo nó no início da lista!

  Pseudocódigo:
  - Crie um novo nó com o valor passado para o método;
  - Se length for igual a zero;
    - Defina a cabeça (head) como o novo nó;
    - Defina a cauda (tail) como o novo nó;
  - Caso contrário;
    - Defina a propriedade previous do topo da lista (o head atual) 
    para ser o novo nó;
    - Defina a propriedade next do novo nó para ser o head atual;
    - Atualize o head para ser o novo nó;
  - Aumenta o comprimento da lista em 1;
  - Retorne a lista;
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

  unshift(value) {
    let newNode = new Node(value);

    if(this.length === 0) { // if(!this.head)

      this.head = newNode;
      this.tail = newNode;

    } else {

      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;

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
list.unshift(2);
list.unshift(32);
list.unshift(74);
console.log(list.display());

console.log("Removed node value: " + list.shift());
console.log(list.display());
console.log("Removed node value: " + list.shift());
console.log(list.display());
console.log("Removed node value: " + list.shift());
console.log(list.display());
console.log(list);
