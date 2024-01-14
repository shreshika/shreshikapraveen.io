import "./projects.scss"
import {motion} from "framer-motion"
import React from 'react'
import { Navigate } from "react-router-dom"
import Popup from 'reactjs-popup';



const Projects = () => {
  return (
    <motion.div className="container">
            <motion.div className="box" whileHover={{color:'magenta'}}>
                <h2>Projects</h2>
                <img src="hero2.jpeg"/>
                <p><i>
  Developed projects encompassing data mining, machine learning algorithms, REST APIs, a chatbot, and a vaccination portal. All my projects are my footprints on the trail of technology exploration 
  </i></p>
                <a href="https://github.com/shreshika">
                <button>  Checkout </button>
                </a>
            </motion.div>
            <motion.div className="box" whileHover={{color:'magenta'}}>
                <h2>Certifications </h2>
                <img src="hero2.jpeg"/>
                <p><i>
Awarded certifications in a spectrum of domains, including full stack development, object-oriented programming (OOP), deep learning, machine learning, and Business English Communication (BEC). </i></p>
            <a href="https://drive.google.com/drive/folders/1s62ddoEMelEIdv09OLmjZ6hyEVh4v7Mw?usp=sharing">
                <button>  Checkout  </button>
                </a>
            </motion.div>
            <motion.div className="box" whileHover={{color:'magenta'}}>
                <h2>Experience</h2>
                <img src="hero2.jpeg"/>
                <p><i>
I began my journey as a full-stack developer intern, then pursued a master's degree before taking on the role of a teaching assistant. Now, I am actively seeking an opportunity to kick-start my career.</i></p>
               <Popup trigger={<button>  Checkout  </button>} position={"top center"}>
                <div className="exp">
                    <ol><div><b>Stevens Institute of technology </b></div>
                       <div> <i>Graduate Teaching Assitant </i> </div>
                        <div> <i>Sept 2023-Dec 2023</i> </div>
                        <div><i>Hoboken, NJ</i></div>
                        <div>--------------------------------</div>
                        <div><b>Virtusa Consulting Pvt Ltd </b></div>
                       <div> <i>Full Stack Developer Intern </i> </div>
                        <div> <i>Oct 2021-Apr 2022</i> </div>
                        <div><i>Hyderabad, Telangana</i></div>

                        </ol>
                
                
                
                </div>
               </Popup>

            </motion.div>
            
           
        
    


        </motion.div>
  )
}

export default Projects