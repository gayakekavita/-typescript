let istrue:boolean= true;
let hasstarted:boolean= false;
function isdivisibleby4(a:number):boolean{
    return a%4==0;
}
console.log( "is the given number is divisible by 4 or not: " +isdivisibleby4(8));
console.log(istrue);
console.log(hasstarted);

function isdivisibleby4and8(a:number):boolean{
    return a%4==0 && a%8==0;
}

console.log("Is the given number is divisible by 4 and 8 ? "+ isdivisibleby4and8(8));
console.log("Is the given number is divisible by 4 and 8 ? "+ isdivisibleby4and8(12));
