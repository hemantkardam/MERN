const { forEach } = require("lodash");


// Boolean
let isPresent = true;

let isLoggedIn = false;

// Math

let num =11.51;
// console.log(Math.random()); 
// console.log(Math.pow(2,3)); // Ans -- 8
// console.log(Math.sqrt(16)); // Ans -- 4
// console.log(Math.abs(num));    // Ans -- 10 only positive integer.
// console.log(Math.floor(num));  // Ans -- 10 
// console.log(Math.ceil(num));   // Ans -- 11
// console.log(Math.round(num));  // Ans -- round figure acc to decimal value
// console.log(Math.trunc(num));
// console.log(Math.sign(num));   // Ans -- check positive or negative number when no positive it give 1 and negative gives -1. 

// console.log(num);

// let n = Math.random();
// console.log(Math.round(n*10));  


// Array

// let arr = new Array(10);
// for (let index = 0; index < arr.length; index++) { 
//        arr[index]=(index+1)*(1*5);
// }
// console.log(arr);

// toUppercase
// let a = "harry";
// let s = num.toString();
// console.log(typeof(num));
// console.log(typeof(s));
// console.log(a.toLocaleUpperCase());
 

let num1= 100;
let con = num1.toString();
console.log(con.padStart(12,"#"));