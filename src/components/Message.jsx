import React, { useState } from "react";

const getMessageState = () => {
  let state = sessionStorage.getItem("messageSeen");
  if (state) {
    state = JSON.parse(sessionStorage.getItem("messageSeen"));
    return state;
  }
  return false;
};

export const Message = () => {
  const [messageState, setMessageState] = useState(getMessageState());

  const closeMessage = () => {
    sessionStorage.setItem("messageSeen", true);
    setMessageState(true);
  };
  return (
    <section className={messageState ? "message hide" : "message"}>
      <div className="message-container">
        <p>
          This App was created by Irakli Ghachava
          <a href="https://irakli-g.dev/" target="_blank" rel="noreferrer">
            irakli-g.dev
          </a>
          solely for presentational purposes and does not offer any goods or
          services.
        </p>
        <button className="btn" onClick={() => closeMessage()}>
          Close
        </button>
      </div>
    </section>
  );
};