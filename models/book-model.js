const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"book title is required"],
        trim:true,
        maxLength:[100,"book title should not exceed 100 character"],
    },
    author:{
        type:String,
        required:[true,"book author is required"],
        trim:true
    },
    year:{
        type:Number,
        require:[true,"book year is required"],
        min:[1000,"book year should be atleast 1000"],
        max:[new Date().getFullYear(),"book year should not be in the future"]
    }
},{timestamps:true})

module.exports = mongoose.model("Book",BookSchema)