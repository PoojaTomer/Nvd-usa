
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { faAngleUp, faEnvelope, faMapMarkerAlt, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SOCIAL_LINK } from '../constants/Constants';
import { IMAGES } from '../constants/Image-Constant';

function Footer(props) {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    window.addEventListener('scroll', toggleVisible);
    return (
        <>
        <footer>
        <div className="top-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-logo">
                            <Link to="/">
                                <img src={IMAGES.footerImg.FooterLogo} alt="header-logo" />
                            </Link>
                        </div>
                        <div className="footer-con">
                            <p>New Vision Digital is an innovative online marketing agency offering a myriad of integrated web marketing services to business across the world.</p>
                            <ul>
                                <li><img src={IMAGES.footerImg.BingAds} className="img-fluid" alt="Bing ads"/></li>
                                <li><img src={IMAGES.footerImg.GooglePartner} className="img-fluid" alt="google ads"/></li>
                                <li><img src={IMAGES.footerImg.Facebook} className="img-fluid" alt="facebook ads"/></li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5>Important Links</h5>
                        <div className="quick-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Our Services</Link></li>
                            <li><a href="https://phpstack-281388-2949987.cloudwaysapps.com/blog/">Blog</a></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/internship">Internship</Link></li>
                            <li><Link to="/career">Carrer</Link></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-3">
                        <h5>Our Services</h5>
                        <div className="quick-links">
                        <ul>
                            <li><Link to="/search-engine-optimization">Search Engine Optimization</Link></li>
                            <li><Link to="/social-media-marketing">Social Media Optimization</Link></li>
                            <li><Link to="/online-reputation-management">Online Reputation Management</Link></li>
                            <li><Link to="/php-development">PHP Development</Link></li>
                            <li><Link to="/wordpress-development">Wordpress Development</Link></li>
                            <li><Link to="/mobile-apps-development">Mobile Apps Development</Link></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-3">
                        <h5>Reach Us</h5>
                        <div className="reach-us">
                            <ul>
                                <li><FontAwesomeIcon icon={faMapMarkerAlt} /> The Curve Building, M-46, Mezzanine floor Plot No. 358-574 - Shiekh Zayed Rd, AI Quoz 3, PO Box No. - 391048, Dubai, United Arab Emirates</li>
                                <li><FontAwesomeIcon icon={faPhone}/> <a href="tel:+97143321990">+971 4332 1990</a></li>
                                <li><FontAwesomeIcon icon={faEnvelope}/> <a href="mailto:hello@newvisiondigital.co">hello@newvisiondigital.co</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-footer">
            <div className="container">
                <p>© 2022 All rights reserved.</p>  
            </div>
        </div>  
    </footer>
    <a id="back-to-top" className="btn btn-light btn-lg back-to-top" role="button" style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}>  <FontAwesomeIcon icon={faAngleUp} /></a>
    <a
          href="https://wa.me/+971547064859"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FontAwesomeIcon icon={faMessage} className="whatsapp-icon" color="#fff" />
        </a>
        <ul className="social-float">
        <li>
            <a href={SOCIAL_LINK.FACEBOOK} target="_blank"><FaFacebookF /></a>
        </li>
        <li>
            <a href={SOCIAL_LINK.TWITTER} target="_blank"><FaTwitter /></a>
        </li>
        <li>
            <a href={SOCIAL_LINK.INSTAGRAM} target="_blank"><FaInstagram /></a>
        </li>
        <li>
            <a href={SOCIAL_LINK.LINKEDIN} target="_blank"><FaLinkedinIn /></a>
        </li>
    </ul>
    </>
    );
}

export default Footer;