const httpStatus = require('http-status');
const winston = require('../../../../../config/winston');

const post = async (req, res) => {
  try {
    username = req.body.username;
    password = req.body.password;

    if (username === "admin" && password === "123456") {
      winston.debug(`Login attempt succesful for user ${username} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
      return res
        .status(httpStatus.OK)
        .send({ valid: true });
    }
    winston.debug(`Login attempt failed for user ${username} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send({ valid: false });
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

module.exports = {
  post,
};
