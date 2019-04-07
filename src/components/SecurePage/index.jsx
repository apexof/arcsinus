import { connect } from "react-redux";
import SecurePage from "./SecurePage";

const mapStateToProps = state => ({ smsValid: state.smsValid });

const ConnectedSecurePage = connect(mapStateToProps)(SecurePage);

export default ConnectedSecurePage;
