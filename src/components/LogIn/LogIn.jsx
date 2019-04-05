import React from "react";
import Header from "../Header/Header";
import LoginForm from "./LoginForm";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import s from "./LogIn.sass";

export default function SignIn() {
  return (
    <div className={s.container}>
      <Header />
      <LoginForm />
      <Nav />
      <Footer />
    </div>
  );
}
