import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./AutoInput.sass";
import f from "../../forms.sass";

class AutoInput extends Component {
  state = {
    val: "",
    focusInput: false
  };

  static getDerivedStateFromProps({ fields }) {
    return !fields.length ? { val: "" } : null;
  }

  handlePen = (e) => {
    this.changeVal(e.target.value);
  };

  chooseField = (e) => {
    this.changeVal(e.target.innerHTML);
  };

  changeVal(val) {
    this.setState({ val });
    if (this.props.callback) this.props.callback(val);
  }

  render() {
    const { fields, label, name, required, reg } = this.props;
    const FilteredFields = fields.filter(field => field.toUpperCase().startsWith(this.state.val.toUpperCase()));
    const List = FilteredFields.map(field => (
      <div key={field} onMouseDown={this.chooseField} className={s.field}>
        {field}
      </div>
    ));
    return (
      <div className={f.inputContainer}>
        <p className={f.label}>{label}</p>
        <input
          className={f.input}
          value={this.state.val}
          type="text"
          name={name}
          autoComplete="new-password"
          onChange={this.handlePen}
          onFocus={() => this.setState({ focusInput: true })}
          onBlur={() => this.setState({ focusInput: false })}
          required={required}
        />
        {List.length > 0 && (
          <div className={`${s.list} ${!this.state.focusInput && s.dn}`}>{List}</div>
        )}
        <div className={f.notValid}>{reg[name]}</div>
      </div>
    );
  }
}
AutoInput.propTypes = {
  reg: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  fields: PropTypes.instanceOf(Array).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  callback: PropTypes.func,
  required: PropTypes.bool
};
AutoInput.defaultProps = {
  reg: {},
  callback: undefined,
  required: false
};
export default AutoInput;
