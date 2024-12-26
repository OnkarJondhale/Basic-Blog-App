const TodoSchema = require('../models/todo.js');

const getTodo = async (req,res)=>{
    try
    {
        const response = await TodoSchema.find({});

        if(response.length==0)
        {
            return res.status(404).json({
                success : false,
                message : "No todo's found"
            })
        }

        res.status(200).json({
            success : true,
            data : response,
            message : "Todo's fetched successfully"
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

module.exports = { getTodo }