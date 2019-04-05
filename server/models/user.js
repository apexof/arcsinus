const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regTel = /^[0-9]{10,11}$/;

function requiredField(field) {
  return `Поле "${field}" обязательно для заполнения`;
}
function unique(field) {
  return `Данный "${field}" уже занят`;
}

const users = mongoose.model(
  "users",
  new mongoose.Schema(
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
      password: { type: String, required: requiredField("Пароль") },
      os: { type: String, required: requiredField("ОС мобильного телефона") }
    },
    { collection: "users" }
  ).plugin(uniqueValidator)
);
module.exports = { users };
