// Retornar a contagem de cada caractere de uma string

// Verificar se o caractere é alfanumérico ou não
function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);

    if(
        !(code > 47 && code < 58) && // (0 - 9)
        !(code > 64 && code < 91) && // (A - Z)
        !(code > 96 && code < 123) // (a - z)
    )   {
        return false;
    }

    return true;
}

function charCount(str) {
    let result = {};

    for(let char of str)  {
        if(isAlphaNumeric(char)) {
            char = char.toLowerCase();

            result[char] = ++result[char] || 1;
        }
    }

    return result;
}

console.log(charCount("Hello, World!"));