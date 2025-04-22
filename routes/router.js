const express = require("express");
const upload = require("../middleware/multer");
const { add_task, edit_task, assign_task } = require("../controller/todoController");
const router = express.Router();
const schema=require("../validate/validate");
const validate = require("../middleware/zodvaidate_req");
const {assign_taskValidate_zod}=require("../zodvalidate/zodvalidate")
const verifyToken = require("../middleware/jwt");

router.post("/add_task",upload.none(),validate() ,add_task)
router.post("/edit_task",upload.none(),schema.edittask ,edit_task)
// router.post("/assign_task",validate(assign_taskValidate_zod),verifyToken,assign_task)

module.exports={
    router
}