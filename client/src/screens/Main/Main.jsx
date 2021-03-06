import Navbar from '../../components/Navbar/Navbar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer';
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
      <Navbar />
      <About/>
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
};

export default Main;