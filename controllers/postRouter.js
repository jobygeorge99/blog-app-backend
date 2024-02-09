const express = require("express")
const postModel = require("../models/postModel")
const router = express.Router()

router.post("/post",async(req,res)=>{
    let data = req.body
    let postModelObj = new postModel(data)
    let result = await postModelO
})