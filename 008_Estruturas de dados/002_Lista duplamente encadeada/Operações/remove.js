/*
  Remover um nó, de uma posição especificada!

  Pseudocódigo:
  - Se o "índice" for menor que zero ou maior/igual que comprimento
  da lista, retorne false/undefined;
  - Se o "índice" for igual ao comprimento da lista - 1, utilize 
  o método pop;
  - Se o "índice" for 0, utilize o método shift;
  - Caso contrário, utilizando o método get, recupere o nó a ser 
  removido;
  - Atualize as propriedades do next e do previous para remover o 
  nó encontrado da lista;
  - Defina next e previous como nulo no nó encontrado;
  - Decremente o comprimento da lista em 1;
  - Retorne o valor do nó removido;
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

  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    else if(index === 0) return this.shift();
    else if(index === this.length - 1) return this.pop();
    else {
      let removedNode = this.get(index);
      // let beforeNode = removedNode.previous;
      // let afterNode = removedNode.next;
      // beforeNode.next = afterNode;
      // afterNode.previous = beforeNode;

      removedNode.previous.next = removedNode.next;
      removedNode.next.previous = removedNode.previous;

      removedNode.next = null;
      removedNode.previous = null;

      this.length--;
      return removedNode;
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

console.log(list.remove(-1));
console.log(list.display());
console.log(list.remove(list.length));
console.log(list.display());
console.log(list.remove(0));
console.log(list.display());
console.log(list.remove(list.length - 1));
console.log(list.display());
console.log(list.remove(2));
console.log(list.display());
