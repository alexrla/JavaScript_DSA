class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if(!this.first) { // this.size === 0
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if(!this.first) { // this.size === 0
      return null;
    }
    
    let temp = this.first;
    
    if(this.first === this.last) { // this.size === 1
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next; // this.first = this.first.next;
    }

    this.size--;
    return temp.value;
  }

  display() {
    let currentItem = this.first;
    let items = [];

    while(currentItem) {
      items.push(currentItem);
      currentItem = currentItem.next;
    }

    return items;
  }
}

let queue = new Queue();
console.log("Size = " + queue.enqueue(1));
console.log("Size = " + queue.enqueue(2));
console.log("Size = " + queue.enqueue(3));
console.log("Size = " + queue.enqueue(4));
console.log("Size = " + queue.enqueue(5));
console.log(queue.display());
// console.log(queue.first.value);
// console.log(queue.last.value);

console.log(queue.dequeue());
console.log(queue.display());