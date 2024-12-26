const TodoSchema = require('../models/todo.js');

const updateTodo = async (req,res) =>{
    try 
    {
        const id = req.params.id;
        const {title,description,status} = req.body;
        const response = await TodoSchema.updateOne({_id : id},{$set : {title : title , description : description , status : status} });

        res.status(200).json({
            success : true,
            data : response,
            title : title,
            description : description,
            status : status,
            message : "Todo updated successfully"
        })
    }
    catch(error)
    {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

module.exports = { updateTodo };