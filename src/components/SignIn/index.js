import { connect } from "react-redux";
import SignIn from "./SignIn";

function mapStateToProps(state) {
  return { loading: state.loading };
}

const ConnectedSignIn = connect(mapStateToProps)(SignIn);

export default ConnectedSignIn;
