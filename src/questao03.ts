
const tratamentoNome = (nome: string, pronome?: string): string => {

    return `${pronome || 'Sr(a)'}. ${nome}`

}

console.log(tratamentoNome('Renan', 'Mr'))