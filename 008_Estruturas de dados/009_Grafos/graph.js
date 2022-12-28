// Lista de adjacência
// Grafo não direcionado

class Graph {
  constructor() {
      this.adjacencyList = {};
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];

      return true;
    }

    return false;
  }

  addEdge(vertex1, vertex2) {
    if(!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);

      return true;
    }

    return false;
  }

  removeEdge(vertex1, vertex2) {
    if(this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        vertex => vertex !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        vertex => vertex !== vertex1
      );

      return true;
    }

    return false;
  }

  removeVertex(vertex) {
    if(this.adjacencyList[vertex])  {
      while(this.adjacencyList[vertex].length)  {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }

      delete this.adjacencyList[vertex];

      return true;
    }

    return false;
  }
}

let graph = new Graph;

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
