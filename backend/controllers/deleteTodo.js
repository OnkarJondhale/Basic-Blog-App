const TodoSchema = require('../models/todo.js');

const deleteTodo = async (req,res)=>{
    try 
    {
        const id = req.params.id;
        const response = await TodoSchema.findByIdAndDelete(id);

        res.status(200).json({
            success : true,
            message : "Todo deleted successfully"
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

module.exports = { deleteTodo };