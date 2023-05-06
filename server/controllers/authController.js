const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const accessToken_exprireIn = "1h";
const refreshToken_expireIn = "1d";

const handleNewUser = async (req, res) => {
  const { name, username, email, address, phone, role, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "username and password are required!!" });

  // check for duplicate username;
  const duplicateUser = await User.findOne({ email: email }).exec();
  if (duplicateUser)
    return res.status(409).json({ message: "user already registered" });

  try {
    // entrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    // store the new user
    const savedUser = await User.create({
      name: name,
      username: username,
      email: email,
      address: address,
      phone: phone,
      role: role,
      password: hashedPwd,
    });

    res
      .status(201)
      .json({ message: `User created with name : ${savedUser.email}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: "username and password are required!!" });

  const foundUser = await User.findOne({ email: email }).exec();

  if (!foundUser)
    return res
      .status(401)
      .json({ message: "username or password is incorrect!!" });

  // evaluate password
  const isMatchPassword = await bcrypt.compare(password, foundUser.password);
  if (isMatchPassword) {
    const roles = foundUser.role;
    // create JWTs
    const accessToken = jwt.sign(
      {
        UserInfo: {
          email: foundUser.email,
          role: foundUser.role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: accessToken_exprireIn }
    );
    const refreshToken = jwt.sign(
      {
        UserInfo: {
          email: foundUser.email,
          roles: foundUser.roles,
        },
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: refreshToken_expireIn }
    );

    // saving refresh token with current user
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();

    const { password, __v, createdAt, updatedAt, ...remainings } =
      foundUser._doc;

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      succeed: true,
      accessToken: accessToken,
    });
  } else {
    res.status(401).json({ message: "username or password is incorrect" });
  }
};

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;

  const loggedInUser = await User.findOne({ refreshToken }).exec();
  if (!loggedInUser) return res.sendStatus(403).json("sdfasf"); // Forbidden

  // evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || loggedInUser.email !== decoded.UserInfo.email)
      return res.sendStatus(403); // Forbidden
    const accessToken = jwt.sign(
      {
        UserInfo: {
          email: loggedInUser.email,
          role: loggedInUser.role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: accessToken_exprireIn }
    );
    res.json({ accessToken });
  });
};

const handleLogout = async (req, res) => {
  // on client, also delete the acces token

  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(204); // No content
  const refreshToken = cookies.jwt;

  // if refresh in db?
  const loggedInUser = await User.findOne({ refreshToken }).exec();

  if (!loggedInUser) {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return res.sendStatus(204); // No content
  }

  // Delete the refresh in the db
  loggedInUser.refreshToken = "";
  const result = await loggedInUser.save();

  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  res.sendStatus(204);
};

const getAuthUser = async (req, res) => {
  const foundUser = await User.findOne({ email: req.email }).exec();
  const { password, __v, createdAt, updatedAt, refreshToken, ...remainings } =
    foundUser._doc;
  res.status(200).json({
    user: remainings,
  });
};

module.exports = {
  handleNewUser,
  handleLogin,
  handleRefreshToken,
  handleLogout,
  getAuthUser,
};
