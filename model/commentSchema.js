const mongoose= require("mongoose");

const commentSchema = new mongoose.Schema({
    task_id:{
        type:String,
        required:true,
    },
    user_id:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    delete_flag:{
        type:Number,
        default:0
    },

},{
    timestamps: true
})
const commentModel = mongoose.model("comment", commentSchema);
module.exports = commentModel;