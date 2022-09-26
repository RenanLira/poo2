const numerosSeparados = (lista: Number[]) => {
    
    let result: string = ''
    
    lista.forEach((v, i) => {
        if (i == lista.length-1) {
            result += `${v}`
        } else {
            result += `${v} - `
        }
    })

    return result
}


console.log(numerosSeparados([1, 2, 3, 4]))