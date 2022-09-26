var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var pares = function (lista) {
    return lista.filter(function (v, i) { return !(v % 2); });
};
console.log(pares(array));
