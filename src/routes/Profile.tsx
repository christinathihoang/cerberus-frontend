import React from "react";
import "bulma/css/bulma.css";

function Profile() {
  return (
    <div className="box has-background-light	">
            <article className="message">
        <div className="message-body">
          Before applying for a nickname, please make sure that all of the
          information on this page is correct.
        </div>
      </article>


      <div className="card">
        <div className="card-content">
          <p className="title">
           Christina Hoang
          </p>
          <p className="subtitle">*Bishop*</p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              View on{" "}
              <a href="https://twitter.com/codinghorror/status/506010907021828096">
                Twitter
              </a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              Share on <a href="#">Facebook</a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Profile;
