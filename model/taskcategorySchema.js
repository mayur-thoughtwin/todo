const mongoose = require("mongoose");

const taskcategorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    delete_flag:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})
const taskcategoryModel = mongoose.model("taskcategory", taskcategorySchema);
module.exports = taskcategoryModel