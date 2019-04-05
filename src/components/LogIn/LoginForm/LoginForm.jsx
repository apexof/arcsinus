import React from "react";
import PropTypes from "prop-types";
import Input from "../../Input";
import s from "../../forms.sass";

function LoginForm({ login, openModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    login(formData);
    openModal();
  };
  return (
    <div className={s.container}>
      <h2 className={s.formTitle}>Войдите в свой профиль</h2>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.signForm}>
        <Input type="text" name="login">
          Логин
        </Input>
        <Input type="text" id="password">
          Пароль
        </Input>

        <button className={s.formButton} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
};
export default LoginForm;
