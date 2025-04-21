const Joi = require("joi");
const validateRequest=require("../middleware/validate_req")

// function login(req, res, next) {
//     const schema = Joi.object()
//         .keys({
//             // search: Joi.string().allow(null, '').required()
//             email: Joi.string().email().required(),
//             password: Joi.string().required()
//         });
//         validateRequest(req, res, next,schema)
   
// }

function addtask(req,res,next){
    const schema=Joi.object().keys({
        title:Joi.string().required().not().null().pattern(/\S/),
        description:Joi.string().required().not().null().pattern(/\S/)
    })
    validateRequest(req,res,next,schema)
}

function edittask(req, res, next) {
    const schema = Joi.object().keys({
        id: Joi.string().pattern(/\S/).required(), 
        title: Joi.string().pattern(/\S/).required(),
        description: Joi.string().pattern(/\S/).required()
    });
    validateRequest(req, res, next, schema);
}


module.exports = {
    addtask,edittask
};
