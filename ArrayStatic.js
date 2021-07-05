//- static method from() to create same arry or copy-
let fruits =['Apple','Banana','MAngo']
console.log(fruits);
console.log(fruits[2]);

let fruitscopy = Array.from(fruits);
//let me = fruits.slice();
console.log(fruitscopy);

//--Array.isarray()---------------
let veggie =['Apple','Banana','MAngo']
var r = Array.isArray(veggie);
console.log(r);

//Array.of()-----------
let fruit =['Apple','Banana','MAngo']
var s = Array.of(fruit);
console.log("s", s);
console.log(fruit instanceof Array);
var p= fruit.keys();
console.log('p..',p);
//check array or boject-------------------
const emp = ["A","B","c"]
console.log(typeof emp);
console.log(emp instanceof Array);
console.log(Array.isArray(emp));

//-----------
var myarray = new Array();
console.log(myarray.constructor);