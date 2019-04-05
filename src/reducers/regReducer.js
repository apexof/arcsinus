import { REG, CREAR_REG } from "../AC";

function regReducer(registrate = false, action) {
  switch (action.type) {
    case REG:
      const { payload: data } = action;
      console.log(data);
      if (data.err) {
        return data.errMsg;
      }
      return true;
    case CREAR_REG:
      return false;
    default:
      return registrate;
  }
}

export default regReducer;
