import React from 'react'
import './Forms.css'
import { motion } from "motion/react"
import ms from '../images/send.png'
export default function Forms() {
  return (
    <>
      <div className="center">
        <form
          method="POST"
          encType="text/plain"
          action="mailto:goyal.aryan@gmail.com"
        >
          <h1 className="contact">Mail Me</h1>
          <br />
          <input type="text" name="message" placeholder="message" />
          <br />
          <button type="submit">
            <span>Send</span>
            <span>
              {" "}
              <img className="send" src={ms} />
            </span>
          </button>
        </form>
      </div>
    </>
  );
}
