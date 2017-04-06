/**
 * Created by Игорь on 05.04.2017.
 */
//На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

//Задача – найти непрерывный подмассив arr, сумма элементов которого максимальна.

//Ваша функция должна возвращать только эту сумму.
function getMaxSubSum(arr) {
   var  maxS = 0;
    for (var i=0; i<arr.length; i++){
        var sumP = 0;
        for (var j=i; j < arr.length; j++) {
            sumP += arr[j];
            maxS = Math.max(maxS, sumP);
        };
    }
    return maxS;

}


console.log(getMaxSubSum([-1, 2, 3, -9]));// = 5 (сумма выделенных)
console.log(getMaxSubSum([2, -1, 2, 3, -9]));// = 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));// = 11
console.log(getMaxSubSum([-2, -1, 1, 2]));// = 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]));// = 100
//console.log(getMaxSubSum([1, 2, 3]));// = 6 (неотрицательные - берем всех)
// Если все элементы отрицательные, то не берём ни одного элемента и считаем сумму равной нулю:
//    getMaxSubSum([-1, -2, -3]) = 0
// Постарайтесь придумать решение, которое работает за O(n2), а лучше за O(n) операций.