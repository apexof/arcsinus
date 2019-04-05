import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import CitySelect from "../CitySelect";
import Input from "../../Input";
import f from "../../forms.sass";

class SignForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.registrate(formData);
  };

  render() {
    const { reg, clearReg, history } = this.props;
    if (reg === true) {
      alert("Регистрация прошла успешна. Попробуйте войти в свой аккаунт");
      clearReg();
      history.replace("/loginPage");
      return <div />;
    }
    return (
      <div className={f.container}>
        <h2 className={f.formTitle}>Регистрация</h2>
        <form onSubmit={this.handleSubmit} autoComplete="off" noValidate>
          <Input type="text" name="fio">
            ФИО
          </Input>
          <CitySelect />
          <Input id="tel" props={{ placeholder: "Например: 9539055080" }}>
            Телефон
          </Input>
          <Input id="email">E-mail</Input>
          <Input id="password">Пароль</Input>
          <div className={f.inputContainer}>
            <p className={f.label}>ОС мобильного телефона</p>
            <select className={f.input} name="os">
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
  reg: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  clearReg: PropTypes.func.isRequired,
  history: PropTypes.shape({ replace: PropTypes.func.isRequired }).isRequired
};
SignForm.defaultProps = { reg: {} };
export default withRouter(SignForm);
