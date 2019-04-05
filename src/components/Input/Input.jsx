import React from "react";
import PropTypes from "prop-types";
import f from "../forms.sass";

function Input({ reg, children, id, type, name, props }) {
  return (
    <div className={f.inputContainer}>
      <p className={f.label}>{children}</p>
      <input
        className={f.input}
        type={type || id}
        name={name || id}
        {...props}
        // autoComplete="new-password"
      />
      <div className={f.notValid}>{reg[id] || reg[name]}</div>
    </div>
  );
}
Input.propTypes = {
  reg: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  children: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  props: PropTypes.object
};
Input.defaultProps = {
  reg: {},
  id: undefined,
  name: undefined,
  type: undefined,
  props: {}
};

export default Input;
