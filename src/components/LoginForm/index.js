import { connect } from "react-redux";
import { login, clearLogin } from "../../AC";
import LoginForm from "./LoginForm";
import smsContent from "../../HOC/windows/smsWindow/smsContent";
import smsWindow from "../../HOC/windows/smsWindow";

function mapStateToProps(state) {
  return { loginState: state.loginState };
}
const mapDispatchToProps = { login, clearLogin };

const ConnectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default smsWindow(ConnectedForm, smsContent);
