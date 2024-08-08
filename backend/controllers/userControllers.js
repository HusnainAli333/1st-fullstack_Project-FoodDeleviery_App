import userModels from "../models/userModels.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import userModel from "../models/userModels.js";

async function userLogin(req, res) {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.json({ success: false, message: "Email not found" });
    }

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) {
      return res.json({ success: false, message: "Invalid Password" });
    }

    const token = createtoken(user._id);

    return res.json({ success: true, token });
  } catch (err) {
    return res.json({ success: false, message: "error Occured" });
  }
}

function createtoken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET);
}

async function userRegister(req, res) {
  const { name, email, password } = req.body;

  try {
    const exists = await userModels.findOne({ email: email });

    if (exists) {
      return res.json({
        success: false,
        message: "User Already exists with this email",
      });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "password should be 8 digit long ",
      });
    }

    const salt = await bcrypt.genSalt(15);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashPassword,
    });

    const user = await newUser.save();

    const token = createtoken(user._id);
    res.json({ success: true, token, message: "Account Created Successfuly" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "something went wrong" });
  }
}

export { userLogin, userRegister };
