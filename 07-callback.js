const divide = function(a, b, cbfn){
    setTimeout(() => {
        try{
            if(b==0){
                throw "b can not be 0, pls change b";
            }
            cbfn(null,a/b)
        }
        catch(err){
            cbfn(err,null)
        }
    }, 1000);
}
divide(10,2,(err,res)=>{
    if(err){
        console.log("error :",+err);
        return;
    }
    console.log(res)
});
