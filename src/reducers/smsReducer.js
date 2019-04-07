import { SMS_CHECK, ERR } from "../AC";

function smsReducer(smsValid = false, { type, payload: data, ...rest }) {
  switch (type) {
    case SMS_CHECK:
      return data.err ? data.errMsg : true;
    case SMS_CHECK + ERR:
      console.log(data, rest);
      return false;
    default:
      return smsValid;
  }
}

export default smsReducer;
