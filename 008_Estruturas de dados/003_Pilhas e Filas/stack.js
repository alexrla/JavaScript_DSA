class Node {
  constructor(value){
      this.value = value;
      this.previous = null;
  }
}

class Stack {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if(!this.first) { // this.size === 0
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.previous = temp;
    }

    return ++this.size;
  }

  pop() {
    if(!this.first) { // this.size === 0
      return null;
    }
    
    let temp = this.first;
    
    if(this.first === this.last) { // this.size === 1
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.previous; // this.first = this.first.previous;
    }

    this.size--;
    return temp.value;
  }

  display() {
    let currentItem = this.first;
    let items = [];

    while(currentItem) {
      items.push(currentItem);
      currentItem = currentItem.previous;
    }

    return items;
  }
}

let stack = new Stack();
console.log("Size = " + stack.push(1));
console.log("Size = " + stack.push(2));
console.log("Size = " + stack.push(3));
console.log("Size = " + stack.push(4));
console.log("Size = " + stack.push(5));
console.log(stack.display());
// console.log(stack.first.value);
// console.log(stack.last.value);

console.log(stack.pop());
console.log(stack.display());
