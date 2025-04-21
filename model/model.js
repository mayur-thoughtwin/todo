const mongoose=require("mongoose");
const { userSchema } = require("./userSchema");
const { todoSchema } = require("./todoSchema");
const { organisationSchemma } = require("./organisationSchema");

const UserModel=mongoose.model("user",userSchema)
const todoModel=mongoose.model("todo",todoSchema)
const organisationModel= mongoose.model("organisation",organisationSchemma)

module.exports={
    UserModel,
    todoModel,
    organisationModel
}