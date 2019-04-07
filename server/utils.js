const random = require("random");
const { User } = require("./models/user");

function userFind({ email, password }) {
  return User.findOne({ email }).then((user) => {
    if (user) {
      if (user.checkPass(password)) {
        const smsCode = random.int(1000, 9999);
        return User.updateOne({ email }, { smsCode }).then(() => ({ err: false, smsCode }));
      }
      return { err: true, errMsg: { password: "Пароль не верный" } };
    }
    return { err: true, errMsg: { email: "Пользователь не найден" } };
  });
}

function checkCode({ email, smsCode }) {
  return User.findOne({ email }).then((user) => {
    if (user) {
      if (user.smsCode === +smsCode) {
        return User.updateOne({ email }, { smsCode: null }).then(() => ({ err: false }));
      }
      return { err: true, errMsg: { smsCode: "Смс код не верный" } };
    }
    return { err: true, errMsg: { email: "Пользователь не найден" } };
  });
}

module.exports = { userFind, checkCode };
