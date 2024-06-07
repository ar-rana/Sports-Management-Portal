const { db } = require("../firebase");
const jwt = require("jsonwebtoken");
const maxAge = 1 * 24 * 60 * 60;
const {
  addDoc,
  collection,
  where,
  query,
  getDocs,
  doc,
  getDoc,
} = require("firebase/firestore");
const { get, use } = require("../routes/authRoutes");

// const createJWT = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
// };

const createJWTUser = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: maxAge });
};

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

        const token = createJWTUser(createdUser);
        res.cookie("user", token, { maxAge: maxAge * 1000 });
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

        const token = createJWTUser(createdUser);
        res.cookie("user", token, { maxAge: maxAge * 1000 });
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
    // put these 2 lines after the if block
    const q = query(collection(db, "users"), where("email", "==", email));
    const user = await getDocs(q);
    if (!user.empty) {
      const userDoc = user.docs[0]; //because getDocs() return a "QueryDocumentSnapshot" that needs to be looped through to get data. Here user is the QueryDocumentSnapshot
      const userData = userDoc.data();
      if (userData.password === password) {
        const existingUser = {
          id: userDoc.id,
          name: userData.name,
          email: email,
          position: userData.position,
        };
        console.log(existingUser);

        // const token = createJWT(userDoc.id);
        // res.cookie("userid", token, { maxAge: maxAge * 1000 });

        const userToken = createJWTUser(existingUser);
        res.cookie("user", userToken, { maxAge: maxAge * 1000 });

        res.status(200).json({
          user: existingUser,
          message: "Login Sucessfull",
        });
      } else {
        res.status(401).json({
          message: "Incorrect Password",
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

// verfying user

// module.exports.verifyuser = async (req, res, next) => {
//   const token = req.cookies.userid;
//   console.log(token);
//   if (token) {
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("decoded token: ", decodedToken);

//     try {
//       const docref = doc(db, "users", decodedToken.id);
//       const user = await getDoc(docref);
//       if (user.empty) {
//         console.log("not found");
//         res.status(404).json({ message: "Unauthorized User" });
//       } else {
//         console.log(user);
//         const userData = user.data();
//         const User = {
//           id: docref.id,
//           name: userData.name,
//           email: userData.email,
//           position: userData.position,
//         };
//         console.log(User);
//         res.json({ user: User });
//       }
//       next();
//     } catch (e) {
//       console.log(e.message);
//     }
//   } else {
//     res.status(404);
//   }
// };

// verifyuser object

module.exports.verifyuserObject = async (req, res, next) => {
  const token = await req.cookies.user;
  if (token) {
    console.log(token);
    const user = jwt.verify(token, process.env.JWT_SECRET);
    console.log(user);
    res.status(200).json({ user: user });
  } else {
    res.status(404);
  }
};

// logout

module.exports.logout = (req, res) => {
  // res.cookie("userid", ":", { maxAge: 1 });
  res.cookie("user", ":", { maxAge: 0 });
  res.status(200).json({ Logout: true });
};
