import { REG, CLEAR_REG, ERR } from "../AC";

function regReducer(registrate = false, { type, payload: data, ...rest }) {
  switch (type) {
    case REG:
      return data.err ? data.errMsg : true;
    case CLEAR_REG:
      return false;
    case REG + ERR:
      console.log(data, rest);
      return false;
    default:
      return registrate;
  }
}

export default regReducer;
