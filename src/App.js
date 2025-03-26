// import "./images/IMG_1565.png";
import g from "./images/github.svg";
import i from "./images/instagram.svg";
import l from "./images/linkedin.svg";
import m from "./images/mail.svg";
import { motion } from "motion/react";
import "./App.css";
import Navbar from "./components/Navbar";
import Box from "./components/Box";
import Forms from "./components/Forms";

function App() {
  return (
    <div className="App" id="App">
      <div className="zyada">
        <motion.h1
          className="title"
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          Welcome to Aryan's World
        </motion.h1>
      </div>
      <Navbar />
      <Box
        className="me"
        h1="Hello Everybody , Aryan Goyal this side , I live in Vasundhara Enclave , New Delhi"
        p="I'm a front-end developer passionate about creating
          user-friendly websites, with a love for music (guitar and keyboard)
          and sports, driving my creativity and growth in coding, music, and
          physical activity."
        src="https://flash-app-gasper.sdslabs.org/images/me.png"
        height="400px"
        width="300px"
      />
      <div className="zyada">
        <motion.h1
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1.5,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          What am I doing right now
        </motion.h1>
      </div>
      <Box
        className="tl"
        h1="Tinkering Labs"
        p="As a software developer at Tinkering Labs, I work on
              exciting projects involving drones, motion sensors, and AR/VR
              technologies, expanding my skills in both traditional and
              immersive tech."
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsVby6sXkx6osxGmhbrybfX5gC9uuWKwecQ&s"
        a="https://tinkeringlab.iitr.ac.in"
      />
      <Box
        className="sds"
        h1="SDSLabs"
        p="I joined as a full-stack web developer at SDSLabs in February
              2025, working on diverse projects to master front-end and back-end
              development and create impactful, meaningful solutions."
        src="https://pbs.twimg.com/ext_tw_video_thumb/1317467996869128192/pu/img/qEJBxmjWRRzKVDmH?format=jpg&name=large"
        a="https://sdslabs.co"
        height="100px"
        width="250px"
      />
      <div className="zyada">
        <motion.h1
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1.5,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          Few Achievments
        </motion.h1>
      </div>
      <Box
        className="mira"
        h1="My 1st hackthon win"
        p="Winning my first hackathon</b> The MIRA Hackathon, fueled my
              passion for innovation and motivated me to keep pushing forward in
              tech through teamwork, problem-solving, and tight deadlines."
        src="https://flash-app-gasper.sdslabs.org/images/mira.png"
        height="250px"
        width="250px"
        a="https://www.instagram.com/p/DFWos78SyzC/?img_index=3"
      />
      <Box
        className="paac"
        h1="Site selection in PAAC"
        p="Creating the PAAC site and being one of only 9 students selected out of hundreds validated my hard work and motivated me to continue growing as a
          developer."
        src="https://flash-app-gasper.sdslabs.org/images/paac.png"
        a="https://github.com/Aryan-Go/paac-web"
        height="300px"
        width="300px"
      />
      <div className="zyada">
        <motion.h1
          id="lists"
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1.5,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          A number of sites that I have made
        </motion.h1>
      </div>
      <Box
        className="mirify"
        h1="Mirify website"
        p="Winning the Miraculous Hackathon with an AI-powered music generation tool was the perfect culmination of technical skills, creativity, and
          teamwork under tight deadlines."
        a="https://github.com/Aryan-Go/minify-project-MAIN-TEAM-AICOD-"
        src="https://flash-app-gasper.sdslabs.org/images/mirify.png"
        height="300px"
        width="350px"
      />
      <Box
        className="jee"
        h1="JEE Buddy"
        p=" My first hackathon project, JEE BUDY, helped
          students prepare for the JEE exams, and winning it motivated me to continue improving as a developer."
        a="https://github.com/SiddharthChopra28/anacondas"
        src="https://www.myexambuddy.com/images/logo-login.png"
      />
      <Box
        className="torque"
        h1="Jee and Jarvis"
        p="I created a JEE site with AI-powered assistant JARVIS,
          and winning with this innovative integration fueled my passion for
          combining AI and education in future projects."
        height="200px"
        width="400px"
        a="https://github.com/Aryan-Go/Torque_hackathon_project"
        src="https://flash-app-gasper.sdslabs.org/images/torque.png"
      />
      <Box
        className="mirify"
        h1="MERA SAFAR"
        p="I explored blockchain technology by creating
          a decentralized auction platform to help
          users find the best trip prices, showcasing its practical applications in price optimization and security."
        height="200px"
        width="200px"
        src="https://flash-app-gasper.sdslabs.org/images/mera_safar.png"
        a="https://github.com/Aryan-Go/trip_blockchain"
        src2=""
      />
      <div className="zyada">
        <motion.h1
          className="chalo2"
          id="chalo2"
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1.5,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          For contacting me
        </motion.h1>
      </div>
      <Forms />
      <div className="details">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img className="github" src={g} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/aryan-goyal-81875b203/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="linkedin" src={l} alt="" />
        </a>
        <a
          href="https://www.instagram.com/aryangoyal313/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={i} className="insta" alt="" />
        </a>
        <a href="mailto:goyal.aryan@gmail.com">
          <img className="gmail" src={m} alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;
