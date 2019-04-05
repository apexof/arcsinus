import { SMS_CHECK } from "../AC";

function smsReducer(smsValid = null, { type, payload: data }) {
  switch (type) {
    case SMS_CHECK:
      console.log(data);
      return data.smsValid;
    default:
      return smsValid;
  }
}

export default smsReducer;
