const express = require("express");
const {
  handleNewUser,
  handleLogin,
  handleRefreshToken,
  handleLogout,
  getAuthUser,
} = require("../controllers/authController");
const verifyJWT = require("../middleware/verifyJWT");

const router = express.Router();

router.post("/register", handleNewUser);
router.post("/login", handleLogin);
router.get("/refresh", handleRefreshToken);
router.post("/logout", handleLogout);
router.get("/get-me", verifyJWT, getAuthUser);

module.exports = router;
