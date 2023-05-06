const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles)
      return res.status(403).json({ message: "roles not found" });

    const userAllowedRoles = [...allowedRoles];
    const userRoles = req.roles;
    const result = req.roles
      .map((role) => userAllowedRoles.includes(role))
      .find((val) => val === true);

    if (!result)
      return res
        .status(403)
        .json({ message: "You do not have permission to do this" });
    next();
  };
};

module.exports = verifyRoles;
