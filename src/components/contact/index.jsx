import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../animatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
	const refForm = useRef();

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const hoverEffect = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(hoverEffect);
    }, []);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'gmail',
				'template_gmoazfp',
				refForm.current,
				'ePY6qme0b_IofPWlH'
		).then(() => {
			alert('Message successfully sent!');
			window.location.reload(false)
		},
			() => {
			alert('Failed to send the message, please try again')
		})
	};

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[
                                'C',
                                'o',
                                'n',
                                't',
                                'a',
                                'c',
                                't',
                                ' ',
                                'm',
                                'e',
                            ]}
                            idx={15}
                        />
                    </h1>

                    <p>
                        I am interested in freelance opportunities - especially
                        on ambitious or large projects. However, if you have any
                        other requests or questions, don&#39;t hesitate to
                        contact me using below form either.
                    </p>

                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>

                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>

                                <li>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                    />
								</li>
								
								<li>
									<textarea placeholder='Message' name="message" required/>
								</li>

								<li>
									<input type="submit" className='flat-button' value="SEND" />
								</li>
                            </ul>
                        </form>
                    </div>
				</div>
				
				<div className="info-map">
					Miguel Nebot,
					<br />
					USA
					<br />
					Providence,
					<br />
					Rhode Island
					<span>mnebotjr@gmail.com</span>
				</div>

				<div id="map" className="map-wrap">
					<MapContainer center={[41.825226, -71.418884]} zoom={13}>
						<TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
						<Marker position={[41.825226, -71.418884]}>
							<Popup>Miguel live here, lets get a cup of coffee :)</Popup>
						</Marker>
					</MapContainer>
				</div>
            </div>

            <Loader type="pacman" />
        </>
    );
};

export default Contact;
