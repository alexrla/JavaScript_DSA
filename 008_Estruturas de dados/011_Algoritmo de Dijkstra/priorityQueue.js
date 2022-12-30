class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({value, priority});
    this.sort();
  };

  dequeue() {
    return this.values.shift();
  };

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

// Devido a ordenação, temos: O(N * log(N))
// Podemos ter algo melhor, se utilizarmos um heap mínimo (MinBinaryHeap)
