//function 
//Is a block of code which gets executed when it is called and exexutes the tasks specified in it
//Following are the main operations related function:
    /*
       1.Function definition
       2.Passing arguments to function
       3. Specifying function return type
       4. Calling to function 
       
       Arguments : values which are passed inside of the parenthisis () at the time of function calling is called as "arguments"

       Parameters: values which are accessed at the function definition is called as parameters.
    */

//defining function with its return type.
//based on value returned by the function we define function return type 
function greet(name:string, id:number):string{
    return `Welcome ${name} at our office your id is ${id}`;
}
console.log(greet("kavi",1)); //function calling and passing parameters inside the () parenthisis

// creating arrow function 
//while creating arrow function there is no need to use function keyword

const greet1=(name:string, id:number)=>{
    return `Welcome dear ${name} at officeeee Your employee id is : ${id}`;
    
}



console.log(greet1('kavita',50));
//we can also return value of a function without writing return keyword inside the function definition.

const  greet2=(name:string,id:number)=> `hello ${name} and your id is :${id}`;
console.log(greet2('kavyashri',20));
