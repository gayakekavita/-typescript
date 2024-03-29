//when we use any data type in typescript it act as javacsript 
//where type of variable is not checked 
//we can assign different type values to the variable which is normally not allowed in typescript but because of 
//'any' data type it is possible in typescript also 

let num1:any=20;
console.log( "Original value of  num1 is : " +num1);
num1='kavi';
console.log( "Changed number value into string value :" +num1);
num1="kavita";
console.log("Changed number value into string value :" +num1);
num1=56.89;
console.log( " Assigning floating value to num1: "+ num1);

//when we use 'unknown ' data type in typescript then it enforces type checking in the future.
//initially it does not know about datatype of a variable.
// as it gets executed it will come to know the type of a variable data type .
let num2:unknown;
num2=10;
num2='kavi';
num2=true;
num2=67.78;
console.log(num2);
