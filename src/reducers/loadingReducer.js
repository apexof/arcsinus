import { START } from "../AC";

function loadingReducer(loading = false, action) {
  switch (action.type) {
    case START:
      return true;
    default:
      return false;
  }
}

export default loadingReducer;
