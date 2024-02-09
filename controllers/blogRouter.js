const express = require("express")
const blogModel = require("../models/blogModel")
const bcrypt = require("bcryptjs")

const router = express.Router()

hashPasswordGenerator = async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signUp",async(req,res)=>{
    //let data = req.body
    let {data}={"data":req.body}
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

router.post("/signIn",async(req,res)=>{
    let data = req.body
    let emailId = req.body.emailid
    let result = await blogModel.findOne({"emailid":emailId}) 
    if (!result) {
        return res.json({
            "status":"invalid username"
        })
        
    } 
    console.log(data)
    let dbPassword = result.password
    let inputPassword = req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    
    const match= await bcrypt.compare(inputPassword,dbPassword)
    if (!match) {
        return res.json(
            {
                "status":"invalid password"
            }
        )
    }

    res.json(
      {
          "status":"success"
      }
    )
  })

module.exports = router