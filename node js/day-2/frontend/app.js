const container = document.querySelector('.container')
function renderContent(data) {
    const html = `
    <li>${data.name}</li>
    `

    container.innerHTML += html;
}

async function getProducts() {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();

    products.data.map((el) => {
        renderContent(el)
    })
}