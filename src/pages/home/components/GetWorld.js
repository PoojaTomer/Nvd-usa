import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../../constants/Image-Constant';

export default function GetWorld(props) {
    return (
        <section className="home-sec3">
        <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <div className="h-sec4-h">
                        <h2>Get the world visiting your website with our premium <span className='highlight'>SEO services</span></h2>
                        <Link to="/services" className="btn-1">Reserve Your Top Spot on Leading SERPs</Link>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="h-sec3-box">
                                <div className="h-ic">
                                    <div className="h-ic-sec">
                                        <div className="h-ic-in"><img src={IMAGES.homepage.SeoIcon} className="img-fluid" alt="seo icon" /></div>
                                        <div className="h-ic-h"><h4>International and Multilingual SEO</h4></div>
                                    </div>
                                    <div className="h-ic-con">
                                        <p>Hop on new lands and gain customers from across the world as we optimize your website for multilingual countries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-sec3-box">
                                <div className="h-ic">
                                    <div className="h-ic-sec">
                                        <div className="h-ic-in"><img src={IMAGES.homepage.LocalIcon} className="img-fluid" alt="local icon" /></div>
                                        <div className="h-ic-h"><h4>Local SEO</h4></div>
                                    </div>
                                    <div className="h-ic-con">
                                        <p>Rule the local searches with our local SEO services and map marketing and expand your customer base at new locations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-sec3-box">
                                <div className="h-ic">
                                    <div className="h-ic-sec">
                                        <div className="h-ic-in"><img src={IMAGES.homepage.EcomIcon} className="img-fluid" alt="Ecom icon" /></div>
                                        <div className="h-ic-h"><h4>E-Commerce SEO</h4></div>
                                    </div>
                                    <div className="h-ic-con">
                                        <p>Anchor your business in the eCommerce space with our carefully designed products and cart optimization plans</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-sec3-box">
                                <div className="h-ic">
                                    <div className="h-ic-sec">
                                        <div className="h-ic-in"><img src={IMAGES.homepage.CmsIcon} className="img-fluid" alt="Cms Icon" /></div>
                                        <div className="h-ic-h"><h4>CMS-based SEO</h4></div>
                                    </div>
                                    <div className="h-ic-con">
                                        <p>Magento, Drupal, WordPress CMS, Shopify, CMS Hub, Joomla, Squarespace – you name one, we can do it for you!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-sec3-box">
                                <div className="h-ic">
                                    <div className="h-ic-sec">
                                        <div className="h-ic-in"><img src={IMAGES.homepage.YoutubeIcon} className="img-fluid" alt="Youtube Icon" /></div>
                                        <div className="h-ic-h"><h4>YouTube SEO</h4></div>
                                    </div>
                                    <div className="h-ic-con">
                                        <p>Bringing your videos to the top ranks on YouTube and Google Searches with our effective YouTube SEO.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-sec3-box">
                                <div className="h-ic">
                                    <div className="h-ic-sec">
                                        <div className="h-ic-in"><img src={IMAGES.homepage.AppStoreIcon} className="img-fluid" alt="App Store" /></div>
                                        <div className="h-ic-h"><h4>App Store Optimization</h4></div>
                                    </div>
                                    <div className="h-ic-con">
                                        <p>Getting your app featured on top is no rocket science anymore. Boost your app downloads by 50% with our app store optimization</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
