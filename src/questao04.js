var numerosSeparados = function (lista) {
    var result = '';
    lista.forEach(function (v, i) {
        if (i == lista.length - 1) {
            result += "".concat(v);
        }
        else {
            result += "".concat(v, " - ");
        }
    });
    return result;
};
console.log(numerosSeparados([1, 2, 3, 4]));
