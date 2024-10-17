const prompt = require('prompt-sync')()
let num1=10;
let num2=20;

let con1 = num1>num2;
let con2 = num1<num2;
// console.log(con1 ||con2);
// console.log((con1 || con2)&& !(con1 && con2));

// console.log(3+4+"5"); // First its consider as a number until a string not enter in a submission.
// console.log(3*"A"); // NAN 
// console.log(3+4+"5"+5+7); // First its consider as a number until a string not enter in a submission and after string all number consider as a string. 
// console.log(3+"A"+4+7+"B"); // 3A47B


// Ternar operator
let a = prompt("Enter your age:");
(a>=18)?console.log("You can vote"):console.log("You can't vote");

// console.log();

