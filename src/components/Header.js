import React, {useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes,faBars,} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/navbar.css";
import "../assets/css/custom.css";
import "../assets/css/megamenu.css";
import { IMAGES } from '../constants/Image-Constant';
import GetAQuote from "./GetAQuote.js";
import MegaMenu from './MegaMenu';


function Header(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
        const handleClose = () => {
        setAnchorEl(null);
        }
    return (
        <>
        <header>
        <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 navbar-s">
            <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <nav className="navbar navbar-expand-lg navbar-light">
                <div className="navbar-collapse collapse navbar-container">
                    <div className='top-con-info'>
                <ul className="nav navbar-nav navbar-left">
                <Link className="navbar-brand" to="/"><img src={IMAGES.headerImg.HeaderLogo} alt="logo"  data-aos="zoom-in" data-aos-delay="100" data-aos-offset="0" className="img-fluid" /></Link>
                <div className="get-btn">
                        <Link onClick={showModal}>Get a Quote</Link>
                    </div>
                            <li className='hidden-xs' data-aos="zoom-in" data-aos-delay="300" data-aos-offset="0"><img src={IMAGES.headerImg.Phone} className="img-fluid" alt="call" /> <span><strong>Call us</strong> <a href="tel:+9715470 64859">+971 5470 64859</a></span></li>
                            <li className='hidden-xs' data-aos="zoom-in" data-aos-delay="500" data-aos-offset="0"><img src={IMAGES.headerImg.Email} className="img-fluid"  alt="email" /> <span><strong>Mail us</strong> <a href="mailto:hello@newvisondigital.co">hello@newvisondigital.co</a></span></li>
                        </ul>
                        </div>
                    {/* <ul className="navbar-nav mr-auto"> */}
                    <ul className={click ? "nav-menu active navbar-nav" : "nav-menu navbar-nav navbar-right"}>
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => isActive ? "current nav-link" : "nav-link"
                              } onClick={closeMobileMenu}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) => isActive ? "current nav-link" : "nav-link"
                              } onClick={closeMobileMenu}>About Us</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            <NavLink to="/services" className={({ isActive }) => isActive ? "current nav-link mega-drop-down" : "nav-link mega-drop-down"
                              } onClick={closeMobileMenu}>Services</NavLink>
                            <MegaMenu />
                        </li>
                    
                        <li className="nav-item">
                            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "current nav-link" : "nav-link"
                              } onClick={closeMobileMenu}>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="https://phpstack-281388-2949987.cloudwaysapps.com/blog/" className="nav-link" onClick={closeMobileMenu}>Blog</a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "current nav-link" : "nav-link"
                              } onClick={closeMobileMenu}>Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link get-quote" onClick={showModal} >Get A Quote</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
</header>

<GetAQuote isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} {...props} />
</>
    );
}

export default Header;