import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function OurApproach(props) {
    return (
        <section className="giantmigration-sec4" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
        <div className="container">
           <div className="row">
            <div className="col-md-6">
              <div className="image-box">
                <img src={IMAGES.homepage.About} className="img-fluid" alt="Our Approach" />   
              </div>  
            </div>
            <div className="col-md-6">
                <div className="h-sec8-h">
                <div className="cen-h">
                    <h2 className='highlight'>Our <span className='text-orange'>Approach</span></h2>
                </div>
              <p>Our main strategy was to create a marketing roadmap that would establish them as a professional, reputable, and credible brand. To accomplish these results, we worked on increasing brand awareness, conversions and unique lead generation across all major social media platforms like Facebook, Instagram, LinkedIn, etc. and obviously on the search engine Mecca, Google. At the same time, we were also focused on maintaining the consistency of the brand to further increase the credibility of the brand and strengthen our outcome.</p>
                </div>
            </div>
           </div>
        </div>
    </section>
    );
}
