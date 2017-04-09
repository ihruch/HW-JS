/**
 * Created by Игорь on 07.04.2017.
 */
//Палиндром - это строка которая читается с обоих сторон одинаково.
// Например: Анна, оно, А роза упала на лапу Азора.
//    Необходимо написать функцию isPal(string) которая возвращает true или false
// в зависимости от того является ли строка палиндромом или нет.

function isPal(str) {
    var newArr = str.split('');
    for (var i = 0; i < newArr.length; i++) {
        if(newArr[i] == ' ') {
            newArr.splice(i,1);
            --i;
        }
    }

    //console.log(newArr);
    if (newArr.length%2 == 0) {
        var firstArr = newArr.splice(0, newArr.length / 2).sort().join().toLowerCase();

        var secondArr = newArr.splice(newArr.length / 2 - 1).sort().join().toLowerCase();

    }else{
        var firstArr = newArr.splice(0, newArr.length/2-0.5).sort().join().toLowerCase();
        //console.log(firstArr);

        var secondArr = newArr.splice(newArr.length/2 ).sort().join().toLowerCase();
        // console.log(firstArr);
    }
    return ( firstArr == secondArr ) ? true : false;
    console.log(firstArr);

} 

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false


