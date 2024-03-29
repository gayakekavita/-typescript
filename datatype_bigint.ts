//we use bigint datatype when the number range goes above 2**53 
let bignum1:bigint= 677897644534433n;
let bignum2:bigint= 667998776545433n;
console.log(" First Number: "+ bignum1);
console.log(" Second Number: " + bignum2);
console.log("Addition of numbers :" + (bignum1+bignum2));
console.log("Subtraction of numbers :" + (bignum1-bignum2));
console.log("Multiplication of numbers :" + (bignum1*bignum2));
console.log("Division of numbers :" + (bignum1/bignum2));
console.log("Remainder is: " + (bignum1%bignum2));
