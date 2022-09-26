var restParam = function () {
    var letras = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        letras[_i] = arguments[_i];
    }
    return letras.join('');
};
console.log(restParam('a'));
console.log(restParam('a', 'b'));
console.log(restParam('a', 'b', 'c'));
