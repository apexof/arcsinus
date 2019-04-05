import { connect } from "react-redux";
import AutoInput from "./AutoInput";

const mapStateToProps = state => ({ reg: state.registrate });
const ConnectedAutoInput = connect(mapStateToProps)(AutoInput);

export default ConnectedAutoInput;
