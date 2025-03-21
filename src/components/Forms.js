import React from 'react'
import './Forms.css'
import { motion } from "motion/react"
export default function Forms() {
  return (
    <>
        <div className="center">
            <motion.h1
            className='chalo'
            initial={{
                opacity:0
              }}
              whileInView={{
                opacity:1
              }}
              transition={{
                duration:2
              }}
              viewport={{
                amount:"-200px"}}>Chalo baatein karte hain</motion.h1>
            <form
            >
                <label>What is Is your name</label>
                <br/>
                <input type="text" name="name" placeholder="Aryan Goyal"/>
                <br/>
                <label>What is Is your email id</label>
                <br/>
                <input type="email" name="email" placeholder="goyal.aryan@gmail.com"/>
                <button type="submit">Looks good</button>
            </form>
        </div>
    </>
  )
}
