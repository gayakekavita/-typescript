//Array
/*
  Array is collection of the elements which is of the same data type also in typescript array holds values of diffent data typescript
  Following are the three ways to define or create array:
    1. Using square bracket
       let arr:number[]= [1,2,3,4,5];
    2.using array constructor
       let arr2:number[]=new Array(2,4,5,32,23);
    3.using array method
      let arr3:string[]=Array.of('kavi','kavya',"kavyashri");


  Array index starts with 0 and ends with array.length-1;

  Creating array using key value pair
  where key works as index and values works as values present at that index 

  let obj={
  name:'kavi',
  id:10
  

  typeof:
    typeof operator is used to check type of a variable or object in typescript 

      synatx:
       typeof variable_name;

       ex:
         typeof num;
*/

//creating array using [] 
let arr:number[]= [1,2,3,4,5];
console.log(arr);

//creating array using array constructor
let arr2:number[]=new Array(2,4,5,32,23);
console.log(arr2);


//creating array using array method 
 let arr3:string[]=Array.of('kavi','kavya',"kavyashri");
console.log(arr3);

//acessing elements of array using its indexes
console.log(arr3[2]);

//creating array using key value pair
 let obj={
  name:'kavi',
  id:10
  };
console.log(obj);

//acessing elements of obj using key names of array
console.log(obj['name']);

let num=46;
console.log(typeof num);

