const mongoose=require("mongoose")

const userSchema = mongoose.Schema({
    "name":String,
    "mobile":Number,
    "email":String,
    "gender":Number
})

module.exports={
    userSchema
}