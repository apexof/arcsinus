import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import s from "./SecurePage.sass";

class SecurePage extends React.Component {
  state = {};

  static getDerivedStateFromProps({ smsValid, history }) {
    if (!smsValid) {
      alert("Доступ запрещен");
      history.replace("/login-page");
    }
    return null;
  }

  render() {
    return this.props.smsValid === true ? (
      <h1 className={s.h1}>Доступ получен</h1>
    ) : (
      <h1 className={s.h1}>Доступ запрещен</h1>
    );
  }
}
SecurePage.propTypes = {
  smsValid: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  history: PropTypes.shape({ replace: PropTypes.func.isRequired }).isRequired
};

export default withRouter(SecurePage);
