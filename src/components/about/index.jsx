import './index.scss';
import AnimatedLetters from '../animatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faNode,
    faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const hoverEffect = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(hoverEffect);
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    ≈
                    <p>
                        I&#39;m a very ambitious front-end developer looking for
                        a role in an established IT company with the opportunity
                        to work with the latest technologies on challenging and
                        diverse projects.
                    </p>
                    <p>
                        I&#39;m quiet confident, naturally curious, and
                        perpetually working on improving my chops one design
                        problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be
                        a family person, father of two wonderful boys, a
                        youth football coach, dog lover, gamer, art, comics, anime and
                        tech-obsessed!!!
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cube-spinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faNode} color="#6cc24a" />
                        </div>

                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>

                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>

                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>

                        <div className="face5">
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                color="#EFD81D"
                            />
                        </div>

                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>

            <Loader type="pacman" />
        </>
    );
};

export default About;
