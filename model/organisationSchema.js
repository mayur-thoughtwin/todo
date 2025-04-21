const { required } = require("joi")
const mongoose = require("mongoose")

const organisationSchemma = new mongoose.Schema({
    name: {
        type: String,
        required: [true],
    },
    tagline: {
        type: String,
        required: [true],
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: [true],
        unique: true
    },
    password: {
        type: String,
        required: [true],
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
    }

}, {
    timestamps: true
})
module.exports = {
    organisationSchemma
}