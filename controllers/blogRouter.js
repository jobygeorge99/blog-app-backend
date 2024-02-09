const express = require("express")
const blogModel = require("../models/blogModel")

const router = express.Router()



router.post("/signIn",async(req,res)=>{
    let data = req.body
    let blogModelObj = new blogModel(data)
    let result = await blogModelObj.save()
    res.json({
        "status":"success"
    })
})

module.exports = router