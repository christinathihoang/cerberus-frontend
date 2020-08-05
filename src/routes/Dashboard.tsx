import React from "react";
import "bulma/css/bulma.css";

function Dashboard() {
  return (
    <div className="box">
      <table className="table is-bordered is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Nickname</th>
            <th>Date Submitted</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Ventura</td>
            <td>10/10/2018</td>
            <td>Not Approved</td>
          </tr>

          <tr>
            <td>Shepherdess</td>
            <td>10/10/2019</td>
            <td>Approved</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
