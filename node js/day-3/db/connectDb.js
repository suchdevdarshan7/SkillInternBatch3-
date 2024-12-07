const mongoose = require('mongoose');

async function connectDb() {
    await mongoose.connect(`mongodb://localhost:27017/google`)
    console.log('Mongo DB connected successfully!')
}

module.exports = connectDb;