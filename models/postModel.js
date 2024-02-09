const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"blogs" 
            // reference to objectId in 'blogs' collections
        },
        post:{
            type:String,
            required:true
        },
        postedDate:{
            type:Date,
            default:Date.now
        }
    }
)

module.exports=mongoose.model("blogPosts",postSchema)