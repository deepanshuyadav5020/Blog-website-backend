const mongoose = require('mongoose');

// const URL = "mongodb://localhost:27017/Blogs";
const URL = "mongodb+srv://deepanshu_y4246:Anything2_@supplimentsshop.ohclpjg.mongodb.net/?retryWrites=true&w=majority";
const dbConnect = ()=>{
    mongoose.connect(URL,{
        useNewURlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("DB connection established");
    })
    .catch((err)=>{
        console.log("Error connecting to database");
    })
}

module.exports = dbConnect;