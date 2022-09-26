var tratamentoNome = function (nome, pronome) {
    return "".concat(pronome || 'Sr(a)', ". ").concat(nome);
};
console.log(tratamentoNome('Renan', 'Mr'));
