// Exemplo com recursão
function countDown(num) {
  if(num <= 0) {
      console.log("Tudo feito!");

      return;
  }

  console.log(num);

  num--;

  countDown(num);
}

countDown(5);

// Exemplo iterativo
function countDown2(num) {
  for(let i = num; i > 0; i--)  {
    console.log(i);
  }

  console.log("Tudo feito!");
}

countDown2(5);