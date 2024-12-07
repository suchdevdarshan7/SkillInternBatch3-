
const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === "GET") {
        res.end("HI this is your home page");
    }
    else {
        res.end("Page not found");
    }
})

server.listen(3000, () => {
    console.log('The server is running in port 3000')
})
