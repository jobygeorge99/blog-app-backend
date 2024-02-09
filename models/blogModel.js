const mongoose = require("mongoose")

const blogSchema = mongoose.Schema(
    {
        name:String,
        age:String,
        phone:String,
        address:String,
        pincode:String,
        emailid:String,
        password:String
    }
)

module.exports=mongoose.model("blog",blogSchema)