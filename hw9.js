/**
 * Created by Игорь on 06.04.2017.
 */
//Анаграммы – слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:

//воз - зов
//киборг - гробик
//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr){
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var resl = arr[i].toLowerCase().split('').sort().join('');
        obj[resl] = arr[i];
   } //end for

   var newArr = [];
    for (var key in obj) {
        newArr.push(obj[key]);
    }
    return newArr;

}
console.log(aclean(arr));