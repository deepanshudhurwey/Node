for (let i = 0; i < arr.length; ++i)
arr.forEach((v, i) => { /* ... */ })
for (let i in arr)
for (const v of arr)

//maps are not object
maps -
  foreach - is used to get the values first. it is a mordern way to iterate through the array. only give you value
  for of - is give you key first then value



var mymap = new Map();
mymap.set(0,"ram")
mymap.set(1,"shyam")
mymap.set(2,"peter")
mymap.set(3,"kira")
mymap.set(4,"adi")

console.log(mymap)

for (let key of mymap.keys()){
   // console.log(`key is ${key}`)
}

for (let value of mymap.values()){
   // console.log(`value is ${value}`)
}

for (let [key,value] of mymap){
    console.log(`key is ${key} value is ${value}`)
}
