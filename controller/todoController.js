
const { messages } = require("../function/messages");
const { todoModel } = require("../model/model");

const add_task = async (req, res) => {
    const { title, description } = req.body;

    try {

        const result = await todoModel.collection.insertOne({
            title: title,
            description: description,
        });

        res.status(200).json({ success: true, msg: messages.msgtaskAdded, res:result["description"]});

    } catch (error) {
        res.status(500).json({ msg: messages.msgInternalServerError, err: error.message });
    }
}

module.exports = {
    add_task
}
