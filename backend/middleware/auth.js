import jwt from "jsonwebtoken";

async function authMiddelWare(req, res, next) {
  const { token } = req.headers;
  if (!token) {
    res.json({ success: false, message: "not authorized login" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(token_decode);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    res.json({ success: true, message: "Some Error occured" });
  }
}

export default authMiddelWare;
