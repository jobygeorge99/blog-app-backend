const express = require("express")
const postModel = require("../models/postModel")
const router = express.Router()

router.post("/add",async(req,res)=>{
    let data = req.body
    let postModelObj = new postModel(data)
    let result = await postModelObj.save()
    res.json(
        {
            "status":"success"
        }
    )
})

router.get("/viewAll",async (req,res)=>{
    let result = await postModel.find()
    .populate("userid","name age phone -_id")
    .exec()
    res.json(result)
})

module.exports=router