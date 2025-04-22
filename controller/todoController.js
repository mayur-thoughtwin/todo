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


// const assign_task = async (req,res) => {
//     const {id}=req.user;
//     const {}
// }
// const assign_task = async (req, res) => {
//     const { id } = req.user;
//     const { members, title, description } = req.body;

//     try {
//         // Check if a task with the same title already exists
//         const existingTask = await todoModel.findOne({ title });

//         if (!existingTask) {
//             return res.status(400).json({ success: false, msg: messages.msgtaskNotFound });
//         }

//         // Create a new task
//         const task = await todoModel.create({
//             creator_id: id,
//             members,
//             title,
//             description,
//         });

//         return res.status(201).json({ success: true, task });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, msg: messages.msgInternalServerError });
//     }
// };

module.exports = {
    add_task,
    edit_task,
    
}
