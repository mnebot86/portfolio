import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/m.svg';
import NameLogo from '../../assets/images/name.svg';
import './index.scss';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleShowNav = useCallback(() => {
       setShowNav(!showNav)
    }, [showNav])
    
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={Logo} alt="logo" />
                <img className="sub-logo" src={NameLogo} alt="logo" />
            </Link>

            <nav className={showNav ? 'mobile-show': ''}>
                <NavLink onClick={toggleShowNav} exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#777" />
                </NavLink>

                <NavLink onClick={toggleShowNav} exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#777" />
				</NavLink>
				
                <NavLink onClick={toggleShowNav} exact="true" activeclassname="active" className="portfolio-link" to="/projects">
                    <FontAwesomeIcon icon={faSuitcase} color="#777" />
                </NavLink>

                <NavLink onClick={toggleShowNav} exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#777" />
                </NavLink>

                <FontAwesomeIcon icon={faClose} color="#03a9f4" size='3x' className='close-icon' onClick={toggleShowNav} />
			</nav>

			<ul>
				<li>
					<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/miguelnebot/">
						<FontAwesomeIcon icon={faLinkedin} color='##777' />
					</a>
				</li>

				<li>
					<a target="_blank" rel="noreferrer" href="https://github.com/mnebot86">
						<FontAwesomeIcon icon={faGithub} color='#777'/>
					</a>
				</li>
            </ul>

            <FontAwesomeIcon icon={faBars} color="#03a9f4" size="3x" className='hamburger-icon' onClick={toggleShowNav}/>
        </div>
    );
};

export default Sidebar;
