/*
  Inverter a lista!

  Pseudocódigo:
  - Troque a cabeça (head) e a cauda (tail);
  - Crie uma variável chamada "next";
  - Crie uma variável chamada "previous";
  - Crie uma variável chamada "node"/"currentNode" e a inicialize 
  para começar no início(no head);
  - Percorra a lista;
  - Defina a variável "next" como a propriedade next em 
  qualquer nó ("node") atual;
  - Defina a propriedade next do nó atual para ser qualquer 
  nó anterior ("previous");
  - Defina "previous" como o valor da variável do nó ("node");
  - Defina a variável do nó ("node") como o valor da variável 
  "next";
  - Após encerrar o loop, retorne a lista;
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
      return null;
      // return "NOT FOUND";
    }

    let counter = 0;
    let currentItem = this.head;

    while(counter !== index) {
      currentItem = currentItem.next;
      counter++;
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
    if(index < 0 || index > this.length) {

      // return false;
      return "NOT FOUND";

    } else if (index === 0) {

      // return !!this.unshift(value);
      this.unshift(value);
      return true;

    } else if (index === this.length) {

      // return !!this.push(value);
      this.push(value);
      return true;

    } else {

      let newNode = new Node(value);
      let previousItem = this.get(index - 1);
      let previousItemNext = previousItem.next;

      previousItem.next = newNode;
      newNode.next = previousItemNext;
      
    }

    this.length += 1;
    return true;
  }

  remove(index) {
    let value;

    if(index < 0 || index >= this.length) return "NOT FOUND";
    else if(index === 0) return this.shift();
    else if(index === this.length - 1) return this.pop();
    else {
      let previousNode = this.get(index - 1);
      let removed = previousNode.next;

      previousNode.next = removed.next;
      value = removed.value;
    }

    this.length -= 1;
    return value;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null, previous = null;

    for(let i = 0; i < this.length; i++)  {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }

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

console.log(list.display());
list.reverse();
console.log(list.display());
console.log(list.head);
console.log(list.tail);
