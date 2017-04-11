// скопировать в существующий объект свойства из одного или нескольких других.
// copy(dst, src1, src2)

function copy() {
   var dst = arguments[0];

    for (var i = 0; i < arguments.length; i++) {
        var arrg = arguments[i]
        for (var key in arrg) {
            dst[key]  = arrg[key]
        }

    }

}

var vasya = {
    age: 21,
    name: 'Вася',
    surname: 'Петров'
};

var user = {
    isAdmin: false,
    isEmailConfirmed: true
};

var student = {
    university: 'My university'
};

// добавить к vasya свойства из user и student
copy(vasya, user, student);

console.log( vasya.isAdmin ); // false
console.log( vasya.university ); // My university/**

