
const restParam = (...letras: string[]) => {
    return letras.join('')
}

console.log(restParam('a'))
console.log(restParam('a', 'b'))
console.log(restParam('a', 'b', 'c'))