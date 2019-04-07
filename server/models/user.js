const mongoose = require("mongoose");
const crypto = require("crypto");
const uniqueValidator = require("mongoose-unique-validator");

const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regTel = /^[0-9]{10,11}$/;
const regPass = /^.{6,}$/;

function requiredField(field) {
  return `Поле "${field}" обязательно для заполнения`;
}
function unique(field) {
  return `Данный ${field} уже занят`;
}
const userSchema = new mongoose.Schema(
  {
    fio: { type: String, required: requiredField("ФИО") },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: unique("E-mail"),
      required: requiredField("E-mail"),
      match: [regEmail, "Введенный E-mail не корректен"]
    },
    tel: {
      type: String,
      trim: true,
      unique: unique("номер телефона"),
      required: requiredField("Телефон"),
      match: [regTel, "Номер телефона должен состоять только из цифр (10 или 11 цифр)"]
    },
    country: { type: String, required: requiredField("Страна") },
    city: { type: String, required: requiredField("Город") },
    os: { type: String, required: requiredField("ОС мобильного телефона") },
    smsCode: { type: Number },
    hashPass: { type: String, required: true },
    salt: { type: String, required: true }
  },
  { collection: "users" }
);
userSchema.methods.encPass = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};

userSchema
  .virtual("password")
  .set(function(password) {
    if (!password.length) {
      this.invalidate("password", requiredField("Пароль"));
    }
    if (!password.match(regPass)) {
      this.invalidate("password", "Пароль должен быть длиннее 6 символов");
    }
    this._plainPassword = password;
    this.salt = `${Math.random()}123`;
    this.hashPass = this.encPass(password);
  })
  .get(() => this._plainPassword);

userSchema.methods.checkPass = function(password) {
  return this.encPass(password) === this.hashPass;
};

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);
module.exports = { User };
