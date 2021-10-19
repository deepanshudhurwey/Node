//-------------------------------static array methods

var mynumbers = [5,10,15,20]// associative object
console.log(typeof(mynumbers))//onject
console.log(Array.isArray(mynumbers))//true
console.log(Array.of(mynumbers))//[[5,10,15,20]]
console.log(Array.from(mynumbers))//[5,10,15,20]
console.log(mynumbers, mynumbers.length)

// --------------------------------array basic methods
const odds = [1,3,2,5,7,9]
odds.push(11)
console.log(odds)
odds.pop()
console.log(odds)

//---
odds.unshift(13)
console.log(odds)
odds.splice(odds[2],1)
console.log(odds)

//--------------------------iterate element in array

odds.forEach(num => {
   // console.log(num)
});

for (const data of odds) {
   // console.log(data)
}

for (const key in odds){ 
   console.log(odds[key])
}

// -----accessing array value with key and entities methood
let fruits =['Apple','Banana','MAngo']
var r = fruits.entries();
var s = fruits.keys();
console.log('result',r,s);

console.log (r.next().value);
console.log (r.next().value);
console.log (r.next().value);



