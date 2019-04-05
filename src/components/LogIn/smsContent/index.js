import { connect } from "react-redux";
import smsContent from "./smsContent";
import { smsCheck } from "../../../AC";

const mapDispatchToProps = { smsCheck };

const mapStateToProps = state => ({ smsValid: state.smsValid });

const ConnectedSmsContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(smsContent);

export default ConnectedSmsContent;
