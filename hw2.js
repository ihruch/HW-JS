/**
 * Created by Игорь on 05.04.2017.
 */
// НАХОЖДЕНИЕ ПРОСТЫХ ЧИСЕЛ .....
//
//
 function  reseto(n) {
     var newArr = [];
    gott:
     for ( var i=1; i < n; i++){
         if(i%2 ==0) continue;

         for(var j=2; j <i; j++) {
             if (i % j == 0) {
                 continue gott;
             }
              // newArr.push(i);

         }//end for J
         newArr.push(i);
     } // end for I
     return newArr;
 }


console.log(reseto(100));

/************************************************/
//* СУММА ПРОСТЫХ ЧИСЕЛ
// шаг 1
//var arr = [];

//for (var i = 2; i < 100; i++) {
//    arr[i] = true
//}

// шаг 2
//var p = 2;

//do {
    // шаг 3
//    for (i = 2 * p; i < 100; i += p) {
//        arr[i] = false;
//    }

    // шаг 4
//     for (i = p + 1; i < 100; i++) {
//         if (arr[i]) break;
//     }
//
//     p = i;
// } while (p * p < 100); // шаг 5

// шаг 6 (готово)
// посчитать сумму
// var sum = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//         sum += i;
//     }
// }
//
// alert( sum );