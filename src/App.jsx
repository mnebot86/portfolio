import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/layout';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Route>
        </Routes>
    );
}

export default App;
 