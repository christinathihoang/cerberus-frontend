import React, { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import styled from "styled-components";
import ApplicationModal from "./ApplicationModal";

interface Props {
  application: any;
}

const AcceptIcon = styled.i`
  color: lightgray;
  padding-left: 1rem;

  &:hover {
    color: green;
  }
`;

const DeleteIcon = styled.i`
  color: lightgray;
  padding-left: 1rem;

  &:hover {
    color: red;
  }
`;


function ApplicationCard({ application }: Props) {
  const {
    little: { first_name, last_name },
    nickname,
    status,
    accepted,
  } = application;
  // const applicationStatus = application.status ? "APPROVED" : "NOT APPROVED";
  const cardColor =
    status === "APPROVED" && accepted ? "has-text-danger-dark" : null;

    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalType, setModalType] = useState<string>("");

    function openModal(modalType: string) {
      setModalType(modalType);
      setShowModal(true);
    };

  return (
    <div className="card mb-3">
      <div className="card-content">
        <div className="columns">
          <div className="column">
            <p className="title">{nickname}</p>
            <p className="subtitle">
              {first_name} {last_name}
            </p>
          </div>

          <div className="column has-text-right">
            <p className="subtitle">{status}</p>
          </div>

          <div className="column has-text-right">
            <a onClick={() => openModal("delete")}>
              <DeleteIcon className="fas fa-times-circle fa-2x"></DeleteIcon>
            </a>
            <a onClick={() => openModal("accept")}>
              <AcceptIcon className="fas fa-check-circle fa-2x"></AcceptIcon>
            </a>
          </div>
        </div>
      </div>
      <ApplicationModal modalType={modalType} showModal={showModal} setShowModal={setShowModal}></ApplicationModal>
    </div>
  );
}

export default ApplicationCard;
