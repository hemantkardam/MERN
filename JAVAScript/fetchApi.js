fetch("https://dummyjson.com/products")
  .then((res) => {
    // console.log(prod);
    return res.json();
  })
  .then((prod) => {
    console.log(prod);
    const add = prod.products;
    let rows = "";
    add.forEach((product) => {
      rows += `<tr><td>${product.id}</td><td>${product.title}</td><td>${product.description}</td><td>${product.category}</td><td>${product.price}</td><td>${product.stock}</td><td>${product.rating}</td><td> <img src="${product.images}" style = "width:25% "/></td></tr>`;
    });
    document.getElementById("tableRows").innerHTML = rows;
  })
  .catch((error) => {
    console.log(error);
  });