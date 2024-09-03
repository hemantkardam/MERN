// It performes eventual Task.
// new - constructor keyword to create obj.
// promise - is a object.
// syntax - new Promise(function(resolve,reject){
//              //code
//          })
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // console.log("Namaste Duniya");
//         // resolve({name:"harsh"});
//         // reject({Result : "error occurred"});
//     },3000)
// })

// .then((finised)=>{
//     console.log(finised);
// })
// .catch((error)=>{
//     console.log(error);
// })

// let promiseCreate = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         let err = false;
//         if(!err){
//             resolve({name :"Harry" , Age : 21});
//             // console.log({name :"Harry" , Age : 21});
//         }else{
//             reject('error');
//             // console.log('error');
//         }
//     },3000)
// })


// promiseCreate.then((username)=>{
//     console.log(username);
//     return username.name;
// }).then((name)=>{
//     console.log(name);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("run always");
// })
