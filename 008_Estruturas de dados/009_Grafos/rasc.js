class Graph{
    constructor(){
        this.adjacencyList = {};
    } 

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            let adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex]
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
console.log(graph.adjacencyList);

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("F", "A");
console.log(graph.adjacencyList);

graph.removeEdge("A", "F");
console.log(graph.adjacencyList);

graph.removeVertex("F");
console.log(graph.adjacencyList);
