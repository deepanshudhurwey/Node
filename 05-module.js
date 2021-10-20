//IIFE - immediate invoking function expression
// var result =  (function (){
//      return 5;
//  })();

 //module 
 var calculator = (function (){
     var add = function add(a,b){
         return a + b ;
     }
     var multi = function multi(a,b){
         return a * b ;

     }

     return {
         addition:add,
         multiplication: multi

     }
 })();

 console.log(calculator.addition(2,3))
 
 console.log(calculator.multiplication(2,3))
