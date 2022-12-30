// Lista de adjacência
// Grafo ponderado

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

  addEdge(vertex1, vertex2, weight) {
    if(!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push({neighbor: vertex2, weight});
      this.adjacencyList[vertex2].push({neighbor: vertex1, weight});

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
// console.log(graph.adjacencyList);

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.adjacencyList);
