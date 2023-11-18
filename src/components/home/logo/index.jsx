import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import LogoM from '../../../assets/images/m.svg';
import './index.scss';

const Logo = () => {
    const bgRef = useRef();
    const solidLogoRef = useRef();

    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        setIsDrawing(true);

        gsap.fromTo(
            bgRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 4,
            }
        );

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        );
    }, []);

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className="solid-logo"
                src={LogoM}
                alt="solid logo"
                ref={solidLogoRef}
            />

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 674 597"
                className={`drawing-svg ${isDrawing ? 'drawing' : ''}`}
            >
                <path
                    stroke="#FFF"
                    strokeWidth="4"
                    d="M97 2v592.5M97 2h170l76.029 235M97 2H2v532.5l95 60m0 0h120v-75m125 75L217 297v222.5m125 75h110l6.387-20M342 594.5l-92.5-20-32.5-55m330 75V297l-88.613 277.5m88.613 20h125V2H507m40 592.5l-88.613-20M507 2L404.5 427l-61.471-190M507 2H404.5l-61.471 235"
                ></path>
            </svg>
        </div>
    );
};

export default Logo;
