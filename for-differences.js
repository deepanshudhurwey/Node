//for , for in - gonna give you index 

const arr = ['a', 'b', 'c'];

for (let i = 0; i < arr.length; ++i) {
  console.log(i,arr[i]);
}

for (let i in arr) {
  console.log(i,arr[i]);
}

//foreach , for of is going to give you value
arr.forEach((v, i) => console.log(v));

for (const v of arr) {
  console.log(v);
}
