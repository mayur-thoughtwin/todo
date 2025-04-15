const express = require("express");
const upload = require("../middleware/multer");
const { add_task } = require("../controller/todoController");
const router = express.Router();


router.post("/add_task",upload.none(),add_task)
module.exports={
    router
}