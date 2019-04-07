import React, { Component } from "react";
import PropTypes from "prop-types";
import AutoInput from "../AutoInput/AutoInput";

const cities = {
  Russia: ["Москва", "Рязань", "Калуга"],
  USA: ["New York", "Texas", "California"],
  France: ["Paris", "Alpes-Maritimes", "Bas-Rhin"]
};
const countries = Object.keys(cities);
class CitySelect extends Component {
  state = { cites: [] };

  getCountry = (country) => {
    this.setState({ cites: cities[country] || [] });
  };

  render() {
    const { err } = this.props;
    return (
      <div>
        <AutoInput
          callback={this.getCountry}
          err={err.country}
          fields={countries}
          label="Страна"
          name="country"
          required
        />
        <AutoInput err={err.city} fields={this.state.cites} label="Город" name="city" required />
      </div>
    );
  }
}
CitySelect.propTypes = { err: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired };
export default CitySelect;
