import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
      <Home/>
      <About/>
      <Projects />
      <Contact/>
    </div>
  );
};

export default Main;