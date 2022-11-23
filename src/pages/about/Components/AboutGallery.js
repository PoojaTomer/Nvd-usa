import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function AboutGallery(props) {
    return (
        <section className="about-sec1">
        <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
            <div className="row">
                <div className="col-md-12">
                    <div className="abimg1">
                        <img src={IMAGES.aboutPage.AboutNvd} alt='About nvd' className="imf-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
