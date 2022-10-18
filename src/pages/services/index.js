import { faList } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';

export default function Services(props) {
    return (
        <>
         <Helmet>
         <title>{props.title}</title>
            <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
            <meta name="keyword" content="Nvd usa" />
         </Helmet>
         <Breadcrumb Title="Services" Image={IMAGES.servicePage.servicesBanner} />
         <section className="service-sec2">
    <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
        <div className="row">
            <div className="col-md-12">
                <h2>Our <span className='highlight'>Services</span></h2>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-4 d-flex">
                <div className="service-box">
                    <div className="service-title">
                    <FontAwesomeIcon icon={faList} />
                    <h4>Digital Marketing</h4>
                    </div>
                <ul>
                    <li><Link to="/search-engine-optimization">Search Engine Optimization</Link></li>
                    <li><Link to="/social-media-marketing">Social Media Marketing</Link></li>
                    <li><Link to="/influencer-marketing">Influencer Marketing</Link></li>
                    <li><Link to="/online-reputation-management">Online Reputation Marketing</Link></li>
                    <li><Link to="/email-marketing">Email Marketing</Link></li> 
                    <li><Link to="/ecommerce-marketplace-management">Ecommerce Marketplace Management</Link></li> 
                </ul>
                <h4>Paid Ads</h4>
                    <ul>
                        <li><Link to="/pay-per-click">PPC</Link></li>
                        <li><Link to="/social-advertising">Social Media Ads</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4 d-flex">
                <div className="service-box active">
                <div className="service-title">
                    <FontAwesomeIcon icon={faList} />
                    <h4>Design & Development</h4>
                    </div>
                    <ul>
                        <li><Link to="/wordpress-development">Wordpress Development</Link></li>
                        <li><Link to="/magento-development">Magento Development</Link></li>
                        <li><Link to="/shopify-development">Shopify Development</Link></li>
                        <li><Link to="/#">React Development</Link></li>
                        <li><Link to="/php-development">PHP Development</Link></li> 
                        <li><Link to="/mobile-apps-development">Mobile App Development</Link></li> 
                    </ul>
                    <h4>Design</h4>
                    <ul>
                        <li><Link to="/website-design">Web Design</Link></li>
                        <li><Link to="/#">Logo Design</Link></li>
                    </ul>
                </div>
            </div>
            
            <div className="col-md-4 d-flex">
                <div className="service-box">
                <div className="service-title">
                    <FontAwesomeIcon icon={faList} />
                    <h4>Business Consulting</h4>
                    </div>
                    <ul>
                        <li><Link to="/#">Business Setup</Link></li>
                        <li><Link to="/#">Accounting & Auditing</Link></li>
                        <li><Link to="/#">CFO Service</Link></li>
                    </ul>
                    <h4>IT & CRM</h4>
                    <ul>
                        <li><Link to="/#">Zoho Consulting</Link></li>
                        <li><Link to="/#">Cloud Services</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    );
}
