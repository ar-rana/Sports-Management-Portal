const express = require('express');
const cors = require('cors');
const http = require('http');
require('dotenv').config();

const app = express();

const origin = "http://localhost:3000";
const PORT = process.env.PORT;

const options = {
  origin: origin,
  credentials: true,
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(options));

const server = http.createServer(app);

app.get("/",(req,res)=>{
    res.send("server live!!")
})





server.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
