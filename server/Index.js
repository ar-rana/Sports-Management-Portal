const express = require("express");
const cors = require("cors");
const http = require("http");
const { db, storage } = require("./firebase");
const {
  collection,
  doc,
  serverTimestamp,
  updateDoc,
  addDoc,
  deleteDoc,
  onSnapshot,
  setDoc,
} = require("firebase/firestore");
const {
  deleteObject,
  ref,
  getDownloadURL,
  uploadString,
} = require("firebase/storage");
require("dotenv").config();

const app = express();

const origin = "http://localhost:3000";
console.log(process.env.PORT);
const PORT = process.env.PORT;

const options = {
  origin: origin,
  credentials: true,
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(options));

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("server live!!");
});

app.post("/tournament/register", (req, res) => {
  const addTournament = async () =>{
    const docref = await addDoc(collection(db, "tournaments"), {
      name: req.body.name,
      sport: req.body.sport,
      startingDate: req.body.start,
      endingDate: req.body.end,
      description: req.body.description
    })
  };
});

server.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
