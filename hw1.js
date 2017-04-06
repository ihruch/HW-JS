// Напишите код, который:
//
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
//     Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
//     Выводит сумму всех значений массива


function sumAdd() {
    var arr = [];
    var sum = 0;

    while(true) {
        var mesNum = prompt('enter numder');
        console.log(mesNum);
        if ( mesNum === null || mesNum === ' ') break;
        arr.push(+mesNum);

    } //end while

    for (var i=0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum;
} //sumAdd

alert( sumAdd() ) ;




