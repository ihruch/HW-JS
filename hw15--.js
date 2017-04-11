/*  Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.

    День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

    var date = new Date(2012, 0, 3);  // 3 янв 2012
    alert( getLocalDay(date) );       // вторник, выведет 2
*/
var date = new Date(2012, 0, 3);  // 3 янв 2012
function getLocalDay(date){
    var days = date.getDay();
    if(days == 0 ){
        days = 7;
    }
    return days
}


console.log(getLocalDay(date) );       // вторник, выведет 2