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
}

let tree = new BinarySearchTree();

console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(13));
console.log(tree.insert(11));
console.log(tree.insert(2));
console.log(tree.insert(16));
console.log(tree.insert(7));
console.log(tree.insert(7));

console.log(tree.contains(20));
console.log(tree.contains(5));

console.log(tree.find(20));
console.log(tree.find(5));

// console.log(tree);

/*
          10
      5       13
    2   7   11  16
*/
