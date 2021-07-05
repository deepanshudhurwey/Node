const mydata = [1,2,3,4,4,4,5]
var res = Array.isArray(mydata)
//console.log(res)

var copy = Array.from(mydata)
//console.log(copy,   Array.isArray(copy))

var ofres = Array.of(mydata)
//console.log(ofres, Array.isArray(ofres))

var strng = Array.toString(mydata)
//console.log(strng, Array.isArray(strng))

//-----------------------------------------------------
const data = ['ram','sia','lucky','john']
var len = data.length
console.log(len, data.entries())

for (const [index,element] of data.entries()){
    //console.log(element);
}
data.forEach((items)=>{
    console.log(items)
})
//console.log(data.pop())
data.find((item,index,next)=>{
    if(item ==='sia')
console.log(true)
})
