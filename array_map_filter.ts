const numbers: number[] = [3, 4, 5, 3, 65, 75, 767];
console.log(numbers);
const newarr = numbers.map((elem) => elem.toString());

console.log(newarr);



console.log(numbers);
const newarr1 = numbers.filter((elem) => elem > 3);

console.log(newarr1);

const newarr2 = numbers.filter((elem) => elem % 2 == 0);

console.log(newarr2);
