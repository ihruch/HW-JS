var user = {
    'name' : 'Vasya',
    'lastname' : 'Petroiv',
    'age' : 34,
    say : function () {
        sayHi(this);
    }

}

function proba() {
    console.log( this.age );
}

user.fff = proba;


function sayHi(obj) {
    console.log( obj.name + ' - '+ obj.age);

}
console.log(user.fff());
console.log(user.say());