// import logo from './logo.svg';
// import react from 'react';
import './images/IMG_1565.png'
import { motion } from "motion/react"
import './App.css'
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Index from '../public/index.html';
import Navbar from './components/Navbar';
import Box from './components/Box';
import Forms from './components/Forms'

function App() {
  return (
      <div className="App"
        id='App'>
        <motion.h1 
        className='title'
        animate={{
          x:['-100%',"100%"],
          // scale:[0,1]
        }}
        transition={{
          duration:10,
          repeat:Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}
        >My Portfolio Site</motion.h1>
        <Navbar />
        <Box h1="Hello Everybody , Aryan Goyal this side , I live in Vasundhara Enclave , New Delhi" p="I’re a **front-end developer** with a passion for creating engaging, user-friendly websites. Beyond coding, I’re also excited about **music**, especially playing the **guitar** and **keyboard**, which adds a creative flair to Ir life. When I’re not coding or jamming, I love to **play sports**, embracing both physical activity and teamwork. It’s clear I have a diverse set of interests that fuel Ir creativity and drive for growth—whether it’s through building websites, making music, or staying active with sports. Keep pushing Ir boundaries in all these areas!" height="400px" width="300px" src='https://flash-app-gasper.sdslabs.org/images/me.png'/>
        <motion.h1
        animate={{
          x:['-100%',"100%"],
          // scale:[0,1]
        }}
        transition={{
          duration:10,
          repeat:Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}>What am I doing right now</motion.h1>
        <Box h1="Tinkering Labs" p="I’m currently working as a software developer at Tinkering Labs, where I’m involved in a variety of exciting projects. Our team frequently engages in discussions about drones, motion sensors, and other cutting-edge technologies. One of the most fascinating aspects of our work is the integration of the metaverse, which includes augmented reality (AR) and virtual reality (VR). This adds a whole new layer of excitement and innovation to our projects. The collaborative environment allows me to explore new ideas, develop software solutions, and expand my skills in both traditional and immersive technologies. I’m excited to continue contributing to the team and learning from these hands-on experiences in such a dynamic and creative setting." height="200px" width="200px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsVby6sXkx6osxGmhbrybfX5gC9uuWKwecQ&s" a="https://tinkeringlab.iitr.ac.in"/>
        <Box h1="SDSLabs" p="I joined the club as a developer in February 2025, and since then, I’ve been actively working on a variety of projects while also enhancing my skills through lectures and hands-on experience. As a full-stack web developer, I've had the opportunity to dive into both front-end and back-end development, tackling real-world challenges and learning new technologies along the way. I’m passionate about mastering every aspect of web development, from design to deployment, with the aim of building something truly impactful and useful. I’m excited to continue this journey of growth and contribute to meaningful projects in the future."
        height="100px" width="200px" src="https://pbs.twimg.com/ext_tw_video_thumb/1317467996869128192/pu/img/qEJBxmjWRRzKVDmH?format=jpg&name=large" a="https://sdslabs.co"  />
        <motion.h1
        animate={{
          x:['-100%',"100%"],
          // scale:[0,1]
        }}
        transition={{
          duration:10,
          repeat:Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}>Few Achievments</motion.h1>
        <Box h1="My 1st hackthon win" p="Winning my first hackathon, the MIRA Hackathon, was an absolutely mesmerizing experience. The feeling of accomplishment and excitement was overwhelming as the announcement was made. I had put in so much effort, collaborating with my team, tackling challenges, and refining our project under tight deadlines. When we were declared the winners, it felt like all that hard work had truly paid off. The rush of pride and joy was unlike anything I had ever experienced before, and it was a moment I’ll never forget. It fueled my passion for problem-solving and innovation, and it motivated me to keep pushing myself in the world of hackathons and tech." height="200px" width="150px" src="https://flash-app-gasper.sdslabs.org/images/mira.png" a="https://www.instagram.com/p/DFWos78SyzC/?img_index=3"/>
        <Box h1="Site selection in PAAC" p="Creating the PAAC site with all my knowledge and effort was an incredibly rewarding experience. I poured my heart into every line of code, using everything I had learned to bring the project to life. When I found out that out of hundreds of students, only 9 were selected—and I was one of them—it was an indescribable feeling. The recognition felt like a validation of all the hard work and dedication I had put into the project. It was a moment of immense pride and accomplishment, knowing that my skills had earned me a spot among such a small, elite group. That feeling of being chosen for something I worked so hard on was truly amazing and has motivated me to keep pushing forward in my journey as a developer."
        height="250px" width="250px" src="https://flash-app-gasper.sdslabs.org/images/paac.png" a="https://github.com/Aryan-Go/paac-web"/>
        <motion.h1
        id='lists'
        animate={{
          x:['-100%',"100%"],
          // scale:[0,1]
        }}
        transition={{
          duration:10,
          repeat:Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}>A number of sites that I have made</motion.h1>
        <Box h1="Mirify website" p="The website that led me to my first victory in the Miraculous Hackathon was a truly challenging and rewarding experience. We focused on integrating AI and large language models (LLMs) to create a music generation tool. The project was incredibly difficult, requiring not just technical skills but also time management, as every minute counted under the tight deadlines. Despite the pressure, I learned a lot about teamwork, collaborating closely with my team to brainstorm ideas, divide tasks, and refine the project. The ideation process for the music generation aspect was both creative and technical, as we worked to make the AI generate unique and harmonious tunes. It was a deeply fulfilling experience, and winning the hackathon felt like the perfect culmination of all the hard work, creativity, and collaboration that went into the project."
        height="200px" width="350px" a="https://github.com/Aryan-Go/minify-project-MAIN-TEAM-AICOD-" src="https://flash-app-gasper.sdslabs.org/images/mirify.png"/>
        <Box h1="JEE Buddy" p="The first hackathon project I ever made was **JEE BUDY**, and it was a truly memorable experience. The platform was designed to help students prepare for the JEE exams by combining both theory and practicals. It featured a comprehensive collection of questions and answers for both JEE Mains and JEE Advanced, offering students a valuable resource for practice. Additionally, I incorporated various calculators to assist with time management and problem-solving, such as a speed and distance calculator, and a rank predictor. Building **JEE BUDY** was an amazing challenge that allowed me to apply my skills in both front-end and back-end development, and the positive feedback from the hackathon made the experience even more rewarding. It was my first time integrating these features into a single platform, and winning the hackathon with this project gave me a strong sense of accomplishment and motivated me to keep improving my skills as a developer."
        a="https://github.com/SiddharthChopra28/anacondas" src="https://www.myexambuddy.com/images/logo-login.png" />
        <Box h1="Torque formation" p="Another JEE site I created during the hackathon was similar to **JEE BUDY**, featuring both theory and practicals, along with a collection of questions and answers for JEE Mains and JEE Advanced. I also included several useful calculators to aid students in their preparation, just like in my first project. However, what set this site apart was the addition of **JARVIS**, an AI-powered speaking assistant for students. JARVIS was designed to assist users by answering questions, guiding them through the platform, and offering helpful tips for JEE preparation. The AI interaction made the site more engaging and user-friendly, giving students a personal assistant to help them with their studies. Building this version of the site was another great challenge, and I’m proud of how it turned out. The incorporation of AI into the learning process not only made the site more interactive but also added an innovative touch that made it stand out during the hackathon. Winning with this project was an incredible experience that fueled my passion for combining AI and education in future projects."
        height="200px" width="400px" a="https://github.com/Aryan-Go/Torque_hackathon_project" src="https://flash-app-gasper.sdslabs.org/images/torque.png" />
        <Box h1="MERA SAFAR" p="In this project, I had the opportunity to dive deep into **blockchain** technology alongside my teammates, and it was an incredible learning experience. The project itself was centered around providing users with an efficient way to find the best price for their trips. Here’s how it worked: 1. **User Input:** The user would enter information about their planned trip, such as destination, dates, and preferences. 2. **Auction Process:** The trip details would then be sent to a blockchain-based auction, where various service providers could bid on the trip. 3. **Price Selection:** Once the auction was completed, the lowest price from the bids would be selected, and this price would be presented to the user, ensuring they get the best deal. Working with blockchain in this context was fascinating. We used it to create a transparent, secure, and decentralized auction process, ensuring that both users and service providers could trust the platform. This project helped me understand the practical applications of blockchain in real-world scenarios, and it was amazing to see how the technology can be used to solve complex problems like price optimization. It was an incredibly rewarding experience, and I’m excited to explore more blockchain projects in the future!"
        height="200px" width="200px" src="https://flash-app-gasper.sdslabs.org/images/mera_safar.png" a="https://github.com/Aryan-Go/trip_blockchain" src2=""/>
        <motion.h1
        className='chalo2'
        id='chalo2'
        animate={{
          x:['-100%',"100%"],
          // scale:[0,1]
        }}
        transition={{
          duration:10,
          repeat:Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}>For contacting me</motion.h1>
        <Forms />
        <div class="details">
            <p>My phone number = 9311860969</p>
            <p>My email id =  goyal.aryan@gmail.com</p>
            <p>My instagram id = @aryangoyal313</p>
            <p>My address = Abhinav Apartments , Vasundhara Enclave , New Delhi</p>
        </div>
      </div>
  );
}

export default App;
