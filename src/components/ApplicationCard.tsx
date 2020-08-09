import React, { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import styled from "styled-components";

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
            <a>
              <DeleteIcon className="fas fa-times-circle fa-2x"></DeleteIcon>
            </a>
            <a>
              <AcceptIcon className="fas fa-check-circle fa-2x"></AcceptIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationCard;
