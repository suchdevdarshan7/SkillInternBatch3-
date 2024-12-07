const UserModal = require('../model/user.modal.js')

const getAllUsers = async (req, res, next) => {

    const data = await UserModal.find({}, {});

    res.status(200).json({ status: "Success", users: data })

}

const addNewUser = async (req, res, next) => {

}

module.exports = { getAllUsers, addNewUser }