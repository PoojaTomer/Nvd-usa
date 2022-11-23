import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';
export default  function GiantMigration(props) {
    return (
        <section className="portfolio-sec3">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="cen-h">
                        <h2 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Giant <span className='text-orange'>Migration</span></h2>
                    </div>
                </div>
            </div>
           <div className="row">
            <div className="col-md-6">
                <div className='image-box' data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear">
                <img src={IMAGES.portfolioPage.PortfolioGiantMigration} className="img-fluid" alt="Portfolio Giant Migration"/>
                </div>
            </div>
            <div className="col-md-6">
                <ul> 
                    <li data-aos="zoom-in" data-aos-delay="100" data-aos-offset="0"><img src={IMAGES.portfolioPage.Website} className="img-fluid" alt="Website" /><span>Website</span></li>
                    <li data-aos="zoom-in" data-aos-delay="300" data-aos-offset="0"><img src={IMAGES.portfolioPage.SeoMig} className="img-fluid" alt="Seo" /><span>SEO</span></li>
                    <li data-aos="zoom-in" data-aos-delay="500" data-aos-offset="0"><img src={IMAGES.portfolioPage.Smo} className="img-fluid" alt="Smo" /><span>SMO</span></li>
                    <li data-aos="zoom-in" data-aos-delay="700" data-aos-offset="0"><img src={IMAGES.portfolioPage.PaidAds} className="img-fluid" alt="Paid Ads" /><span>Paid Ads</span></li>
                    <li data-aos="zoom-in" data-aos-delay="900" data-aos-offset="0"><img src={IMAGES.portfolioPage.Branding} className="img-fluid" alt="Branding" /><span>Branding</span></li>
                </ul>
                <p data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Giant Migration is an immigration company catering to the diverse immigration needs of people from across the world. We incorporated their vision into our strategies and developed an incredibly informative and directive website.</p>
                <div className="btn-rev" data-aos="fade-up" data-aos-delay="500" data-aos-offset="0"><Link to="/giant-migration" className="btn-1">Read More &nbsp;
                 <FontAwesomeIcon icon={faAngleDoubleRight} className="left-move" /></Link>
            </div>
            </div>
           </div>
        </div>
    </section>
    );
}