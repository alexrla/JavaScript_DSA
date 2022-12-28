class MinBinaryHeap {
  constructor() {
    this.values = [1, 2, 3, 17, 19, 36, 7, 25, 100];
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

      if(element >= parent) break;
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
        if(leftChild < element) swap = leftChildIndex;
      }

      if(rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if(
            (swap === null && rightChild < element) || 
            (swap !== null && rightChild < leftChild)
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

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  extractMin() {
    let min = this.values[0];
    let end = this.values.pop();

    if(this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    if(this.values.length === 0) return undefined;

    return min;
  }
}

let heap = new MinBinaryHeap();

console.log(heap.values);
// heap.insert(15);
// console.log(heap.values);
console.log(heap.extractMin());
console.log(heap.values)

/*
  [1, 2, 3, 17, 19, 36, 7, 25, 100]
    0   1   2   3   4   5   6    7
*/