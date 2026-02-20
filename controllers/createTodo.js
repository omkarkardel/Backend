// import the model
// import -> require() function

const Todo = require("../models/Todo");

//define router handler

// export new tarika

exports.createTodo = async(req,res) => {
    try {
        //extract title & description from parser body
        const {title, description} = req.body;
        //create a new todo obj and insert in DB
        const response = await Todo.create({title,description});
        // send a json response with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfylly'
            }
        );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}