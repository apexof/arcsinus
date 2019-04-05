import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import SignForm from "./SignForm";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Loading from "../Loading";

import s from "../LogIn/LogIn.sass";

function SignIn({ loading }) {
  return (
    <>
      {loading && <Loading />}
      <div className={s.container}>
        <Header />
        <SignForm />
        <Nav />
        <Footer />
      </div>
    </>
  );
}
SignIn.propTypes = { loading: PropTypes.bool.isRequired };
export default SignIn;
