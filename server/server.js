const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const multer = require("multer")();
const fallback = require("express-history-api-fallback");
const { validErrs } = require("./errors");
const { PORT, DBconnect } = require("./config");

const app = express();
DBconnect();
app.use(helmet());
app.use(multer.array());
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/loginPage", fallback("index.html", { root: "dist" }));

require("./routes")(app);

app.use(validErrs);

app.listen(PORT, console.log(PORT));
