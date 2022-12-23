class Node {
  constructor(value) {
    this.value = value; // Dado
    this.next = null; // Referência para o próximo nó
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
    if(index < 0 || index >= this.length) return null;

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
    if(index < 0 || index > this.length) return false;
    else if (index === 0) return !!this.unshift(value);
    else if (index === this.length) return !!this.push(value);
    else {
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

    if(index < 0 || index >= this.length) return false;
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
      console.log(currentItem.value);
      listItems.push(currentItem.value);
      currentItem = currentItem.next;
    }

    return listItems;
  }
};

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
