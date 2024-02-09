const express = require("express")
const blogModel = require("../models/blogModel")
const bcrypt = require("bcryptjs")

const router = express.Router()

hashPasswordGenerator = async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signUp",async(req,res)=>{
    let data = req.body
    //let {data}={"data":req.body}
    let password = data.password

    hashPasswordGenerator(password).then((hashedPassword)=>{
        console.log(hashedPassword)
        data.password=hashedPassword
        console.log(data)

        let blogModelObj = new blogModel(data)
        let result = blogModelObj.save()
        res.json({
            "status":"success"
        })
    })

})

//router.post("sign_in",async(req,res))

module.exports = router