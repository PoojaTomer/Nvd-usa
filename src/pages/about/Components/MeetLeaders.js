import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function MeetLeaders(props) {
    return (
        <section className="about-sec3">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="cen-h">
                    <h2>Meet the <span className='highlight'>Leaders</span></h2>
                    <p>With over 10 years of experience, we have got a well-seasoned team at the helm.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                {/* <!--start-profile--> */}
                <div className="about-profile" data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">
                    <div className="row">
                        <div className="col-md-4">
                         <div className="user-p-img">
                             <img src={IMAGES.aboutPage.sumitTayal} alt="Sumit Tayal" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear"/>
                         </div>   
                        </div>
                        <div className="col-md-8">
                            <div className="user-p-con">
                                <h3 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Sumit Tayal</h3>
                                <h5 data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Founder & CEO</h5>
                                <p data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">The man behind the success of New Vision Digital as a digital marketing agency, Sumit Tayal, is a born leader. With his analytical bend of mind and in-depth knowledge of business operations, he makes sure to deliver results that elevate brands. As the powerhouse of ideas and the backbone of NVD, Mr Sumit comes up with innovative and result-driven approaches that deliver measured benefits to clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
               {/* * <!--end-profile--> */}
               
            </div>
        </div>
    </div>
</section>
    );
}
