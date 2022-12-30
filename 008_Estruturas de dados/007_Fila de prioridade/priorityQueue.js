class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    // Índice do elemento recém inserido
    let index = this.values.length - 1;
    // Elemento recém inserido
    let element = this.values[index];

    while(index > 0) {
      // Índice do elemento pai
      let parentIndex = Math.floor((index - 1) / 2);
      // Elemento pai
      let parent = this.values[parentIndex];

      // if(element.priority >= parent.priority) break;
      if(element.priority <= parent.priority) break;
      else {
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    }
  }

  sinkDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[0];

    while(true) {
      // Índices dos filhos à esquerda e à direita do nó
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      // Filhos à esquerda e à direita do nó
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if(leftChild.priority > element.priority) swap = leftChildIndex;
      }

      if(rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if(
            (swap === null && rightChild.priority > element.priority) || 
            (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }


      if(swap === null) break;
      else {
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
      }
    }

  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);

    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    let max = this.values[0];
    let end = this.values.pop();

    if(this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    if(this.values.length === 0) return undefined;

    return max;
  }
}

let susQueue = new PriorityQueue();

console.log(susQueue.values);
susQueue.enqueue("Gripe", 1);
console.log(susQueue.values);
susQueue.enqueue("Ferimento de bala", 5);
console.log(susQueue.values);
susQueue.enqueue("Febre", 2);
console.log(susQueue.values);
susQueue.enqueue("Vômito", 2);
console.log(susQueue.values);

susQueue.dequeue();
console.log(susQueue.values);
