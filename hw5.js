//Перевести текст вида border-left-width в borderLeftWidth/**

function camelize(str){
        var arrMy = str.split('');

    for (var i = 0; i < arrMy.length; i++) {
        if( arrMy[i] == '-' ){
            arrMy[i+1] = arrMy[i+1].toUpperCase();
            arrMy.splice( i, 1 );
       }

    }
    return arrMy.join('');

}



console.log(camelize("ba-a-or"));// == 'backgroundColor';
console.log(camelize("list-style-image"));// == 'listStyleImage';
console.log(camelize("-webkit-transition"));// == 'WebkitTransition';