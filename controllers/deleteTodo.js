const Todo = require("../models/Todo");

//define router handler

// export new tarika

exports.deleteTodo = async(req,res) => {
    try {
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Todo DELETED",
        })
    }
    catch(err) {
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        }) 
    }
}