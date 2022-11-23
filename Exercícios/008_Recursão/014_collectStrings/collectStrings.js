/*
    Escreva uma função chamada collectStrings que aceite um 
    objeto e retorne um array de todos os valores no objeto 
    que tenham um tipo de string.
*/

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

// Helper Method Recursion Version
function collectStrings(obj) {
    let stringsArr = [];

    function gatherStrings(o) {
        for(let key in o) {

            if(typeof o[key] === "string") {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === "object") {
                return gatherStrings(o[key]);
            }

        }
    }

    gatherStrings(obj);

    return stringsArr;
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

// Pure Recursion Version
function collectStrings2(obj) {
    let stringsArr = [];

    for(let key in obj) {

        if(typeof obj[key] === "string") {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === "object") {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }

    }

    return stringsArr;
}

console.log(collectStrings2(obj)); // ["foo", "bar", "baz"])