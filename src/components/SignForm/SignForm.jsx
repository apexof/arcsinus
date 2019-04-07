import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import CitySelect from "./CitySelect";
import Input from "../Input";
import f from "../../sass/forms.sass";
import i from "../Input/Input.sass";

class SignForm extends React.Component {
  state = {};

  static getDerivedStateFromProps({ clearReg, history, regState }) {
    if (regState === true) {
      alert("Регистрация прошла успешна. Попробуйте войти в свой аккаунт");
      clearReg();
      history.replace("/login-page");
    }
    return null;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.registrate(formData);
  };

  render() {
    const { regState } = this.props;
    return (
      <div className={f.container}>
        <h2 className={f.formTitle}>Регистрация</h2>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <Input err={regState.fio} type="text" name="fio" props={{ required: true }}>
            ФИО
          </Input>
          <CitySelect err={regState} />
          <Input
            err={regState.tel}
            id="tel"
            props={{
              minLength: "10",
              maxLength: "11",
              placeholder: "Например: 9539055080",
              pattern: "[0-9]+",
              title: "Номер телефона должен содержать только цифры",
              required: true
            }}
          >
            Телефон
          </Input>
          <Input err={regState.email} id="email" props={{ required: true }}>
            E-mail
          </Input>
          <Input
            err={regState.password}
            id="password"
            props={{
              minLength: "6",
              pattern: "[a-z0-9]+",
              title: "Пароль должен содержать латинские буквы и цифры",
              required: true
            }}
          >
            Пароль
          </Input>
          <div className={i.inputContainer}>
            <p className={i.label}>ОС мобильного телефона</p>
            <select className={i.input} name="os">
              <option>Android</option>
              <option>iOS</option>
            </select>
          </div>
          <button className={f.formButton} type="submit">
            Войти
          </button>
        </form>
      </div>
    );
  }
}
SignForm.propTypes = {
  registrate: PropTypes.func.isRequired,
  regState: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  clearReg: PropTypes.func.isRequired,
  history: PropTypes.shape({ replace: PropTypes.func.isRequired }).isRequired
};
export default withRouter(SignForm);
