const express = require('express')
const app = express();
const userRouter = require('./routes/users.routes.js')
const connectDB = require('./db/connectDb.js');
const port = 3000;

app.use('/users', userRouter);


app.listen(port, () => {
    console.log('The server is running in port 3000')
})


connectDB();