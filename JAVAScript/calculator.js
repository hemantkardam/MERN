const prompt =require('prompt-sync')()

//Parsefloat for convert string to float.
//ParseInt for convert string to Int.
const num1=parseFloat(prompt('Enter a num1 : '));
const num2=parseFloat(prompt('Enter a num2 : '));
const Operator=prompt('Enter a Operator : ');



// switch(Operator){
//     case '+':console.log(`num1+" " +Operator+" " num2 +" " + "="+"  "`);console.log(num1+num2);break;;
//     case '-':console.log(num1-num2);break;
//     case '*':console.log(num1*num2);break;        
//     case '/':console.log(num1/num2);break;
//     default:console.log("Invalid choice.");break;
// }
console.log(`$(num1) $(Operator) $(num2)` );