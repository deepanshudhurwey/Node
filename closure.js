var clouser = function outer(){
    var count = 1;

    return function inner(){
        count += 1;
        console.log(count)
    }
}
();
clouser();
clouser()

//.......................
// var count = 0
// function inc(){
//     count += 1
//     return count
// }
// console.log(inc())

// console.log(inc())

// console.log(inc())
