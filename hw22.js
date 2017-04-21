/*Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый,
в который входят только те элементы arr, для которых func возвращает true.

Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]".
 Использование должно быть таким:*/
/* .. ваш код для filter, inBetween, inArray */
var arr = [1, 2, 3, 4, 5, 6, 7];


function filter(arr, func){
    var result  = []

    for (var i = 0; i < arr.length; i++) {

        var val = arr[i];
        if( func(val)){
            result.push(val)
        } //end of

    } //end for
    return result;
}



function inBetween(a,b) {
    return function (x) {
        return x >= a && x <= b;
    }
} // end inBetween

function inArray(arr) {
    return function (n) {
       return arr.indexOf(n) != -1;
    }

}

 console.log(filter(arr, function(a) {
     return a % 2 == 0
 })); // 2,4,6

console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2