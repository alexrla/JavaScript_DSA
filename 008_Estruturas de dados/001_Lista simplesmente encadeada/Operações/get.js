/*
  Recuperando um nó através da sua posição ("índice")!

  Pseudocódigo:
  - Esse método deve receber um "índice";
  - Se o "índice" for menor que zero ou maior/igual a comprimento 
  da lista, retorne null;
  - Percorra a lista até chegar no "índice" fornecido e retorne o 
  nó desse índice especificado;
  ;
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

    if(!this.head) { 

      this.head = newNode;
      this.tail = this.head;
      
    } else {

      this.tail.next = newNode;
      this.tail = newNode;

    }

    this.length += 1;

    return this;
  };

  pop() {
    if(!this.head) return "Empty list!"

    let currentItem = this.head;
    let newTail = currentItem;

    while(currentItem.next) {
      newTail = currentItem;
      currentItem = currentItem.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length -= 1;

    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentItem.value;
  };

  shift() {
    if(!this.head) return "Empty list!"

    let currentHead = this.head;
    this.head = currentHead.next;

    this.length -= 1;

    if(this.length === 0) this.tail = null;

    return currentHead.value;
  }

  unshift(value) {
    let newNode = new Node(value);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) {
      // return null;
      return "NOT FOUND";
    }

    let counter = 0;
    let currentItem = this.head;

    while(counter !== index) {
      currentItem = currentItem.next;
      counter++;
    }

    return currentItem;
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
  
let list = new SinglyLinkedList();
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
