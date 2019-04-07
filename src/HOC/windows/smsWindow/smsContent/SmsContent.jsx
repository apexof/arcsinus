import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Input from "../../../../components/Input";
import f from "../../../../sass/forms.sass";
import s from "./smsContent.sass";

class SmsContent extends React.Component {
  state = {};

  static getDerivedStateFromProps({ smsValid, history, closeModal }) {
    if (smsValid === true) {
      closeModal();
      history.replace("/secure-page");
    }
    return null;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.smsCheck(formData);
  };

  render() {
    const { smsValid, user } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit} autoComplete="off" className={f.form}>
          <input type="hidden" name="email" value={user} />
          <Input err={smsValid.smsCode} type="number" name="smsCode" props={{ required: true }}>
            Введите код из смс
          </Input>
          <button className={`${f.formButton} ${s.smsButton}`} type="submit">
            Отправить
          </button>
        </form>
      </div>
    );
  }
}

SmsContent.propTypes = {
  smsValid: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  smsCheck: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  history: PropTypes.shape({ replace: PropTypes.func.isRequired }).isRequired
};

export default withRouter(SmsContent);
