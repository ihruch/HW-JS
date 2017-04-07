/**
 * Created by Игорь on 06.04.2017.
 */
// Напишите код, который отсортирует массив объектов people по полю age.
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var tania = { name: "Таня", age: 7 };

var people = [ vasya, tania , masha , vovochka ];

/* ваш код  */
function sortPeople(personA, personB) {
    return personA.age - personB.age;
}
people.sort(sortPeople);
for (var i = 0; i < people.length; i++) {

    console.log(people[i].name);
}
// теперь people: [vovochka, masha, vasya]
console.log( people );
