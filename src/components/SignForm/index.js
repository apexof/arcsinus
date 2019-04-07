import { connect } from "react-redux";
import { registrate, clearReg } from "../../AC";
import SignForm from "./SignForm";

const mapDispatchToProps = { registrate, clearReg };
const mapStateToProps = state => ({ regState: state.registrate });

const ConnectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignForm);

export default ConnectedForm;
