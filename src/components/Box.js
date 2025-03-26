import React from 'react'
import './Box.css'
import { motion} from "motion/react"


export default function Box(props) {
  // const scrollProg = useScroll().scrollYProgress
  return (
    <div className="myInfo">
      <div className="image">
        <a href={props.a} target="_blank" rel="noopener noreferrer">
          <motion.img
            alt=""
            height={props.height}
            width={props.width}
            src={props.src}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              margin: "-50px",
            }}
          />
        </a>
      </div>
      <div className="column">
        <motion.h1
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            margin: "-50px",
          }}
          transition={{
            duration: 1,
          }}
        >
          {props.h1}
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 3,
          }}
          viewport={{
            amount: "-20px",
          }}
        >
          {props.p}
        </motion.p>
      </div>
    </div>
  );
}
