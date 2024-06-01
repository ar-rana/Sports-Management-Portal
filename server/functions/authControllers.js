const { db } = require("../firebase");
const { addDoc, collection, where, query, getDocs } = require("firebase/firestore");

module.exports.signup = async (req, res) => {
  if (req.body.position === "Student") {
    const { name, email, rollno, password, position } = req.body;

    console.log(name, email, rollno, password, position);

    try {
      const q = query(collection(db, "users"), where("email", "==", email ));
      const element = await getDocs(q);
      if (element.empty) {
        const docref = await addDoc(collection(db, "users"), {
          name: name,
          email: email,
          rollno: rollno,
          password: password,
          position: position,
        });

        const createdUser = {
          id: docref.id,
          name: name,
          email: email,
          rollno: rollno,
          position: position
        }
        res.status(201).json({
          user : createdUser,
          message: "User created successfully"
        });
      } else {
        res.status(400).json({
          message: "User already exists"
        });
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    const { name, email, password, position } = req.body;

    console.log(name, email, password, position);

    try {
      const q = query(collection(db, "users"), where("email", "==", email ));
      const element = await getDocs(q);
      if (element.empty) {
        const docref = await addDoc(collection(db, "users"), {
          name: name,
          email: email,
          password: password,
          position: position,
        });

        const createdUser = {
          id: docref.id,
          name: name,
          email: email,
          position: position
        }
        res.status(201).json({
          user : createdUser,
          message: "User created successfully"
        });
      } else {
        res.status(400).json({
          message: "User already exists"
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
};
