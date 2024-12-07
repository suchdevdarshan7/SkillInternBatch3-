const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
    },
    PhoneNumber: {
        required: true,
        type: Number
    }
})

const UserModal = mongoose.model('UserModal', UserSchema)


module.exports = UserModal;