/*
  Adicionar um nó, em uma posição especificada!

  Pseudocódigo:
  - Se o "índice" for menor que zero ou maior que o comprimento 
  da lista, retorne false;
  - Se o "índice" for zero, utilize o método unshift;
  - Se o "índice" for igual ao comprimento da lista, utilize o
  método push;
  - Caso contrário, utilizando o método get, acesse o nó de index - 1;
  - Defina as propriedades next e previous nos nós corretos para 
  vincular tudo;
  - Aumente o comprimento em 1;
  - Retorne true;
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
      return null;
      // return "NOT FOUND";
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

    return currentItem;
  }

  set(index, value) {
    let foundNode = this.get(index);

    if(foundNode) {

      foundNode.value = value;
      return true;

    }

    return false;
  }

  insert(index, value) {
    if(index < 0 || index > this.length) return false;
    else if(index === 0) return !!this.unshift(value);
    else if(index === this.length) return !!this.push(value);
    else {
      let newNode = new Node(value);
      let beforeNode = this.get(index - 1);
      let afterNode = beforeNode.next;

      beforeNode.next = newNode;
      newNode.previous = beforeNode;

      newNode.next = afterNode;
      afterNode.previous = newNode;

      this.length++;
      return true;
    }
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
console.log(list.display());
console.log(list.get(0));
console.log(list.set(0, 8));
console.log(list.display());

console.log(list.insert(-1, 201));
console.log(list.display());
console.log(list.insert(list.length + 1, 201));
console.log(list.display());
console.log(list.insert(0, 255));
console.log(list.display());
console.log(list.insert(list.length, 350));
console.log(list.display());
console.log(list.insert(3, 100));
console.log(list.display());
console.log(list);
