const add = function(a,b, callback){
    setTimeout(() => {
        console.log('2 mins delay')
        callback(a+b)
    }, 2000);
    
}
add(2,3,(cb)=>{
    console.log(cb)
    add(4,cb,(cb1)=>{
        console.log(cb1)
    })
})

