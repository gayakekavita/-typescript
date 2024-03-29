//There are two types of parameters :
 /*
   1.Default parameters
       -Default parameters are the parameters  which if value of parameters is not passed at the time of function calling
        then it will not give error because while defining the function definition we alredy gave dafault value to the parameters   
         EX:
            function greet(name:string, id:number=1){
              //body of function 
            }
              Function call:
                  greet("kavi");
                  greet('kavita', 78);

                   -- above both function calls works perfectly
   2.Optional parameters

      - Optinal parameters are the parameters which if not passsed at the time of function calling it will not throw error
      - It works finely even if any parameter is not passed 
      - we declare optinal parameter using  '?' symbol after parameter_variable_name
   */


//Defining function with default parameters
function greet(name:string,id:number=1) {
     return `Hello ${name} and your id is: ${id}`;
}
let call1=greet('kavi');
let call2=greet("kavita", 20);
console.log(call1);
console.log(call2);

//defining function with optinal parameters

function greet2(name:string, id?:number)
{
    if(id)
    {
    return`Hello ${name} and your id is: ${id}`;
    }
    else
    {
        return `hello ${name}`;
    }
}

let funcall1=greet2("kavyashri");
let funcall2=greet2("kirti",70);
console.log(funcall1);
console.log(funcall2);





