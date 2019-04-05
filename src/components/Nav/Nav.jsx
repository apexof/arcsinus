import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import s from "./Nav.sass";

function Nav({ location }) {
  const isReg = location.pathname === "/";
  const isLogin = location.pathname === "/loginPage";
  return (
    <div className={s.container}>
      <div>
        <a href="/" className={s.notLink}>
          Я забыл пароль
        </a>
      </div>
      {isLogin && <Link to="/">Регистрация</Link>}
      {isReg && <Link to="/loginPage">Вход</Link>}
    </div>
  );
}
Nav.propTypes = { location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired };
export default withRouter(Nav);
