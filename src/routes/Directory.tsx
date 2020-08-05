import React from "react";
import "bulma/css/bulma.css";

function Directory() {
  return (
    <div className="box">
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Search</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Search nicknames"
              />
              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <table className="table is-bordered is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Nickname</th>
            <th>Sister</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Bishop</td>
            <td>Christina Hoang</td>
            <td>kplbishop@gmail.com</td>
          </tr>

          <tr>
            <td>Kelly Ly</td>
            <td>Auteur</td>
            <td>kplauteur@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Directory;
