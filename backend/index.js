
const express = require("express");

const app = express();

app.listen(3004,()=>{
    console.log("server running PORT no;- 3004")
});


app.post("/",(req,res)=>{
    res.send("hello");
});

