var numeroPrimo = function (num) {
    for (var index = num - 1; index > 1; index--) {
        if (!(num % index))
            return false;
    }
    return true;
};
console.log(numeroPrimo(7));
