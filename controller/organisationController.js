const {messages}= require("../function/messages");
const { organisationModel } = require("../model/model");
const jwt = require("jsonwebtoken")
const setupOrganisation =async (req,res)=>{
    const {name,tagline,mobile,email,password}=req.body;
    try {
        const result = await organisationModel.findOne({
            name:name
        })
        if(result){
            return res.status(400).json({success:false, msg:messages.msgOrganisationAlreadyExist})
        }
        const otp=1234 
        const organisation = await organisationModel.create({
            name:name,
            tagline:tagline,
            mobile:mobile,
            email:email,
            password:password,
            otp:otp,

        })
        // integrate jwt 
        const token = jwt.sign({id:organisation._id},"secret",{expiresIn:"1h"})
        res.status(200).json({success:true, msg:messages.msgOrganisationAdded, token:token})

        res.status(200).json({success:true, msg:messages.msgOrganisationAdded, res:organisation})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, msg:messages.msgInternalServerError})
    }
}

const login =async (req,res)=>{
    const {email,password}=req.body;
    try {
        const result = await organisationModel.collection.findOne({
            email:email,
            password:password
        })
        if(!result){
            return res.status(400).json({success:false, msg:messages.msgInvalidEmailOrPassword})
        }
        // integrate jwt 
        const token = jwt.sign({id:result._id,name:result.name},"secret",{expiresIn:"1d"})
        res.status(200).json({success:true, msg:messages.msgLoginSuccess, token:token})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, msg:messages.msgInternalServerError})
    }
}

const getorganisationdetails =async (req,res)=>{ 
    const {_id}=req.user;
    try {
        const result = await organisationModel.findOne({
            id:_id
        })
        if(!result){
            return res.status(400).json({success:false, msg:messages.msgOrganisationNotFound})
        }
        const details = {
            id:result._id,
            name:result.name,
            tagline:result.tagline,
            mobile:result.mobile,
            email:result.email,
            created_at:result.createdAt
        }
        res.status(200).json({success:true, msg:messages.msgOrganisationDetails, company_details:details})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, msg:messages.msgInternalServerError})
    }
}

module.exports={
    setupOrganisation
    ,login
    ,getorganisationdetails
}

