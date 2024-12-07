const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())

const products = [
    {
        id: 1,
        name: "Apple Iphone"
    },
    {
        id: 2,
        name: "Oppo Phone"
    },
    {
        id: 3,
        name: "Chocolate"
    }
]


app.get('/products', (req, res, next) => {
    res.status(200).json({ status: "success", data: products })
})

app.post('/products', (req, res) => {

    const data = req.body;
    const keys = Object.keys(data);


    const findProducts = products.find((el) => {
        el.name === data.name;
    })

    const check = keys.includes('name');



    if (check) {
        const product = products.push({ id: products.length + 1, name: req.body.name })
        return res.status(201).json({ status: "success", name: req.body.name })
    }
    else {
        return res.status(404).json({ status: "failed", message: "The body does not consists name key !" })
    }

})


app.listen(3000, () => {
    console.log('The server is running port 3000')
})

