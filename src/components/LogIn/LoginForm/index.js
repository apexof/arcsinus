import { connect } from "react-redux";
import { login } from "../../../AC";
import LoginForm from "./LoginForm";
import smsContent from "../smsContent";
import smsWindow from "../../../HOC/windows/smsWindow";

const mapDispatchToProps = { login };

const ConnectedForm = connect(
  null,
  mapDispatchToProps
)(LoginForm);

export default smsWindow(ConnectedForm, smsContent);
