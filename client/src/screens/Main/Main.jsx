import './Main.css'
import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import React from 'react';
const Main = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Main;