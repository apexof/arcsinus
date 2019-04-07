import React from "react";
import ReactModal from "react-modal";
import style from "./windows.sass";

ReactModal.setAppElement("#root");
function bodyScroll(val) {
  document.body.style.overflow = val ? "auto" : "hidden";
}
export default (Button, Component) => class ModalWindow extends React.Component {
    state = {
      showModal: false,
      user: null
    };

    openModal = (user) => {
      bodyScroll(false);
      this.setState({
        showModal: true,
        user
      });
    };

    closeModal = () => {
      bodyScroll(true);
      this.setState({ showModal: false });
    };

    render() {
      return (
        <>
          <Button {...this.props} openModal={this.openModal} />
          <ReactModal
            isOpen={this.state.showModal}
            className={style.window}
            overlayClassName={style.overlay}
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick
          >
            <span className={style.closeButton} onClick={this.closeModal}>
              ×
            </span>
            <Component user={this.state.user} {...this.props} closeModal={this.closeModal} />
          </ReactModal>
        </>
      );
    }
};
