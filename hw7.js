var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = [];
for (var i = 0; i < arr.length; i++) {
    arrSorted[i] = arr[i];

}

 arrSorted.sort(function (a,b) {
    return a.length - b.length;
});

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)




