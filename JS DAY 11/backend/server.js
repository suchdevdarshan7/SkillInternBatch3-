const express = require('express');
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())


app.post('/form', (req, res) => {
    console.log(req.body)

    res.send('Data got ')
})


app.listen(3000, () => {
    console.log('The server is running in port 3000');
})
