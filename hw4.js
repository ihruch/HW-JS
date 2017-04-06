/**
 * Created by Игорь on 06.04.2017.
 */
var obj = {
    className: 'open menu'
}

function  addClass(obj, cls) {
       var arrMy = obj.className.split(' ');

           for (var i=0; i < arrMy.length; i++ ) {
               if (arrMy[i] == cls) return ;
           }
               // console.log(arrMy);
               arrMy.push(cls);

       return obj.className = arrMy.join(' ');



}//end func

console.log(addClass(obj, 'new')); // obj.className='open menu new'
console.log(addClass(obj, 'open')); //return без изменений (класс уже существует)
console.log(addClass(obj, 'me h')); // obj.className='open menu new me'

console.log( obj.className ); // "open menu new me"