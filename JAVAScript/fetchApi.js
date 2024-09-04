fetch('https://dummyjson.com/products').then((res)=>{
    // console.log(prod);
    return res.json()
}).then((prod)=>{
    console.log(prod);
})
.catch((error)=>{
    console.log(error);
})
    