//У нас есть массив объектов:
//Обычно сортировка по нужному полю происходит так:

var users = [{
        name: "Вася",
        surname: 'Иванов',
        age: 20
    }, {
        name: "Петя",
        surname: 'Чапаев',
        age: 25
    }, {
        name: "Маша",
        surname: 'Медведева',
        age: 18
}];

// Мы хотели бы упростить синтаксис до одной строки, вот так:

function byField(field){
   return function (perA, perB) {
        return perA[field] - perB[field];
   }
} //end funct

users.sort(byField('name'));
users.forEach(function(user) {  console.log( user.name );  }); // Вася, Маша, Петя

console.log('***************************');

users.sort(byField('age'));
users.forEach(function(user) {  console.log( user.name ); }); // Маша, Вася, Петя
