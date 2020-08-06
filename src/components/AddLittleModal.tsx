import React, { useEffect, useState } from "react";
import "bulma/css/bulma.css";

interface Props {
  showModal: boolean;
  setShowModal: Function;
}
function AddLittleModal({ showModal, setShowModal }: Props) {
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
        <section className="modal-card-body">why is there no padding</section>
        <footer className="modal-card-foot">
          <button className="button is-success">Add little</button>
          <button className="button" onClick={() => setShowModal(false)}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
}

export default AddLittleModal;
