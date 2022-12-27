/*
  O que acontece nesse travessia:

  1 - Visitamos todos os nós na sub-árvore esquerda;
  2 - Visitamos todos os nós na sub-árvore direita;
  3 - Visitamos o nó raiz;
*/

class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if(!this.root) {
      this.root = newNode;
      return this.root;
    }
    else {
      let currentItem = this.root;

      while(true) {
        if(value < currentItem.value) {

          if(!currentItem.left) {
            currentItem.left = newNode;
            return currentItem;
          } else {
            currentItem = currentItem.left;
          }

        } else if(value > currentItem.value) {
          
          if(!currentItem.right) {
            currentItem.right = newNode;
            return currentItem;
          } else {
            currentItem = currentItem.right;
          }

        } else { // duplicate case
          return undefined;
        }
      }
    }
  }

  contains(value) {
    if(!this.root) return false;

    let currentItem = this.root, found = false;

    while(currentItem && !found)  {
      if(value < currentItem.value) {
        currentItem = currentItem.left;
      } else if(value > currentItem.value) {
        currentItem = currentItem.right;
      } else { // value === currentItem.value
        return true;
      }
    }

    return false;
  }

  find(value) {
    if(!this.root) return false;
    else {
      let currentItem = this.root, found = false;

      while(currentItem && !found)  {
        if(value < currentItem.value) {
          currentItem = currentItem.left;
        } else if(value > currentItem.value) {
          currentItem = currentItem.right;
        } else { // value === currentItem.value
          found = true;
        }
      }

      if(found) return currentItem;
      else return undefined;
    }
  }

  bfs() {
    let node = this.root, queue = [], visited = [];

    queue.push(node);

    while(queue.length) {
      node = queue.shift();

      visited.push(node.value);

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    return visited;
  }

  dfsPreOrder() {
    let visited = [];
    let currentItem = this.root;

    function traverse(node) {
      visited.push(node.value);

      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(currentItem);

    return visited;
  }

  dfsPostOrder() {
    let visited = [];
    let currentItem = this.root;

    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);

      visited.push(node.value);
    }

    traverse(currentItem);

    return visited;
  }
}

let tree = new BinarySearchTree();

tree.insert(10)
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(20);
tree.insert(8);

console.log(tree.dfsPostOrder());

/*
          10
      6       15
    3   8       20
*/