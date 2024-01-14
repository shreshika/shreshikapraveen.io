import React from 'react'



const Skills = () => {
  return (
    <motion.div className="container">
            <motion.div className="box" whileHover={{color:'magenta'}}>
                <h2>Projects</h2>
                <img src="hero2.jpeg"/>
                <p><i>
  Developed projects encompassing data mining, machine learning algorithms, REST APIs, a chatbot, and a vaccination portal. All my projects are my footprints on the trail of technology exploration 
  </i></p>
                
                <button>    Checkout   </button>
            </motion.div>
            <motion.div className="box" whileHover={{color:'magenta'}}>
                <h2>Certifications </h2>
                <img src="hero2.jpeg"/>
                <p><i>
Awarded certifications in a spectrum of domains, including full stack development, object-oriented programming (OOP), deep learning, machine learning, and Business English Communication (BEC). </i></p>
                <button>  Checkout  </button>
            </motion.div>
            <motion.div className="box" whileHover={{color:'magenta'}}>
                <h2>Experience</h2>
                <img src="hero2.jpeg"/>
                <p><i>
I began my journey as a full-stack developer intern, then pursued a master's degree before taking on the role of a teaching assistant. Now, I am actively seeking an opportunity to kick-start my career.</i></p>
                <button onClick={()=>{
                    setGotoContact(true);
                }}>  Checkout  </button>
            </motion.div>
        </motion.div>
  )
}

export default Skills