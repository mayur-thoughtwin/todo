const mongoose=require("mongoose");
const { userSchema } = require("./userSchema");
const { todoSchema } = require("./todoSchema");

const UserModel=mongoose.model("user",userSchema)
const todoModel=mongoose.model("todo",todoSchema)

module.exports={
    UserModel,
    todoModel
}