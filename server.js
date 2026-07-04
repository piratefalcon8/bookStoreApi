const express = require("express")
const connectToDb = require("./database/db")
const bookRouter = require("./route/book-route")

const app = express()
app.use(express.json())
app.use("/api/book",bookRouter)

connectToDb()

const PORT = process.env.PORT || 4000

app.listen(PORT,() => {
    console.log(`Server listing on port ${PORT}`);
})
