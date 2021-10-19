//---------normal function
var add = function(a,b){
return a+b;
}
console.log(add(2,2))

// -------self invoking anonymous function

var add = (function(a,b){
         console.log(a+b );
})(5,6);

//-----nested function
 function addtition(a){
     return function(b){
         var res =a+b
         console.log(res );
     }
 }

 addtition(2)(4)

 //-----------construstor function- construstor fumction has to be capital letter
 function Sum(a,b ){
     this.a = a;
     this.b =b;

 }

 const sum1 = new Sum(3,4)
 const sum1 = new Sum(6,4)
 
