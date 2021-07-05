
//--entries()----------------------
let fruits =['Apple','Banana','MAngo']
var r = fruits.entries();

var s = fruits.keys();
console.log('result',r,s);

console.log (r.next().value);
console.log (r.next().value);
console.log (r.next().value);





for (const [index,element] of fruits.entries()){
    console.log('element',element);
}
//copywithin()-----------------
let veggie =['Apple','Banana','MAngo']
var veg = veggie.fill("k");
console.log(veg);
console.log(veggie);