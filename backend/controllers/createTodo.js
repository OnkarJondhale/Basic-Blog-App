const TodoSchema = require('../models/todo.js');

const createTodo = async (req,res)=> {
    try 
    {
        const {title,description} = req.body;
        const response = await TodoSchema.create({title,description});

        res.status(200).json({
            success : true,
            data : response,
            message : "Todo added successfully"
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

module.exports = { createTodo };