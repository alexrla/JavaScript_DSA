/*
  Remover um novo nó do início da lista!

  Pseudocódigo:
  - Se não houver nós na lista, retorne undefined;
  - Armazene a propriedade head em uma variável;
  - Defina a propriedade head como o próximo nó (o "next" do
  head atual);
  - Diminua o comprimento (length) em um;
  - Retorne o valor do nó removido;
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
    if(!this.head) { // || if(this.length === 0)

      // return undefined;
      return "Empty list!"
      
    }

    let currentHead = this.head;
    this.head = currentHead.next;

    this.length -= 1;

    if(this.length === 0) this.tail = null;

    return currentHead.value;
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
