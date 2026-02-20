const mongoose = require("mongoose");

require("dotenv").config(); // dotenv lib to fetch db url

const dbConnect = () => {
    // REMOVED: useNewUrlParser and useUnifiedTopology options
    mongoose.connect(process.env.DATABASE_URI)
    .then(() => console.log("DB ka Connection is Successful"))
    .catch((error) => {
       console.log("Issue in DB connection");
       console.error(error.message);
       process.exit(1);
    }); 
}

module.exports = dbConnect;
