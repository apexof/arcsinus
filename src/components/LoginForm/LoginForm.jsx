import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import f from "../../sass/forms.sass";

class LoginForm extends React.Component {
  state = {}; // необходимо для использования getDerivedStateFromProps

  static getDerivedStateFromProps({ openModal, clearLogin, loginState }) {
    if (loginState === true) {
      const user = document.querySelector("input[name='email']").value;
      openModal(user, clearLogin);
      clearLogin();
    }
    return null;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.login(formData);
  };

  render() {
    const { loginState } = this.props;
    return (
      <div className={f.container}>
        <h2 className={f.formTitle}>Войдите в свой профиль</h2>
        <form onSubmit={this.handleSubmit} autoComplete="off" className={f.form}>
          <Input err={loginState.email} id="email" props={{ required: true }}>
            Логин
          </Input>
          <Input
            err={loginState.password}
            id="password"
            props={{ required: true }}
          >
            Пароль
          </Input>

          <button className={f.formButton} type="submit">
            Войти
          </button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  clearLogin: PropTypes.func.isRequired,
  loginState: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  openModal: PropTypes.func.isRequired
};
export default LoginForm;
