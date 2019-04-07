import { LOG_IN, CLEAR_LOGIN, ERR } from "../AC";

function loginReducer(loginState = false, { type, payload: data, ...rest }) {
  switch (type) {
    case LOG_IN:
      if (data.smsCode) console.log("Смс код: ", data.smsCode);
      return data.err ? data.errMsg : true;
    case CLEAR_LOGIN:
      return false;
    case LOG_IN + ERR:
      console.log(data, rest);
      return false;
    default:
      return loginState;
  }
}

export default loginReducer;
