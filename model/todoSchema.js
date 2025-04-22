const mongoose=require("mongoose")

const todoSchema=mongoose.Schema({
    creator_id:{
        type:String,
        required:true,
    },
    members:{
        type:[String],
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    task_status:{
        type:String,
        enum:["completed","incompleted"],
        default:"incompleted"
    },
    delete_flag:{
        type:Number,
        default:0
    },

},{
    timestamps:true
})


module.exports = mongoose.model("todo", todoSchema);