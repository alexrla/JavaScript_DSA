function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (array, i, j) => {
    let aux = array[i];
    array[i] = array[j];
    array[j] = aux;
  };

  let pivot = arr[start];
  let swapIndex = start;

  for(let i = start + 1; i <= end; i++) {
    if(pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);

  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right);

    // esquerda
    quickSort(arr, left, pivotIndex - 1);

    // direita
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;

}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));