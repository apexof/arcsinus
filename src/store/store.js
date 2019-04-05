import { createStore, applyMiddleware } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import reducer from "../reducers";

const state = {
  loading: false,
  login: false,
  registrate: false,
  smsValid: null
};
const store = createStore(reducer, state, applyMiddleware(apiMiddleware));

export default store;
