const add = function(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           // console.log('2 min delay')
            resolve(a+b)
        }, 200);
    })
}

const task = async()=>{
    const sums = await  add(1,2)
    const sum1 = await add(sums,3)
    const sum2 = await add(sum1, 6)
    return sum2
}

task().then((sum)=>{
    console.log(sum)
}).catch((err)=>{
    console.log(err)
})

// sum(1,2).then((res)=>
// {
//     console.log(res)
//     sum(3,res).then((res)=>
//     {
//         console.log(res)
//     }).catch((e)=>{
//         console.log(e)
//     })
// })
// .catch((e)=>{
//     console.log(e)
// })

//------------- Async/Await
