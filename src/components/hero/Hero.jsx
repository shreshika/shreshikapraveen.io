
import { useNavigate } from 'react-router-dom'
import Contact from '../Contact/Contact'
import './hero.scss'
import { motion } from "framer-motion"
 

const Hero = () => {
  


  return (
    
    <div className='hero'>
     <div  className='imageContainer'>
        <motion.div 
              initial= {{opacity:0, scale:5}}
              animate={{opacity:3, scale:2}}
              transition={{delay:1, duration:1.6}}
        className='exp'>
        <img src='hero1.jpeg' alt=''/>
        </motion.div>
        <motion.div 
        initial={{x:-100, opacity:0, scale:0.1}}
        animate={{x:0, opacity:1,scale:1}}
        transition={{delay:1, duration:2}}
        className='textContainer'>
            <motion.h1
            initial={{opacity:0, scale:10}}
            animate={{opacity:5, scale:1}}
            transition={{delay:1, duration:1.5}}>SHRESHIKA PRAVEEN NAYANI</motion.h1>

            <motion.h4
            initial={{opacity:0, scale:0.2}}
            animate={{opacity:5, scale:1}}
            transition={{delay:2, duration:1.5}}>Web developer, Designer, Engineer</motion.h4>
            
            </motion.div>


        </div>
        </div>

   
        
  )
}

export default Hero