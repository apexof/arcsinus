import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Loading from "../../components/Loading";
import s from "./FormPage.sass";

const HOCFormPage = (FormComponent) => {
  const FormPage = ({ loading }) => (
    <div className={s.container}>
      {loading && <Loading />}
      <Header />
      <FormComponent />
      <Nav />
      <Footer />
    </div>
  );
  FormPage.propTypes = { loading: PropTypes.bool.isRequired };
  return FormPage;
};

HOCFormPage.propTypes = { FormComponent: PropTypes.string.isRequired };
export default HOCFormPage;
