const express = require("express");
const upload = require("../middleware/multer");
const { add_task, edit_task } = require("../controller/todoController");
const router = express.Router();
const schema=require("../validate/validate");
const validate = require("../middleware/zodvaidate_req");
const add_taskValidate = require("../zodvalidate/zodvalidate");

router.post("/add_task",upload.none(),validate(add_taskValidate) ,add_task)
router.post("/edit_task",upload.none(),schema.edittask ,edit_task)

module.exports={
    router
}