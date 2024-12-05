const { v4: uuidv4 } = require("uuid")
const users = [
    {
        id: uuidv4(),
        name: "Touhiduzzaman Pavel",
        email: "touhid.pavel.dev@gmail.com"
    },
    {
        id: uuidv4(),
        name: "Tariquzzaman Tapon",
        email: "tariquzzaman.tapon@gmail.com"
    },
    {
        id: uuidv4(),
        name: "Kaniz Fatema",
        email: "kaniz3112@gmail.com"
    }
]

module.exports = users