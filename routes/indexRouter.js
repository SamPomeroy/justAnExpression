const express = require('express')
const router = express.Router()

router.get("/", (req, res)=>{
    // res.end("Welcome to my app")
    res.json({message: "welcome to my app"})
})

module.exports = router