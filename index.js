const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log('listening on 3000');
});

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1",blog);

const dbConnect = require('./config/database');
 dbConnect();

app.get('/', (req,res)=>{
    res.send(`<h1>This is Homepage</h1>`);
});

