// Versão 1 - ES5
function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([3, 25, 12, 35, 32, 41, 13, 13, 12, 4, 17]));

// Versão 2 - ES5
function bubbleSort2(arr) {
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }

  return arr;
}

console.log(bubbleSort2([3, 25, 12, 35, 32, 41, 13, 13, 12, 4, 17]));

// Versão 3 - ES2015
function bubbleSort3(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]] 
  };

  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

console.log(bubbleSort3([3, 25, 12, 35, 32, 41, 13, 13, 12, 4, 17]));

// Versão 4 - Versão otimizada
function bubbleSort4(arr) {
  let noSwap;

  for(let i = arr.length; i > 0; i--) {
    noSwap = true;

    console.log(arr)

    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;

        noSwap = false;
      }
    }

    console.log
    if(noSwap) break;
  }

  return arr;
}

console.log(bubbleSort4([3, 25, 12, 35, 32, 41, 13, 13, 12, 4, 17]));
