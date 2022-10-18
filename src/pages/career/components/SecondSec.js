import React from 'react';
import ApplyForCareerButton from '../../../components/ApplyForCareerButton';
import { IMAGES } from '../../../constants/Image-Constant';

export default function SecondSec(props) {
    return (
        <>
        <section className="career-sec3">
            <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
                <div className="row">
                    <div className="col-md-6">
                        <img src={IMAGES.careerPage.CareerAbout} className="img-fluid" alt="career" />
                    </div>
                    <div className="col-md-6">
                        <h2><span className='text-orange'>Wondering</span> if you are a good fit?</h2>
                        <h4>Do you aspire to be the best in your niche? These are the qualities we're searching for in a professional:</h4>
                        <ul>
                            <li>A proactive approach towards work.</li>
                            <li>Believes in collaborative working if and when necessary.</li>
                            <li>Can work well with deadlines.</li>
                            <li>Brings ideas to the table.</li>
                        </ul>
                     <ApplyForCareerButton Title="Join Our Team" />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
