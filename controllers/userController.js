const users = require("../models/userModel")
const { v4: uuidv4 } = require("uuid")

// Get All Users
const getAllUser = (req, res) => {
    res.status(200).json({ users })
}

// Create a New User
const createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email
    }
    users.push(newUser)
    res.status(201).json(newUser)
}

// Update a User by ID
const updateUser = (req, res) => {
    const userId = req.params.id
    const { name, email } = req.body
    const user = users.find((user) => user.id === userId)
    if (!user) { 
        return res.status(404).send("User not found")
    }
    user.name = name || user.name
    user.email = email || user.email
    res.status(200).json(user)
}

// Delete a User by ID
const deleteUser = (req, res) => {
    const userId = req.params.id
    const index = users.findIndex((user) => user.id === userId)
    if (index === -1) {
        return res.status(404).send("User not found")
    }
    const deleteUser = users.splice(index, 1)
    res.status(200).json({
        message: "User deleted successfully",
        user: deleteUser[0]
    })
}

module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser
}