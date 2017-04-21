// Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
// + написать свойство очистки буфера
function makeBuffer() {
    var text = '';

    function buff1(str) {
        if (arguments.length == 0){ return text;}
        return text +=str;

    }
    buff1.clear = function () {
        text = '';
    }
    return buff1;
} //end func

var buffer = makeBuffer();

// добавить значения к буферу
buffer(' Замыкания ');
buffer(' Использовать ');
buffer(' Нужно! ');
buffer.clear();
buffer(' УРААААА ! ');

// получить текущее значение
console.log( buffer() ); // Замыкания Использовать Нужно!
