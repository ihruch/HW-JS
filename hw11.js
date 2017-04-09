/**
 * Created by Игорь on 07.04.2017.
 */
//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы
// arr (arr — массив строк).

var strings = ['кришна', 'кришна', 'харе', 'харе','ole', 'харе', 'харе', 'кришна','ole', 'кришна', '8-()' ];

function unique(arr) {
 var newObj = {};
 var newString = [];

    for (var i = 0; i < arr.length; i++) {
        var result = arr[i].toLowerCase().split('').sort().join('');
        newObj[result] = arr[i];
    }

    for (var key in newObj) {
        newString.push(newObj[key]);
    }
    return newString;
}


console.log( unique(strings) );
