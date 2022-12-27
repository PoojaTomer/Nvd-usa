import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import GetAQuoteButton from '../../../components/GetAQuoteButton';
import { IMAGES } from '../../../constants/Image-Constant';

export default function Banner(props) {
    
    return (
        <section className="slider-sec">
        <div className="slider-img">
            <img src={IMAGES.homepage.Banner} className="img-fluid" alt="banner" />
            <div className="over-slider-con">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="slider-con">
                                <div className="mobile-banner">
                                <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-easing="linear">Partner With Result Driven</h6>
                                <h1 data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear">Digital Marketing Agency in <span>USA</span></h1>
                                <p data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear"><strong>Looking for the best agency in USA for your business?</strong></p>
                                </div>
                                <p data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">New Vision Digital has 15+ years of experience in SEO industry.</p>
                                <h5 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Our Efforts Help businesses to Achieve:</h5>
                                <ul className="counter">
                                    <li className="increase" data-max="75" data-aos="fade-up" data-aos-delay="100" data-aos-offset="0"><span><CountUp end={75} />% </span><p>Increment in Organic Search Traffic</p></li>
                                    <li className="keywords" data-max="100" data-aos="fade-up" data-aos-delay="300" data-aos-offset="0"><CountUp end={100} />+ <p>Keywords</p></li>
                                    <li className="leads" data-max="150" data-aos="fade-up" data-aos-delay="500" data-aos-offset="0"><CountUp end={150} />% <p>Increase in leads</p></li>
                                </ul>
                                 <div className="slider-quote" data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">
                                    <GetAQuoteButton Title="Get A Free Consultation" />
                                    {/* <a onClick={props.handleClick} className="btn-1">Get A Free Consultation</a> */}
                                    <Link to="/services" className="btn-2">View Services</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
