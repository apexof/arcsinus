import { LOG_IN } from "../AC";

function loginReducer(login, { type, payload: data }) {
  switch (type) {
    case LOG_IN:
      console.log(data);
      return true;
    default:
      return false;
  }
}

export default loginReducer;
