import react from 'react';
import { aboutMe } from '../data/data';
import ScrollToTop from '../scrolltotop/scrolltotop'
import './footer.scss'
export const Footer = (props) => {
    return (
        <div className="footer__class">
            <div id="contact-wave" class="css-12m8vx3 ehoxvtz0">
                <svg viewBox="0 0 1695 57" preserveAspectRatio="none">
                    <path d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1 1395.8.9 1556.7 8.3 1695 23v34H0V23z" fill="rgba(255,255,255,1)" fill-rule="evenodd"></path>
                </svg>
            </div>
            <div className="footer__content">
                <p> Created in {"2021"}</p>
                <p> Created by {aboutMe.name}</p>
                <p> Created Using React Framework</p>
            </div>
            <ScrollToTop />
            {false && <div id="wave-container" class="css-0 eepbx3x0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,229.3C384,245,480,203,576,197.3C672,192,768,224,864,240C960,256,1056,256,1152,218.7C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></div>}
        </div>
    )
}