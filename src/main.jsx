import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero'
import TechStack from './TechStack'
import Filler from "./Filler"
import About from "./AboutMe"
import GradiantFiller from './GradiantFiller'
import Projects from "./Projects"
import ContactMe from './ContactMe'
import Nav from "./Nav"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav /> 
    <Hero />
    <GradiantFiller />
    <TechStack/>  
    <About />
    <Filler />
    <Projects />
    <ContactMe />
  </StrictMode>,
)
