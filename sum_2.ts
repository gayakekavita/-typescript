function sum(a:number,b:number):number
{
    return a+b;
}
console.log(sum(10,5));
//below statement will throw error because in function definition we defined that variable 'a' and 'b' is  of number typeof
//so we cannot pass string value while calling to sum function
//console.log(sum(10,"kavi"));
