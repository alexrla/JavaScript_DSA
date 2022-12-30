// Fila de prioridade

class PriorityQueue {
  constructor(){
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

// Lista de adjacência
// Grafo ponderado

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
      if(!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
  
        return true;
      }
  
      return false;
    }

    addEdge(vertex1,vertex2, weight){
      if(!this.adjacencyList[vertex1].includes(vertex2)) {
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
  
        return true;
      }
  
      return false;
    }

    dijkstra(start, finish){
        let nodes = new PriorityQueue();
        let distances = {};
        let previous = {};
        let path = [] // Para retornar no final
        let smallest;

        // Estado inicial
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            
            previous[vertex] = null;
        }

        // Enquanto houver nó para visitar
        while(nodes.values.length) {
            smallest = nodes.dequeue().value;
            
            if(smallest === finish) {
                // Encerrando
                while(previous[smallest]) { 
                    path.push(smallest);
                    smallest = previous[smallest];
                }

                break;
            } 
            if(smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjacencyList[smallest]){
                    //Pegando nó vizinho
                    let nextNode = this.adjacencyList[smallest][neighbor];

                    // Calculando a nova distância para o nó vizinho
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    
                    if(candidate < distances[nextNeighbor]){
                        // Atualizando a nova menor distância ao vizinho
                        distances[nextNeighbor] = candidate;

                        //Atualizando o previous - Como chegamos ao vizinho
                        previous[nextNeighbor] = smallest;

                        // Enfileirando na fila de prioridade com nova prioridade
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }

        return path.concat(smallest).reverse();     
    }
}

let graph = new Graph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);


console.log(graph.dijkstra("A", "E"));

// ["A", "C", "D", "F", "E"]
