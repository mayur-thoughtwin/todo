const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"],
        maxlength: [15, "Name can't exceed 50 characters"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
        maxlength: [20, "Password can't exceed 20 characters"]
    },
    role: {
        type: String,
        enum: ["manager", "developer"],
        default: "developer"
    },
    mobile: {
        type: Number,
        required: [true, "Mobile number is required"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    organisation_id: {
        type: String,
        maxlength: [30 , "Organisation name can't exceed 100 characters"]
    },
    image: {
        type: String,
    },
    otp: {
        type: Number
    },
    otp_verified: {
        type: Number,
        default: 0
    },
    active_flag: {
        type: Number,
        default: 1
    },
    delete_flag: {
        type: Number,
        default: 0
    },
},{
    timestamps:true
});

const userModel = mongoose.model("user", userSchema);
module.exports = {
    userModel
}
