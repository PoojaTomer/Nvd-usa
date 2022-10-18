import React from 'react';
import ApplyForInternshipButton from '../../../components/ApplyForInternshipButton';
import { IMAGES } from '../../../constants/Image-Constant';

export default function Opening(props) {
    return (
        <section className="internship-sec2">
        <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="hover-img">
                        <img src={IMAGES.intershipPage.IntershipImg} className="img-fluid" alt="Internship" />
                    </div>
                </div>
                <div className="col-md-6">
                <h2 className="text-left">Internship <span className="highlight">Openings</span></h2>
                <p>The early bird catches the worm. Here’s, calling early birds who have discovered their love for digital marketing but are struggling to find the right path. We see you and would love to hear from you. Here’s your opportunity to land a digital marketing internship with us. If your energy is infectious, we are ready to be stung by it.</p>
                <p>With New Vision Digital, you will have the opportunity to work on tasks and receive hands-on experience benefiting you both, professionally and personally. It is a great opportunity for someone who wants to work in an atmosphere where they can put their skills to use while communicating with executives and other teams around the company.</p>
                </div>
            </div>
            <h4 className="text-center mt-5 mb-4">We have opportunities for you to contribute in areas like:</h4>
            <ul className="mb-3">
                <li><img className="img-fluid" src={IMAGES.intershipPage.SocialIcon} alt="Social Media" /><span>Social Media Intern</span></li>
                <li><img className="img-fluid" src={IMAGES.intershipPage.ContentIcon} alt="Social Media" /><span>Content Writer Intern</span></li>
                <li><img className="img-fluid" src={IMAGES.intershipPage.GraphicIcon} alt="Social Media" /><span>Graphic Designer Intern</span></li>
                <li><img className="img-fluid" src={IMAGES.intershipPage.PpcIcon} alt="Social Media" /><span>PPC Intern</span></li>
                <li><img className="img-fluid" src={IMAGES.intershipPage.DigitalIcon} alt="Social Media" /><span>Digital Marketing Intern</span></li>
            </ul>
            <center><ApplyForInternshipButton Title="Apply Here" /></center>
        </div>
    </section>
    );
}
