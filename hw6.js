//У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
//    Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
//    P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

var obj = {
  className: 'open open open menu fdf menu'
};

function removeClass(obj, word) {
    var arrMy = (obj.className) ? obj.className.split(' ') : [];
    //console.log(arrMy);

    for (var i = 0; i < arrMy.length; i++) {
        if (arrMy[i] == word ) {
            arrMy.splice(i, 1);
            --i;
        }

    } // for
        return obj.className = arrMy.join(' ')
}// end funct
console.log(obj.className);
console.log( removeClass(obj, 'open')); // obj.className='menu'
console.log( removeClass(obj, 'menu')); // без изменений (нет такого класса)



