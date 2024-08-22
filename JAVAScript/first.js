// var info="Hemant";

// a=7;
// var number=21;
// console.log("Hemant")
// console.log(info)
// console.log(number)
// console.log(a)


// console.log("clg Command for shortend.")
// console.log("click clg then enter and console.log is enter")


// var n="Hemant";
// var n="rahul";
// console.log(n)

// let a=2;
// var s=2;
// var s="redeclare";
// const l=5;

// console.log(a)
// console.log(s)
// console.log(l)

// Before 2015 only one variable has a Char. in ECMA Script(ES)-5th version. ECMA - European Computer Manufacturers Association. 

//Re-declaration - to declare same variable again and again.
//Re-assignment - to assign a value again in a variable.

//After 2015 in ECMA  (ES-6th)version  introduce two new variable let & Const.

// Imp question for interview- Difference b/w let ,Char and const.

// with Var, we can redeclare and reassign. 
// with Let, we cannot  redeclare a variable, but can reassign value in it. 
// with const, we can neither redeclare or reassign a value in it. 

//Data type - string, number, date, boolean, array, object null, undefined.

// 1. string - set of Characters. It is a immutable data type
        // let name="Harry"
        // let name1='Harsh'
        // let name2=`Hemant`

        //typeof(variable_name) - For a check the datatype of variable.

        // Method of strings
        // str.length - to find a lenght of string.
        // variable_name.trim() - for remove both starting & endingunusual space.
        // variable_name.trimStart() - for remove starting unusual space.
        // variable_name.trimEnd() - for remove ending unusual space.
        // variable_name.slice(starting_index,ending_index+1) - For select & access a some word,letter & sentence by indexing or slice.
        // variable_name.toUpperCase() - for uppercase .
        // variable_name.toUpperLocalCase() - for uppercase .
        // variable_name.toLowerCase() - for Lower case .
        // variable_name.toLowerLocalCase() - for Lower case .
        // variable_name.replace('original_word','replacing_word') - for replacing word .
        // variable_name.replaceAll('original_word','replacing_word') - for all repetitive word replacing.
        // variable_name.replaceAll(/originalWord/gi,'replacing_word') - for insenstive .
        // variable_name.includes('word') - for check the avaiable in sentence or not.
        // variable_name.charAt(indexing_no) - for checking a which charcter store on its indexing.
        // variable_name.split(where you want split it) - to split a word letter etc.
        // variable_name.concat(second_variable_name,third_variable_name) - for adding all strings in one variable. 
        
// 2. Array - array is datatype which stored any datatype values in it.
        // Initialize - let variable_name = [value,value,value];
        
//--------- Operators -------------------------

        // Mathametical/Arithematic - addition(+) Subtraction(-) etc.
        // Logical - && , || etc.
        // Unary - ++ , -- etc.
        // Comparison - == , === , != etc.
        // let a=11;let b="11";
        // console.log(a==b) //Gives Boolean Values.

//Functions 

    // normal function
    // function show(){
    //     console.log("function run ");
    // }

    // show();

    //Arrow function
    //In this a syntax for arrow function is let,var & const function_name = () = >{code} 
    //      ()=>{
    //          program
    //      }
    // then create a function name like a variable.
    //  const func = 
    //  then add the arrow  function in it.
    //
    //  const func = () =>{
    //         program
    //      }
    // Example - 
        // const func = ()=>{
        //     console.log("Arrow function run")
        // }
        // func();

// Node package Manager - npm
//command for installing prompt sync - npm i or install promt-sync


// let userDetail = prompt('Enter a name :')
// const upper= userDetail.toUpperCase()
// console.log(upper)

// console.log("Hello world!")
// const prompt = require('prompt-sync')()


// let a= prompt('Enter your age :');
// let a=5;
// if(a>=18){
//         console.log("You are eligible for voting.");
// }
// else if(a<=0){
//         console.log("First you born.");
// }
// else{
//         console.log("You are not eligible for voting.");
// }
