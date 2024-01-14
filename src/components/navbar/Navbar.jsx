import "./Navbar.scss"
import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <motion.span
            initial= {{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{delay:0.2, duration:0.5}}
            >
             Shreshika Praveen Portfolio 
            </motion.span>
            <motion.div
            initial= {{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{delay:0.5, duration:0.5}}
            className="social">
            <a href="https://www.linkedin.com/in/shreshika-praveen-nayani-852a591a8/"><img src="/linkedin.png"/></a>
            <a href="#"><img src="/gram.png"/></a>
            <a href="#"><img src="/giticon.png"/></a>
            </motion.div>
    </div>
    </div>
   
  )
}

export default Navbar