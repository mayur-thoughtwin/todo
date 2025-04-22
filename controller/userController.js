const { messages } = require("../function/messages");
const bcrypt = require("bcrypt");
const { userModel } = require("../model/userSchema");
const jwt = require("jsonwebtoken");

const userSignup = async (req, res) => {
    const { name, password, role, mobile, email, organisation_id } = req.body;
    try {
        // check if user is already exist or not 
        const result = await userModel.findOne({
            email: email
        })
        if (result) {
            res.status(400).json({ success: false, msg: messages.msgUserAlreadyExist })
        }
        else {
            const otp = 1234;
            const result = await userModel.create({
                name: name,
                password: password,
                role: role,
                mobile: mobile,
                email: email,
                organisation_id: organisation_id,
                otp: otp
            })
            // jwt token
            const token = jwt.sign({ "id": result._id }, "secret", { expiresIn: "1d" })
            await result.save();
            res.status(200).json({ success: true, msg: messages.otpSent, data: result, token: token })
        }
    } catch (error) {
        res.status(500).json({ success: false, msg: messages.msgInternalServerError })
    }
}

const otp_verify = async (req, res) => {
    const { id } = req.user;
    const { otp } = req.body;

    try {
        if (!otp) {
            return res.status(400).json({ success: false, msg: messages.msgOtpRequired });
        }

        const result = await userModel.findOne({ _id: id, otp });

        if (!result) {
            return res.status(400).json({ success: false, msg: messages.otpntoVerified });
        }

        await userModel.updateOne(
            { _id: id },
            { $set: { otp_verified: true } }
        );

        return res.status(200).json({ success: true, msg: messages.otpVerified });

    } catch (error) {
        console.error("OTP Verify Error:", error);
        return res.status(500).json({ success: false, msg: messages.msgInternalServerError });
    }
};

const userlogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await userModel.findOne({
            email: email,
            password: password
        })
        if (result) {
            const token = jwt.sign({ "id": result._id }, "secret", { expiresIn: "1d" })
            res.status(200).json({ success: true, msg: messages.msgUserDetails, token: token })
        }
        else {
            res.status(400).json({ success: false, msg: messages.msgInvalidEmailOrPassword })
        }
    } catch (error) {
        res.status(500).json({ success: false, msg: messages.msgInternalServerError })
    }
}

const getUserDetails = async (req, res) => {
    const { id } = req.user;
    try {
        const result = await userModel.findOne({ _id: id });
        if (!result) {
            return res.status(400).json({ success: false, msg: messages.msgUserNotFound });
        }
        res.status(200).json({ success: true, msg: messages.msgUserDetails, data: result });
    } catch (error) {
        res.status(500).json({ success: false, msg: messages.msgInternalServerError });
    }
}

const userUpdate = async (req, res) => {
    const { id } = req.user;
    const { name, role, mobile } = req.body;
    const image = req.file ? req.file.path : null;

    try {
        const result = await userModel.findOneAndUpdate(
            { _id: id },
            { name, role, mobile, image },
            { new: true } 
        );

        if (!result) {
            return res.status(400).json({ success: false, msg: messages.msgUserNotFound });
        }

        res.status(200).json({ success: true, msg: messages.msgUserUpdate, data: result });
    } catch (error) {
        res.status(500).json({ success: false, msg: messages.msgInternalServerError });
    }
}

const userDelete = async (req, res) => {
    const { id } = req.user;
    try {
        const result = await userModel.findOneAndUpdate(
            { _id: id },
            { $set: { delete_flag: 1 } },
            { new: true }
        );
        if (!result) {
            return res.status(400).json({ success: false, msg: messages.msgUserNotFound });
        }
        res.status(200).json({ success: true, msg: messages.msgUserDelete });
}
    catch (error) {
        res.status(500).json({ success: false, msg: messages.msgInternalServerError });
    }
}



module.exports = {
    userSignup,
    otp_verify,
    userlogin,
    getUserDetails,
    userUpdate,
    userDelete

}