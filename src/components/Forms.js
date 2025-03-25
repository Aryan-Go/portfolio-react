import React from 'react'
import './Forms.css'
import { motion } from "motion/react"
import ms from '../images/send.png'
export default function Forms() {
  return (
    <>
      <div class="center">
        <form
          method="POST"
          enctype="text/plain"
          action="mailto:goyal.aryan@gmail.com"
        >
          <h1 class="contact">Mail Me</h1>
          <br />
          <input type="text" name="message" placeholder="message" />
          <br />
          <button type="submit">
            <span>Send</span>
            <span>
              {" "}
              <img class="send" src={ms} />
            </span>
          </button>
        </form>
      </div>
    </>
  );
}
