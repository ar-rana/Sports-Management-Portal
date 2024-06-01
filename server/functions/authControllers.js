const { db } = require("../firebase");
const {
  addDoc,
  collection,
  where,
  query,
  getDocs,
} = require("firebase/firestore");

//signup

module.exports.signup = async (req, res) => {
  if (req.body.position === "Student") {
    const { name, email, rollno, password, position } = req.body;

    console.log(name, email, rollno, password, position);

    try {
      const q = query(collection(db, "users"), where("email", "==", email));
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
          position: position,
        };
        res.status(201).json({
          user: createdUser,
          message: "User created successfully",
        });
      } else {
        res.status(400).json({
          message: "User already exists",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500);
    }
  } else {
    const { name, email, password, position } = req.body;

    console.log(name, email, password, position);

    try {
      const q = query(collection(db, "users"), where("email", "==", email));
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
          position: position,
        };
        res.status(201).json({
          user: createdUser,
          message: "User created successfully",
        });
      } else {
        res.status(400).json({
          message: "User already exists",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500);
    }
  }
};

//login

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const user = await getDocs(q);
    if (!user.empty) {
      const userDoc = user.docs[0]; //because getDocs() return a "QueryDocumentSnapshot" that needs to be looped through to get data. Here user is the QueryDocumentSnapshot
      const userData = userDoc.data()
      if (userData.password === password){
        const existingUser = {
          id: userDoc.id,
          name: userData.name,
          email: email,
          position: userData.position,
        };
        console.log(existingUser);
        res.status(200).json({
          user: existingUser,
          message: "Login Sucessfull"
        });
      } else {
        res.status(401).json({
          message: "Incorrect Password"
        });
      }
    } else {
      res.status(404).json({
        message: "User Not Found",
      });
    }
  } catch (e) {
    console.log(e);
  }
};
