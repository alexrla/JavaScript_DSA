/*
  Recuperando um nó através da sua posição ("índice")!

  Pseudocódigo:
  - Se o "índice" for menor que 0 ou maior ou igual ao comprimento, 
  retorne null;
  - Se o "índice" for menor ou igual à metade do comprimento da 
  lista:
    - Percorra a lista a partir da cabeça (head) e faça um loop em 
    direção ao meio;
    - Retorne o nó assim que for encontrado;
  - Se o "índice" for maior que a metade do comprimento da lista:
    - Percorra a lista a partir da cauda (tail) e faça um loop em 
    direção ao meio;
    - Retorne o nó assim que for encontrado;
  ;
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

  get(index) {
    if(index < 0 || index >= this.length) {
      // return null;
      return "NOT FOUND";
    }

    let count, currentItem;

    if(index <= Math.ceil(this.length / 2)) {

      count = 0; 
      currentItem = this.head;

      while(count !== index) {
        currentItem = currentItem.next;
        count++;
      }

    } else {
      
      count = this.length - 1; 
      currentItem = this.tail;

      while(count !== index) {
        currentItem = currentItem.previous ;
        count--;
      }

    }

    return currentItem.value;
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

list.push(7);
list.push(31);
list.push(26);
list.push(12);
list.push(88);
list.push(95);
list.push(73);
list.push(54);
list.push(20);
list.push(14);
console.log(list.display());
console.log(list.get(6));

/*
  Versão 1
  get(index) {
    if(index < 0 || index >= this.length) {
      // return null;
      return "NOT FOUND";
    }

    let count = 0, currentItem = this.head;

    while(count !== index) {
      currentItem = currentItem.next;
      count++;
    }

    return currentItem.value;
  }
*/