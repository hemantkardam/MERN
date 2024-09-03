const prompt=require('prompt-sync')()

// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);


// For find the lenght of array.
// console.log(arr.length);



// For add value in last indexing of array use push method.
// arr.push("Delete");
// console.log(arr);

// For remove value from the last indexing in array is use pop method.
// arr.pop();
// console.log(arr);

// For add value in First indexing of array use push method.
// arr.unshift("Hey");
// console.log(arr);

// For remove value from the First indexing in array is use pop method.
// arr.shift();
// console.log(arr);

// For cut the element from array and store in other variable  use slice method.
// create variable variable_name = array_name.slice(starting index,Laste index + 1)
// const sliced = arr.slice(2,4);
// console.log(sliced);
// console.log(arr);

//
// array_name.splice(starting indexing , no of elements wants to remove , what you want to add value);
// arr.splice(3,2,"hemant");
// console.log(arr);

// When you want only insert value in between arrays.
// arr.splice(3,0,4,5);
// console.log(arr);

// For sorting the array, use array_name.sort() method. for only when all value has single digits (0 to 9) or only when all value has double digits (11 to 99) means all value has same like single,double digits but when its mixed array not sort.

    // Array sorted
    // let arr =[2,6,3,7,2,1,4,7,8,9];
    // arr.sort();
    // console.log(arr);

    // Array sorted
    // let arr =[22,63,34,75,26,21,34,57,68,69];
    // arr.sort();
    // console.log(arr);

    // Array not sorted
    // let arr =[222,63,4,75,26,21,334,57,8,69];
    // arr.sort();
    // console.log(arr);
    
// For join arrays like in onle line and join with symbol use join method.

    // let arr =[222,63,4,75,26,21,334,57,8,69];
    // const newarr = arr.join('-');
    // console.log(newarr);
    // console.log(arr);
    // Answer :- 222-63-4-75-26-21-334-57-8-69.

// 2-D array 

    // let a = [[1,2],[2,4]];
    // console.log(a);

// Call Back function - when you used function inside the function like function(another_function).
        // array.forEach(() => {
        //    //code 
        // });

// foreach method - used for iterate each value of array.
// syntax - variable_name.foreach( ("value_parameters","indexing_parameters")=>{ code })
    // let arr= [1,2,3,4,5];
    // arr.forEach((value)=>{
    //         console.log(value);
    // })
    
// Map method - used for iterate each value of array.
// syntax - variable_name.map( ("value_parameters","indexing_parameters")=>{ code })
    // let arr= [1,2,3,4,5,6];
    // const a = arr.map((value)=>{
    //     return value;
    // })
    // console.log(a);