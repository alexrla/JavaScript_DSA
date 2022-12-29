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

  dfsRecursive(initialVertex) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if(!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          return dfs(neighbor);
        }
      })
    })(initialVertex);

    return result;
  }
}

let graph = new Graph;

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

console.log(graph.adjacencyList);

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")
console.log(graph.adjacencyList);

console.log(graph.dfsRecursive("A"));
