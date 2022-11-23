import React from 'react';
import ApplyForCareerButton from '../../../components/ApplyForCareerButton';
import { IMAGES } from '../../../constants/Image-Constant';

export default function SecondSec(props) {
    return (
        <>
        <section className="career-sec3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={IMAGES.careerPage.CareerAbout} className="img-fluid" alt="career" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear"/>
                    </div>
                    <div className="col-md-6">
                        <h2 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0" data-aos-duration="500" data-aos-easing="linear"><span className='text-orange'>Wondering</span> if you are a good fit?</h2>
                        <h4 data-aos="fade-up" data-aos-delay="200" data-aos-offset="0" data-aos-duration="600" data-aos-easing="linear">Do you aspire to be the best in your niche? These are the qualities we're searching for in a professional:</h4>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0" data-aos-duration="700" data-aos-easing="linear">A proactive approach towards work.</li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0" data-aos-duration="800" data-aos-easing="linear">Believes in collaborative working if and when necessary.</li>
                            <li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0" data-aos-duration="900" data-aos-easing="linear">Can work well with deadlines.</li>
                            <li data-aos="fade-up" data-aos-delay="600" data-aos-offset="0" data-aos-duration="1000" data-aos-easing="linear">Brings ideas to the table.</li>
                        </ul>
                     <ApplyForCareerButton Title="Join Our Team" />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
