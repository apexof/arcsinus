const mongoose = require("mongoose");

const NODE_ENV = process.env.NODE_ENV || "development";
const IS_DEV = NODE_ENV === "development";
const PORT = NODE_ENV === "development" ? 8080 : process.env.PORT;
const user = "apex";
const pass = "Florida_6";
const DBName = "Arcsinus-test-task";
const MONGODB_URI = `mongodb+srv://${user}:${pass}@rapmash-2dv5p.mongodb.net/${DBName}?retryWrites=true`;

mongoose.connection.once("open", () => console.log("Connected to MongoDB"));

function DBconnect() {
  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
}

module.exports = {
  PORT,
  IS_DEV,
  DBconnect
};
