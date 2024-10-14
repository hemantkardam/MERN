const prompt = require('prompt-sync')()
let a = Math.random();


const func = (a,b,c,opr)=>{
    if(a<0.1){
        // switch(opr){
        //     case '+':console.log(b+c);break;
        //     case '-':console.log(b-c);break;
        //     case '*':console.log(b*c);break;
        //     case '/':console.log(b/c);break;
        // }
        
        
        if(opr == '+'){
           console.log(c+b);
        }
        else if(opr=='-'){
            console.log(c-b);
        }
        else if(opr=='*'){
            console.log(c*b);
        }
        else if(opr=='/'){
            console.log(c/b);
        }
        else {
            console.log("wrong choice");
        }
    }

    else if(a>0.1){
        // switch(opr){
        //     case '+':console.log(b-c);break;
        //     case '-':console.log(b/c);break;
        //     case '*':console.log(b+c);break;
        //     case '/':console.log(b**c);break;
        // }
        if(opr == '+'){
            console.log(c-b);
        }
        else if(opr=='-'){
            console.log(c/b);
        }
        else if(opr=='*'){
            console.log(c+b);
        }
        else if(opr=='/'){
            console.log(c*b);
        }
        else {
            console.log("wrong choice");
        }
    }
}
let  b=prompt("Enter a first number :");
let  c = prompt("Enter a second number :");
let opr=prompt("Enter a Operation '+' , '-' , '*' , '/' :");
console.log(a);
func(a,b,c,opr);
console.log(typeof b,typeof c,typeof opr);
