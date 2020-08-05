import React from "react";
import "bulma/css/bulma.css";

function Littles() {
  return (
    <div className="box">
      <article className="message">
        <div className="message-body">
          Before applying for a nickname, please make sure that all of the
          information on this page is correct.
        </div>
      </article>

      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Chloe Miemban</p>
        </header>
        <div className="card-content">
          <div className="content">
            <p>Nickname: *Aralune*</p>
            <p>Chapter: Alpha Gamma</p>
            <p>Semester: Fall 2018</p>
            <p>Status: Alum</p>
          </div>
        </div>
        <footer className="card-footer"></footer>
      </div>

      <section className="section">

      <div className="buttons has-addons is-right">
        <button className="button">Add Little</button>
      </div>
      </section>

    </div>
  );
}

export default Littles;
