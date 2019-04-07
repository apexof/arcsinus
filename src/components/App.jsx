import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import store from "../store/store";
import SignForm from "./SignForm";
import LoginForm from "./LoginForm";
import FormPage from "../HOC/FormPage";
import SecurePage from "./SecurePage";
import s from "../sass/global.sass";

// const Comp = FormPage(SignForm);
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={FormPage(SignForm)} />
        <Route exact path="/login-page" component={FormPage(LoginForm)} />
        <Route exact path="/secure-page" component={SecurePage} />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
