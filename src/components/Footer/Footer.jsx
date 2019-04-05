import React from "react";
import s from "./Footer.sass";
import mail from "./mail.png";

function Footer() {
  return (
    <footer>
      <nav>
        <img className={s.img} src={mail} alt="Иконка конверта" />
        <span>Написать в поддердку</span>
      </nav>
    </footer>
  );
}
export default Footer;
