import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function Objectives(props) {
    return (
        <section className="giantmigration-sec3">
        <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
            <div className="row">
                <div className="col-md-12">
                    <div className="cen-h">
                        <h2>Objectives</h2>
                    </div>
                </div>
            </div>
           <div className="row">
            <div className="col-md-3 d-flex">
                <div className="objective-box">
                    <img src={IMAGES.giantMigration.Objective1} className="img-fluid" alt="Establish" />
                    <h5>To establish the legitimacy of the business</h5>
                </div>
            </div>
            <div className="col-md-3 d-flex">
                <div className="objective-box">
                    <img src={IMAGES.giantMigration.Objective1} className="img-fluid" alt="Getting quality" />
                    <h5>Getting quality leads</h5>
                </div>
            </div>
            <div className="col-md-3 d-flex">
                <div className="objective-box">
                    <img src={IMAGES.giantMigration.Objective1} className="img-fluid" alt="To improve" />
                    <h5>To improve the company’s ranking on search engines</h5>
                </div>
            </div>
            <div className="col-md-3 d-flex">
                <div className="objective-box">
                    <img src={IMAGES.giantMigration.Objective1} className="img-fluid" alt="Enhancing " />
                    <h5>Enhancing engagement through social media</h5>
                </div>
            </div>
           
           </div>
        </div>
    </section>
    );
}
