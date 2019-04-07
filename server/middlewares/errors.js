const validErrs = (err, req, res, next) => {
  const errMsg = {};
  if (err.name === "ValidationError") {
    Object.keys(err.errors).forEach((field) => {
      errMsg[field] = err.errors[field].message;
    });
    res.send({ err: true, errMsg });
  } else {
    console.log(err);
  }
  next();
};

module.exports = { validErrs };
