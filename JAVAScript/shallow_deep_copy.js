// const l = require('lodash')
// const student ={
//     name:'Hemant',
//     age:'21',
//     date :{
//         year:2003,
//         month:9,
//         date:21
//     },
//     f:function(){
//         return this.name+" "+this.age;
//     }
// }

// console.log(student);
// // it is normal copy and its stored a refrence of first- obj.
// let obj=student;
// console.log(obj);

// obj.name='Harsh';
// // when we changed value in second obj then its also changed in first-obj.
// console.log(obj);
// console.log(student);

// -------- Shallow Copy ----------

    // Its copy a value for outer object but for nested object its copy its refrence.
    // Its copy only outer part of object(main object) instead of nested object.
    // Note - it is used for only single subject not for nested object.

    // let obj = Object.assign({},student);
    // obj.name='Harsh';
    // console.log(obj);
    // console.log(student);

    // ---- Shallow copy by Spread Operator(...) -------

    // let obj = {...student}
    // obj.name='Harsh';
    // obj.age='20';
    // console.log(obj);
    // console.log(student);

// -------- Deep Copy --------

    // Note - Its not copy any function. when function available in object.
    //  let obj = JSON.parse(JSON.stringify(student));
    //  obj.name="Harsh";
    //  obj.date.year=2006;
    //  obj.date.month=10;
    //  obj.date.date=17;

    //  console.log(obj);

    // Deep copy by lodash 
    // let obj = l.cloneDeep(student);
    // console.log(obj);