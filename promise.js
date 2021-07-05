//..............................................................
function sum(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(a+b)
        }, 2000)
        
    })
}

sum(2,7).then((total)=>{
    console.log(total)
}).catch((error)=>{
    console.log(error)
})




