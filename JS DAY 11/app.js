
// async function getProducts() {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();

//     console.log(data);
// }

// getProducts()

// const container = document.querySelector('.container');


// function renderContent(element) {
//     const html = `
//     <div class="box">
//         <h1>${element.name}</h1>
//     </div>`

//     container.innerHTML += html;

// }

// async function getPhotos() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);



//     data.map((element) => {

//         renderContent(element);



//     })


// }

// getPhotos()


// ! Promise Chaining :

// fetch().then((res) => res.json()).then((data) => console.log(data))