import { connect } from "react-redux";
import SmsContent from "./SmsContent";
import { smsCheck } from "../../../../AC";

const mapDispatchToProps = { smsCheck };

const mapStateToProps = state => ({ smsValid: state.smsValid });

const ConnectedSmsContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SmsContent);

export default ConnectedSmsContent;
