type Student = {
  name: string;
  age: number;
  greet: (country: string) => string; //call signature
};

const student1: Student = {
  name: "kavya",
  age: 20,
  //implementing call signatures 
  greet: (country): string =>
    `Welcome my name is ${student1.name} and my age is ${student1.age} , I am from ${country}`,
};
const student2: Student = {
  name: "kaya",
  age: 21,
  greet: (country): string =>
    `Welcome my name is ${student2.name} and my age is ${student2.age} , I am from ${country}`,
};

console.log(student1.greet("India")); //call to signatures
console.log(student2.greet("Nepal"));// call to signatures 
