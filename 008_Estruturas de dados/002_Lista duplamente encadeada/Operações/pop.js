/*
  Remover um novo nó do final da lista!

  Pseudocódigo:
  - Se não houver nós na lista, retorne undefined;
  - Armazene a cauda (tail) atual em uma variável, para que seja
  possível retorná-la mais tarde;
  - Se length for igual a 1, defina a cabeça (head) e a calda (tail) 
  como nulas;
  - Atualize a cauda para ser o nó anterior;
  - Defina a nova cauda (tail) ao lado de null;
  - Diminua o comprimento;
  - Retorne o valor removido;
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

console.log("Removed node value: " + list.pop());
console.log(list.display());
console.log("Removed node value: " + list.pop());
console.log(list.display());
console.log("Removed node value: " + list.pop());
console.log(list.display());
console.log(list);
