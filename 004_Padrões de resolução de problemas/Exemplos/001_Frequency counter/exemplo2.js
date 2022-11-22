/*
    Escreva uma função chamada same, que aceita dois arrays. 
    A função deve retornar true se cada valor na matriz tiver 
    seu valor correspondente ao quadrado na segunda matriz. 
    A frequência dos valores deve ser a mesma.
*/

function same(arr1, arr2){
    if(arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {}, frequencyCounter2 = {};

    for(let val of arr1)    {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    

    for(let val of arr2)    {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;  
    }


    for(let key in frequencyCounter1)   {
        if(!(key ** 2 in frequencyCounter2))    {
            return false;
        }

        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key])  {
            return false;
        }
    }

    return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 4, 1, 4, 11]));

// Complexidade de tempo: O(N)