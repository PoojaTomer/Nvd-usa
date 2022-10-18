import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
                                <h6 className='highlight'>Partner With Result Driven</h6>
                                <h1>Digital Marketing Agency in <span>USA</span></h1>
                                <p><strong>Looking for the best agency in USA for your business?</strong> New Vision Digital has 15+ years of experience in SEO industry.</p>
                                <h5>Our Efforts Help businesses to Achieve:</h5>
                                <ul>
                                    <li data-max="75">% <span>Increment in Organic Search Traffic</span></li>
                                    <li data-max="100">+ <span>Keywords</span></li>
                                    <li data-max="150">% <span>Increase in leads</span></li>
                                </ul>
                                {/* <div class="counter" data-target="300000">1000</div>
                                <div class="counter" data-target="200000">0</div> */}
                                 <div className="slider-quote">
                                    <GetAQuoteButton Title="Get A Free Consultation" />
                                    {/* <a onClick={props.handleClick} className="btn-1">Get A Free Consultation</a> */}
                                    <Link to="/services" className="btn-2">View Services</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        {/* <img src={IMAGES.homepage.Banner} className="img-fluid" alt="banner" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
