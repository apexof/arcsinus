const random = require("random");
const { users } = require("./models/user");

module.exports = function(app) {
  const smsCode = [];
  app.post("/login", (req, res) => {
    smsCode[0] = random.int(0, 9999);
    res.send({ smsCode });
  });
  app.post("/sms-check", (req, res) => {
    res.send({ smsValid: req.body.code === smsCode[0] });
  });
  app.post("/registrate", (req, res, next) => {
    users.create(req.body, (err, user) => {
      if (err) return next(err);
      res.send({ err: false });
    });
  });
};
