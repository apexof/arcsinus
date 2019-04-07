import React from "react";
import PropTypes from "prop-types";
import i from "./Input.sass";

function Input({ err, children, id, type, name, props }) {
  return (
    <div className={i.inputContainer}>
      <p className={i.label}>{children}</p>
      <input className={i.input} type={type || id} name={name || id} {...props} />
      <div className={i.notValid}>{err}</div>
    </div>
  );
}
Input.propTypes = {
  err: PropTypes.string,
  children: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  props: PropTypes.object
};
Input.defaultProps = {
  err: undefined,
  id: undefined,
  name: undefined,
  type: undefined,
  props: {}
};

export default Input;
