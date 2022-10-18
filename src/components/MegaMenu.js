import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/Image-Constant';

const styles = (theme) => ({
    popoverPaper: {
      width: '100%',
      height: '100%',
      maxHeight: 'unset',
      maxWidth: 'unset',
    },
  });
export default function MegaMenu(props) {
    
    return (
        <>
            <div className="animated fadeIn mega-menu">
				<div className="mega-menu-wrap">
					<div className="row">
                       <div className="col-md-3">
							<h4 className="mega-title"><img src={IMAGES.portfolioPage.SeoMig} className="img-fluid" alt="Seo" /> Digital Marketing</h4>
                                <ul>
									<li><Link to="/search-engine-optimization">Search Engine Optimization</Link></li>
									<li><Link to="/social-media-marketing">Social Media Marketing</Link></li>
									<li><Link to="/influencer-marketing">Influencer Marketing</Link></li>
									<li><Link to="/online-reputation-management">Online Reputation Marketing</Link></li>
                                    <li><Link to="/email-marketing">Email Marketing</Link></li>
									<li><Link to="/ecommerce-marketplace-management">Ecommerce Marketplace Management</Link></li>
								</ul>
                            <h4 className="mega-title"><img src={IMAGES.portfolioPage.PaidAds} className="img-fluid" alt="Paid Ads" /> Paid Ads</h4>
                                <ul>
                                    <li><Link to="/pay-per-click">PPC</Link></li>
                                    <li><Link to="/social-advertising">Social Media Ads</Link></li>
                                </ul>
							</div>
                        <div className="col-md-3">
                                <h4 className="mega-title"><img src={IMAGES.portfolioPage.Website} className="img-fluid" alt="Website" /> Design & Development</h4>
                                <ul>
                                    <li><Link to="/wordpress-development">Wordpress Development</Link></li>
                                    <li><Link to="/magento-development">Magento Development</Link></li>
                                    <li><Link to="/shopify-development">Shopify Development</Link></li>
                                    <li><Link to="/">React Development</Link></li>
                                    <li><Link to="/php-development">PHP Development</Link></li>
                                    <li><Link to="/mobile-apps-development">Mobile App Development</Link></li>
                                </ul>
                                <h4 className="mega-title"><img src={IMAGES.portfolioPage.Website} className="img-fluid" alt="Website" /> Design</h4>
                                <ul>
                                    <li><Link to="/website-design">Web Design</Link></li>
                                    <li><Link to="/">Logo Design</Link></li>
                                </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="mega-title"><img src={IMAGES.portfolioPage.Smo} className="img-fluid" alt="Smo" /> Business Consulting</h4>
                            <ul>
                                <li><Link to="/">Business Setup</Link></li>
                                <li><Link to="/">Accounting & Auditing</Link></li>
                                <li><Link to="/">CFO Service</Link></li>
                            </ul>
                            <h4 className="mega-title"><img src={IMAGES.portfolioPage.Branding} className="img-fluid" alt="Branding" /> IT & CRM</h4>
                            <ul>
                                <li><Link to="/">Zoho Consulting</Link></li>
                                <li><Link to="/">Cloud Services</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 pr-0">
                            <div className="img-box">
                                <img src={IMAGES.headerImg.ServiceMenu} className="img-fluid" alt="Services" />
                            </div>
                        </div>
					</div>
				</div>	
			</div>
    </>
    );
}

