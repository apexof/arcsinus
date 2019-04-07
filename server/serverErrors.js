function serverErrors(error) {
  const prefix = "SRV ERR: ";

  if (error.response) {
    console.log(prefix, "Ошибка в запросе");
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(prefix, "Ошибка в ответе");
    console.log(error.request);
  } else {
    console.log(prefix, "Неизвестная ошибка");
    console.log(prefix, error.message);
  }
  // console.log(error.config);
}

module.exports = serverErrors;
