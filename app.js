const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const router = require("./routes/userRoute")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})

app.use("/api", router)

// 404 Error Handle
app.use((req, res) => {
    res.status(404).send("Bad URL Request: Page Not Found")
})

module.exports = app