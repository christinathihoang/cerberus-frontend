import React, { useState } from "react";
import "bulma/css/bulma.css";
import AddLittleModal from "../components/AddLittleModal";

function Littles() {
  const [littles, setLittles] = useState<any[]>([
    {
      first_name: "Chloe",
      last_name: "Miemban",
      nickname: "Aralune",
      tree: "Animation",
      chapter: "Alpha Gamma",
    },
  ]);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="box has-background-light">
      <article className="message">
        <div className="message-body">
          Before applying for a nickname, please make sure that all of the
          information on this page is correct.
        </div>
      </article>

      <table className="table is-bordered is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Nickname</th>
            <th>Sister</th>
            <th>Chapter</th>
          </tr>
        </thead>

        <tbody>
          {littles.map((little) => [
            <tr>
              <td>{little.nickname}</td>
              <td>
                {little.first_name} {little.last_name}
              </td>
              <td>{little.chapter}</td>
            </tr>,
          ])}
        </tbody>
      </table>

      <section className="section">
        <div className="buttons has-addons is-right">
          <button className="button" onClick={() => setShowModal(true)}>
            Add Little
          </button>
        </div>
      </section>

      <AddLittleModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Littles;
