class HashTable {
  constructor(size=17) {
    // Criando um array de size posições
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;

      total = (total * WEIRD_PRIME_NUMBER + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    
    // Veirificando se já existe algo naquela posição
    if(!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    // this.keyMap[index].push([key, value]);
    this.keyMap[index].push({key, value});

    return true;
  }

  get(key) {
    let index = this._hash(key);

    // Veirificando se existe algo naquela posição
    if(this.keyMap[index]) {
      for(let i = 0; i < this.keyMap[index].length; i++)  {
        if(this.keyMap[index][i].key === key) {
          return this.keyMap[index][i].value;
        }
      }
    }

    return undefined;
  }

  values() {
    let valuesArr = [];

    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i])  {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if(!valuesArr.includes(this.keyMap[i][j].value)) 
            valuesArr.push(this.keyMap[i][j].value);
        }
      }
    }

    return valuesArr;
  }

  keys() {
    let keysArr = [];

    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i])  {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if(!keysArr.includes(this.keyMap[i][j].key)) 
            keysArr.push(this.keyMap[i][j].key);
        }
      }
    }

    return keysArr;
  }
}

let hashTable = new HashTable();

console.log(hashTable.set("azul", "#0000FF"));
console.log(hashTable.set("vermleho", "#FF0000"));
console.log(hashTable.set("verde", "#00FF00"));
console.log(hashTable.set("branco", "#FFFFFF"));
console.log(hashTable.keyMap);

console.log(hashTable.get("azul"));

console.log(hashTable.values());
console.log(hashTable.keys());
