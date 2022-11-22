// Retornar a contagem de cada caractere de uma string

function charCount(str) {
    let result = {};

    for(let char of str)  {
        char = char.toLowerCase();

        if(/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1;
        }
    }

    return result;
}

console.log(charCount("Hello, World!"));