
// Задание:
//Вывести день текущий день недели .
// МОЖНО ВЫВОДИТЬ И ГОД И ВРЕМЯ И МЕСЯЦ



var date = new Date();

function getWeek(date) {
    /******  1st способ  ******/
    //var days = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
    // return days[date.getDay()];

    /******  2st способ  ******/
    var option = {
        'weekday' : 'long',
        'day' : '2-digit'
    }
    return date.toLocaleString('ru-Ru', option)
}
console.log( getWeek(date));