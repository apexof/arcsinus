import React from "react";
import s from "./Header.sass";

function Header() {
  return (
    <header className={s.header}>
      <h1 className={s.h1}>
        <span className={s.web}>Web</span>
        <span className={s.app}>App</span>
      </h1>
    </header>
  );
}
export default Header;
