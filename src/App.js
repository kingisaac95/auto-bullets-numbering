import React, { useEffect } from "react";
import "./styles.css";
import { reformatTextBody, reformatBullet } from "./reformat";

export default function App() {
  useEffect(() => {
    const textArea = document.getElementById("messageBox");

    textArea.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        textArea.value = reformatTextBody(textArea.value);
      }

      if (event.key === " ") {
        reformatBullet(textArea);
      }
    });

    textArea.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });
  }, []);

  return (
    <div className="App">
      <h2>Auto bullet & numbering</h2>
      <form>
        <textarea id="messageBox" rows="10" placeholder="Type your message" />
      </form>

      <fieldset>
        <legend>Guide</legend>
        <ul>
          <li>
            Use <code>*</code> or <code>-</code> for a bullet.
          </li>
          <li>
            Use any number from <code>0-9</code> followed by a period(.) for
            numbering.
          </li>
        </ul>
        <p>
          Signature: <code>[symbol] [space] [your text]</code> then hit enter
        </p>
        <section>
          <p>Examples</p>
          <p>- A good note</p>
          <p>1. First point</p>
        </section>
      </fieldset>
    </div>
  );
}
