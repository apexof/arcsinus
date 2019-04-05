import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import loginReducer from "./loginReducer";
import regReducer from "./regReducer";
import smsReducer from "./smsReducer";

const reducer = combineReducers({
  loading: loadingReducer,
  login: loginReducer,
  registrate: regReducer,
  smsValid: smsReducer
});

export default reducer;
