import React from "react";
import "bulma/css/bulma.css";

function NicknameForm() {
  return (
    <div className="box">
      <article className="message is-dark">
        <div className="message-header">
          <p>Dark</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          To apply for a nickname, you must have updated the{" "}
          <strong>Littles</strong> page with your most recent information.
          <section className="section">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Little</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                      className="input"
                      type="text"
                      placeholder="First name"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
                      placeholder="Last name"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Tree</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select>
                        <option>Animation</option>
                        <option>Drink</option>
                        <option>Heavenly Creations</option>
                        <option>Imagination</option>
                        <option>Literature</option>
                        <option>Nature</option>
                        <option>Power</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Nickname</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="e.g. Bishop"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Pronunciation</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="e.g. Bee-shop"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Meaning</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Explain this nickname"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label"></div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <button className="button is-success">
                      <span className="icon is-small">
                        <i className="far fa-paper-plane"></i>

                        <i className="fas fa-check"></i>
                      </span>
                      <span>Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

export default NicknameForm;
