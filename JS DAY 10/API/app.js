const container = document.querySelector('.container');

function renderContent(element) {
    const html = `
        <div class="box">
            <h1>${element.title}</h1>
            <img src=${element.image} alt="">
            <h3>${element.price}</h3>
            <p>${element.description}</p>
        </div>
    `

    container.innerHTML += html;
}

function getProducts() {
    fetch('https://fakestoreapi.com/products').then((data) => {
        return data.json();
    }).then((products) => {
        console.log(products)

        products.map((element) => {
            renderContent(element);
        })

    })
}

getProducts()