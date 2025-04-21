const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"],
        maxlength: [15, "Name can't exceed 50 characters"]
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
    organisation: {
        type: String,
        maxlength: [30 , "Organisation name can't exceed 100 characters"]
    }
});

module.exports = {
    userSchema
};
