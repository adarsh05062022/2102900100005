const express = require("express");
const app = express();

const PORT = 4000;




app.get("/",(req,res)=>{
    res.json("sever setup working");
})

app.listen(PORT,()=>{
    console.log("Server is running on the port 4000");
})