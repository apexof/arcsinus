import React, { Component } from "react";
import AutoInput from "./AutoInput";

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
    return (
      <div>
        <AutoInput
          callback={this.getCountry}
          fields={countries}
          label="Страна"
          name="country"
          required
        />
        <AutoInput fields={this.state.cites} label="Город" name="city" required />
      </div>
    );
  }
}
export default CitySelect;
