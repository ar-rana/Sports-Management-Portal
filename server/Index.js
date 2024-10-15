const express = require("express");
const cors = require("cors");
const http = require("http");
const cookieParser = require('cookie-parser')
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

PORT = process.env.PORT;
const origin = "https://sports-management-portal.vercel.app";
const options = {
  origin: origin,
  credentials: true,
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(options));
app.use(express.json());
app.use(cookieParser());
app.use(authRoutes);

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Server Live!!");
});

server.listen(PORT, () => {
  console.log(`server live on ${PORT}`);
});
