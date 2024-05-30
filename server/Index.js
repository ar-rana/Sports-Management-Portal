const express = require('express');
const cors = require('cors');
const http = require('http');
require('dotenv').config();

const app = express();

PORT = process.env.PORT
const origin = "http://localhost:3000";
const options = {
    origin: origin,
    credentials: true,
    allowedHeaders: "Content-Type,Authorization",
  };


app.use(cors(options));
app.use(express.json());


const server = http.createServer(app);

app.get("/",(req,res)=>{
    res.send("Server Live!!");
});

app.post("/test",(req,res)=>{
    console.log(req.body);
    res.send("good");
});

server.listen(PORT, ()=>{
    console.log(`server live on ${PORT}`);
});