const { ObjectId } = require('mongodb');
const { messages } = require("../function/messages");
const { todoModel } = require("../model/todoSchema");

const add_task = async (req, res) => {
    const { title, description } = req.body;

    try {
        const result = await todoModel.collection.insertOne({
            title: title,
            description: description,
        });
        res.status(200).json({ success: true, msg: messages.msgtaskAdded, res:result});

    } catch (error) {
        res.status(500).json({ msg: messages.msgInternalServerError, err: error.message });
    }
}

const edit_task = async (req,res) => {
    const {id,title,description}=req.body;
    try {
        const result= await todoModel.collection.updateOne(
            {_id: new ObjectId (id)},
            {
                $set:{title:title, description:description}
            }
        );
        res.status(200).json({
            success:true , msg:messages.msgtaskUpdate, res:result
        })
    } catch (error) {
        res.status(500).json({msg:messages.msgInternalServerError, err:error.message})
    }
}

module.exports = {
    add_task,
    edit_task
}
