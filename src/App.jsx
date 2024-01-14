import  useState  from 'react'

import "./app.scss"
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import { color } from 'framer-motion'
import { motion } from "framer-motion"
import Projects from './components/skills/projects/Projects'
import Contact from './components/Contact/Contact'

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Certifications from './components/Certifications/Certifications'



function App() {
  return (
    <div>
      <section>
      <Navbar />
      <Hero/></section>
      <section> <Projects/>
      </section>
     
    
      <section>
        <Contact/>
      </section>
      
      
    </div>
   
  )
}

export default App
