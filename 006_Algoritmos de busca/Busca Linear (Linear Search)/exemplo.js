/*
  Escreva uma função chamada linearSearch que aceita uma matriz e 
  um valor e retorna o índice no qual o valor existe. Se o valor 
  não existir na matriz, retorne -1.
*/

const brazilStates = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins"
];

const names = [
  "Felipe",
  "Luana",
  "David",
  "Daniel",
  "Diana",
  "Marina",
  "Yuri",
  "Joaquim",
  "Eduardo",
  "Estela",
  "Melissa",
  "Débora",
  "Samuel",
  "João",
  "Paloma",
  "Juliana",
  "Leonardo",
  "Bruno",
  "Hugo",
  "André",
  "Joana",
  "Sabrina",
  "Lucas",
  "Nicolas",
  "Henrique",
  "Tiago",
];

function linearSearch(arr, value) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === value) return i;
  }

  return -1;
}

console.log(linearSearch([10 , 15 , 20 , 25 , 30], 15)); // 1
console.log(linearSearch([9 , 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1 , 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1 , 2 , 3 , 4 , 5], 6)); // -1
console.log(linearSearch([9 , 8 , 7 , 6 , 5 , 4 , 3 , 2 , 1 , 0], 10 )); // -1