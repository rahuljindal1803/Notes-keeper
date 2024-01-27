const jwt = require("jsonwebtoken");
const secret = "Rahul#222";

const authService = async (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, secret, (err, decode) => {
    if (err) {
      return res.status(401).json({
        message: "Token is not valid",
        status: 401,
      });
    }
    if (decode) {
      req.body.user = decode.userId;
    } else {
      res.status(401).json({ message: "Unauthorized", status: 401 });
    }

    next();
  });
};

module.exports = authService;
