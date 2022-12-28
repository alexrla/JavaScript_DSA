class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
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

      if(element <= parent) break;
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
        if(leftChild > element) swap = leftChildIndex;
      }

      if(rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];

        if(
            (swap === null && rightChild > element) || 
            (swap !== null && rightChild > leftChild)
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

  extractMax() {
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

let heap = new MaxBinaryHeap();


/*
  console.log(heap.values);
  heap.insert(55);
  console.log(heap.values);
  heap.insert(100);
  console.log(heap.values);
  heap.insert(45);
  console.log(heap.values);
*/

console.log(heap.values);
heap.insert(55);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);

/*
  [41, 39, 33, 18, 27, 12, 55]
    0   1   2   3   4   5
*/