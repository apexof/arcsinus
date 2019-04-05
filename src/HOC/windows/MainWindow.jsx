import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");
function bodyScroll(val) {
  document.body.style.overflow = val ? "auto" : "hidden";
}

class MainWindow extends React.Component {
  state = { showModal: false };

  openModal = () => {
    bodyScroll(false);
    this.setState({ showModal: true });
  };

  closeModal = () => {
    bodyScroll(true);
    this.setState({ showModal: false });
  };
}

export default MainWindow;
