import React from 'react';
import ApplyForInternshipButton from '../../../components/ApplyForInternshipButton';
import { IMAGES } from '../../../constants/Image-Constant';

export default function ComeJoinUs(props) {
    return (
        <section className="internship-sec3">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                <h2 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Do you have it in you? <span className="text-orange">Come Join Us!</span></h2>
                <p className="text-center mb-4" data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Self-driven, motivated, and zealous candidates, ready to make an immediate measurable impact on the world and bring innovative ideas, services, and products to life. We're on the lookout for internet marketing trailblazers with a passion for digital marketing.</p>
                <center data-aos="fade-up" data-aos-delay="500" data-aos-offset="0"><ApplyForInternshipButton Title="Join Us Today" /></center>
                </div>
                <div className="col-md-6">
                    <img src={IMAGES.intershipPage.ReadyJoin} className="img-fluid" alt="Internship"  data-aos="zoom-in"/>
                </div>
            </div>
        </div>
    </section>
    );
}
