class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            let parent = this.values[parentIndex];

            if(element.priority >= parent.priority) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    dequeue() {
        let min = this.values[0];
        let end = this.values.pop();

        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
    }

    sinkDown() {
        let index = 0;
        let length = this.values.length;

        const element = this.values[0];

        while(true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];

                if(leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }

            if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];

                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex;
                }
            }

            if(swap === null) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

let susQueue = new PriorityQueue();

console.log(susQueue.values);
susQueue.enqueue("Gripe", 3);
console.log(susQueue.values);
susQueue.enqueue("Ferimento de bala", 1);
console.log(susQueue.values);
susQueue.enqueue("Febre", 2);
console.log(susQueue.values);
susQueue.enqueue("Vômito", 2);
console.log(susQueue.values);

susQueue.dequeue();
console.log(susQueue.values);
