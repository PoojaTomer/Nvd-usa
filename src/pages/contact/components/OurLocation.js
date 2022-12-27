
import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid';
export default function OurLocation(props) {
    return (
        <section className="contact-sec1">
        <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
            <div className="row">
                <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100" data-aos-offset="0">
                    <div className="address-sec">
                        <div className="ad-icon"><img src={IMAGES.contactPage.IconUsa} alt="Usa" /></div>
                        <h3><img src={IMAGES.homepage.UsaFlag} alt="usa flag" /> USA</h3>
                        <h5>New Vision Digital INC</h5>
                        <ul>
                            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>1317 Edgewater Dr, Suite 897, Orlando, Florida 32804, US</span></li>
                            <li><FontAwesomeIcon icon={faPhone} /> <a href="tel:+1 (407) 204-0600"><span>+1 (407) 204-0600</span></a></li>
                            <li><FontAwesomeIcon icon={faEnvelope} /> <span>hello@newvisiondigital.co</span></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300" data-aos-offset="0">
                    <div className="address-sec">
                        <div className="ad-icon"><img src={IMAGES.contactPage.IconIndia} alt="India Icon" /></div>
                        <h3><img src={IMAGES.homepage.IndiaFlag} alt="India flag" /> INDIA</h3>
                        <h5>New Vision Digital PVT LTD</h5>
                        <ul>
                            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>Udyog Marg, C 89 c, 2nd Floor, Sector 8, Noida, Uttar Pradesh 201301, IN</span></li>
                            <li><FontAwesomeIcon icon={faPhone} /> <a href="tel:+919818456688"><span>+91 9818456688</span></a></li>
                            <li><FontAwesomeIcon icon={faEnvelope} /> <span>hello@newvisiondigital.co</span></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4" data-aos="zoom-in" data-aos-delay="500" data-aos-offset="0">
                    <div className="address-sec">
                        <div className="ad-icon"><img src={IMAGES.contactPage.IconUae} alt="Uae Icon" /></div>
                        <h3><img src={IMAGES.homepage.UaeFlag} alt="Uae flag" /> UAE</h3>
                        <h5>Global Biz Digital Media</h5>
                        <ul>
                            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>The Curve Building, M-46, Mezzanine floor Plot No. 358-574 Sheikh Zayed Rd, Al Quoz 3, PO Box No. - 391048, Dubai</span></li>
                            <li><FontAwesomeIcon icon={faPhone} /> <a href="tel:+971547064859"><span>+971 54 706 4859</span></a></li>
                            <li><FontAwesomeIcon icon={faEnvelope} /> <span>digital@globalbiz.co</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
