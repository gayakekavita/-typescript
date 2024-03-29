//Array methods
/*
  following are the methods which are used to do manipulation in array:
    1.pop()
       used to delete the element at the end of the array.

    2.push()
      used to push element at the end of the array

    3.shift()
      used to delete the element of an array at start of the array

    4.unshift()
      used to add element at start of the array

    5.reverse()
      used to reverse the array

    6. sort()
      used to sort the array

    7. length
      used to find length of array

    8. splice(start index, end index)

       In TypeScript, the `splice()` method is used to modify an array by removing or replacing elements starting from the specified start index up to (but not including) the specified end index.


 following are the some ways to iterating the array
      1. using simple for loop

      2. using for of loop

      3. using for Each loop
       
       */



let arr:number[]=[2,4,5,7,8,8];
console.log("original array:" +arr);
console.log("deleted element at last is:" + arr.pop());
arr.push(90)
console.log("added element at last :" + arr);

console.log("deleted element at start of array " + arr.shift());
arr.unshift(80);
console.log("added element at start of the array " +arr);

console.log("length of array: " + arr.length);

arr.unshift(2,56);
console.log("adding element in array at specified index : " + arr);

console.log("deleting element of an array from specified index: " + arr.splice(2, 1)); //it deletes element at index 2
console.log(arr);
console.log("reversing the array : " +arr.reverse());

console.log("sorting the array: " + arr.sort());



//iterating array using simple for loop
console.log();
console.log("iterating array using simple for loop");
for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }

//iterating array through using for of loop
console.log();
console.log("iterating array through using for of loop");
for (let item of arr)
    {
        console.log(item);
    }

//iterating through foreach loop

console.log();
console.log("iterating through foreach loop");
arr.forEach((value)=>{
    console.log(value);
})
