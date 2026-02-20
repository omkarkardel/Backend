const Todo = require("../models/Todo");

//define router handler

// export new tarika

exports.getTodo = async(req,res) => {
    try {
        //fetch all todo from database
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched",
        });
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

exports.getTodoById = async(req, res) => {
    try {
       //extract todo items basis on id
       const id = req.params.id;
       const todo = await Todo.findById({_id: id})

       // data for give id not found
       if(!todo) {
        return res.status(404).json({
            success:false,
            message:"No Data Found with Given ID",
        })
       }
       //data for given FOUND
       res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data successfully fetched`,
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