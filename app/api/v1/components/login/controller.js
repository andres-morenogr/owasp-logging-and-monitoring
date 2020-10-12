const httpStatus = require('http-status');

const post = async (req, res) => {
  try {
    username = req.body.username;
    password = req.body.password;

    if (username === "admin" && password === "123456") {
      return res
        .status(httpStatus.OK)
        .send({ valid: true });
    }
    return res
      .status(httpStatus.NOT_FOUND)
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
