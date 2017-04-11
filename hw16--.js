/*Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.

    Например, для 2 января 2015:

var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date. */

var date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
    var new1  = date.getDate();

}

console.log( getDateAgo(date, 1) );