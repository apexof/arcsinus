import { createStore, applyMiddleware } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import reducer from "../reducers";

const state = {
  loading: false,
  loginState: false,
  registrate: false,
  smsValid: false
};
const store = createStore(reducer, state, applyMiddleware(apiMiddleware));

export default store;
