const { userFind, checkCode } = require("./utils");
const { serverErrors } = require("./serverErrors");
const { User } = require("./models/user");

module.exports = function(app) {
  app.post("/login", (req, res) => {
    userFind(req.body)
      .then(data => res.send(data))
      .catch(serverErrors);
  });

  app.post("/registrate", (req, res, next) => {
    User.create(req.body, err => (err ? next(err) : res.send({ err: false })));
  });

  app.post("/sms-check", (req, res) => {
    checkCode(req.body)
      .then(data => res.send(data))
      .catch(serverErrors);
  });
};
