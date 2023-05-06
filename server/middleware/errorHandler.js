const { logEvents } = require("./logEvents");

const errorHander = (err, req, res, next) => {
  logEvents(`${err.name}: ${err.message}`, "errLog.txt");
  res.status(500).send(err.message);
};

module.exports = { errorHander };
