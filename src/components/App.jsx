import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import store from "../store/store";
import SignIn from "./SignIn";
import LogIn from "./LogIn/LogIn";
import s from "./global.sass";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/loginPage" component={LogIn} />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
