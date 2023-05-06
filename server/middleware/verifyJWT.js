const jwt = require("jsonwebtoken");

require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader =
    req.headers["authorization"] || req.headers["Authorization"]; // Bearer token
  if (!authHeader?.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Authentication error from verifyJWT()" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.email = decoded.UserInfo.email;
    req.role = decoded.UserInfo.role;
    next();
  } catch (err) {
    return res.status(403).json({
      message: "Authentication error from verifyJWT()=> jwt.verify(ddd)", // invalid token
    });
  }
};

module.exports = verifyJWT;
