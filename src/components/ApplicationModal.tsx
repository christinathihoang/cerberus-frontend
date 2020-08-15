import React from "react";
// import "bulma/css/bulma.css";

interface Props {
  modalType: string;
  showModal: boolean;
  setShowModal: Function;
}
function ApplicationModal({ modalType, showModal, setShowModal }: Props) {
  const message =
    modalType === "delete" ? (
      <p>Do you want to delete this nickname?</p>
    ) : (
      <p>Do you want to approve this nickname?</p>
    );
  const showHideClassName = showModal ? "modal is-active" : "modal";

  return (
    <div className={showHideClassName}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => setShowModal(false)}
          ></button>
        </header>
        <section className="modal-card-body">{message}</section>
        <footer className="modal-card-foot">
          <button className="button is-success">Yes</button>
          <button className="button" onClick={() => setShowModal(false)}>
            No
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ApplicationModal;
