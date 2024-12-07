const http = require('http');

const products = [
    {
        id: 1,
        products: "Apple iphone 16 pro max"
    },

    {
        id: 2,
        products: "Apple Laptop"
    },
    {
        id: 3,
        products: "Lenovo Laptop"
    },
    {
        id: 4,
        products: "Logitech mechanical keyboard"
    }
]

const ConvertProducts = JSON.stringify(products)

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === "GET") {
        res.end(`<h1 style="background-color: red">Home page is working</h1>`)
    }
    else if (req.url === '/' && req.method === `POST`) {
        res.end(`<h1 style="background-color: blue"> This is post method</h1>`)
    }

    else if (req.url === '/products' && req.method === "GET") {
        res.end(ConvertProducts)
    }
})

server.listen(3000, () => {
    console.log('The server is running in port 3000')
})


