const { getAllUser, createUser, updateUser, deleteUser } = require("../controllers/userController")
const express = require("express")
const router = express.Router()

router.get("/all-user", getAllUser)
router.post("/create-user", createUser)
router.put("/update-user/:id", updateUser)
router.delete("/delete-user/:id", deleteUser)

module.exports = router