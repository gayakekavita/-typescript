const person: {
  //defining the object properties type
  name: string;
  isStudent: boolean;
  age: number;
  address: {
    city: string;
    country: string;
  };
} = {
  //defining object properites with theire values
  name: "kavya",
  isStudent: true,
  age: 20,
  address: {
    city: "Pune",
    country: "India",
  },
};

console.log(person);
console.log("after updating the value of city:");
person.address.city = "katrad";
console.log(person);

console.log(`Name is: ${person.name}`);
console.log(`Age is : ${person.age}`);
console.log(`Student ${person.isStudent ? "yes" : "no"}`);
console.log(
  `From ${person.address.city} and Living in ${person.address.country} `
);
