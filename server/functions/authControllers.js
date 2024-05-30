const { db } = require("../firebase");
const { addDoc, collection } = require("firebase");

module.exports.signup = async (req, res) => {
  const { name, email, rollno, password, position } = req.body;
  console.log("name: ", name, "email: ", email, "rollno: ", rollno, "password: ", password, "position: ", position );
  
};
