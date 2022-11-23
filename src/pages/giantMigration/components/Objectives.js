import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function Objectives(props) {
    return (
        <section className="giantmigration-sec3">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="cen-h">
                        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">Objectives</h2>
                    </div>
                </div>
            </div>
           <div className="row">
            <div className="col-md-3 d-flex" data-aos="zoom-in" data-aos-delay="500" data-aos-offset="0">
                <div className="objective-box">
                    <img src={IMAGES.giantMigration.Objective1} className="img-fluid" alt="Establish" />
                    <h5>To establish the legitimacy of the business</h5>
                </div>
            </div>
            <div className="col-md-3 d-flex" data-aos="zoom-in" data-aos-delay="600" data-aos-offset="0">
                <div className="objective-box">
                    <img src={IMAGES.giantMigration.Objective2} className="img-fluid" alt="Getting quality" />
                    <h5>Getting quality leads</h5>
                </div>
            </div>
            <div className="col-md-3 d-flex" data-aos="zoom-in" data-aos-delay="700" data-aos-offset="0">
                <div className="objective-box">
                    <img src={IMAGES.giantMigration.Objective3} className="img-fluid" alt="To improve" />
                    <h5>To improve the company’s ranking on search engines</h5>
                </div>
            </div>
            <div className="col-md-3 d-flex" data-aos="zoom-in" data-aos-delay="800" data-aos-offset="0">
                <div className="objective-box">
                    <img src={IMAGES.giantMigration.Objective4} className="img-fluid" alt="Enhancing " />
                    <h5>Enhancing engagement through social media</h5>
                </div>
            </div>
            </div>
        </div>
    </section>
    );
}
