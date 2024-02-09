const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const blogRouter = require("./controllers/blogRouter")
const postRouter = require("./controllers/postRouter")

//alias
const app = express()

//middleware
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://jobydb:joby123@cluster0.czhpkmp.mongodb.net/blogDB?retryWrites=true&w=majority")

app.use("/api/blog",blogRouter)
app.use("/api/post",postRouter)

app.listen("3001",()=>{
    console.log("server started")
})