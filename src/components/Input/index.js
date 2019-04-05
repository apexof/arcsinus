import { connect } from "react-redux";
import Input from "./Input";

const mapStateToProps = state => ({ reg: state.registrate });
const ConnectedInput = connect(mapStateToProps)(Input);

export default ConnectedInput;
