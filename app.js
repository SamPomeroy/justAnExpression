const express = require('express')
const logger = require('morgan')
const indexRouter = require("./routes/index")
const todoRouter = require("./routes/todo")


const port = 3000

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use("/", indexRouter)
app.use("/api/todo/", todoRouter)

app.listen(port, ()=>{
    console.log(`server started port ${port}`)
})