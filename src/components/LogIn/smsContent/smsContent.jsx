import React from "react";
import s from "../../forms.sass";
import st from "./smsContent.sass";

function smsContent({ smsCheck, smsValid }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    smsCheck(formData);
    // openModal();
  };
  console.log("smsValid", smsValid);
  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.smsForm}>
        <p className={s.label}>Введите код из смс</p>
        <input className={st.smsInput} type="number" name="code" required />
        {smsValid === false && <div className={st.notValid}>Введен не верный код</div>}
        <button className={`${s.signButton} ${st.smsButton}`} type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
}
export default smsContent;
