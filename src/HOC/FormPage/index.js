import { connect } from "react-redux";
import { compose } from "redux";
import HOCFormPage from "./FormPage";

function mapStateToProps(state) {
  return { loading: state.loading };
}

const composedFormPage = compose(
  connect(mapStateToProps),
  HOCFormPage
);
export default composedFormPage;
