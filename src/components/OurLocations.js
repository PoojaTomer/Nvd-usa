import React from 'react';
import { IMAGES } from '../constants/Image-Constant';

export default function OurLocations(props) {
    return (
        <section className="home-sec9">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="cen-h" data-aos="fade-up">
                        <h2>Our <span className="highlight">Locations</span></h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100" data-aos-offset="0">
                    <div className="h-loc-sec">
                        <h3><img src={IMAGES.homepage.UsaFlag} className="img-fluid" alt="usa" /> <span>USA</span></h3>
                        <div className="h-loc-in">
                            <div className="h-logo">
                                <img src={IMAGES.homepage.NvdLogo} className="img-fluid" alt="nvd" />
                            </div>
                            <div className="h-logo-con">
                                <h5>New Vision Digital INC</h5>
                                <p>1317 Edgewater Dr, <span>Suite 897, Orlando, Florida</span> 32804, US</p>
                            </div>
                        </div>
                    </div>   
                </div>
                <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300" data-aos-offset="0">
                    <div className="h-loc-sec">
                        <h3><img src={IMAGES.homepage.IndiaFlag} className="img-fluid" alt="india" /> <span>India</span></h3>
                        <div className="h-loc-in">
                            <div className="h-logo">
                                <img src={IMAGES.homepage.NvdLogo} className="img-fluid" alt="nvd" />
                            </div>
                            <div className="h-logo-con">
                                <h5>New Vision Digital PVT LTD</h5>
                                <p>Udyog Marg, C 89 c, <span>2nd Floor, Sector 8, Noida,</span> Uttar Pradesh 201301, IN</p>
                            </div>
                        </div>
                    </div>   
                </div>
                <div className="col-md-4" data-aos="zoom-in" data-aos-delay="500" data-aos-offset="0">
                    <div className="h-loc-sec">
                        <h3><img src={IMAGES.homepage.UaeFlag} className="img-fluid" alt="use" /> <span>UAE</span></h3>
                        <div className="h-loc-in">
                            <div className="h-logo"> 
                                <img src={IMAGES.homepage.globalbizLogo} className="img-fluid" alt="globalbiz" />
                            </div>
                            <div className="h-logo-con">
                                <h5>Global Biz Digital Media</h5>
                                <p>The Curve Building, M-46,<span> Mezzanine floor Plot No. 358-574</span> Sheikh Zayed Rd, Al Quoz 3, <span>PO Box No. - 391048, Dubai</span></p>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </section>
    );
}
