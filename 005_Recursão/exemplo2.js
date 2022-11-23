// Exemplo com recursão
function sumRange(num){
  if(num === 1) return 1; 

  return num + sumRange(num - 1);
}

console.log(sumRange(5));

/*
  - num === 3
    return 3 + sumRange(3 - 1);... return 3 + sumRange(2);
  
    - num == 2
      return 2 + sumRange(2 - 1);... return 2 + sumRange(1);

      - num === 1
        return 1;
*/