import './App.css';
import React from 'react';
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer"
import ScrollUp from "./components/ScrollUp/ScrollUp"
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <>
    <Header />

    <main className="App">
      <Home />
      <About />  
      <Skills /> 
      <Qualification />
      <Portfolio />
      <Contact />
      </main>

      <Footer />
      
      <ScrollUp />

      
    
    </>
  );
}

export default App;
