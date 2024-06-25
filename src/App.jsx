import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Footer from './components/footer/Footer'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Protfolio from './components/protfolio/Protfolio'
const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Protfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App