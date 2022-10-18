import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IMAGES } from '../../../constants/Image-Constant';
import GetAQuoteButton from '../../../components/GetAQuoteButton';


var settings = {
    dots: true,
    arrows:false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
export default function ClientsTrust(props) {
    return (
        <section className="home-sec7">
        <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
            <div className="row align-items-center">
            <div className="col-md-7">
                    <div className="case-study review-s ">
                        {/* <!--start-slide--> */}
                        <Slider {...settings}>
                        <div class="review-in">
                            <div class="review-con">
                                <p>After trying multiple Seo companies, one of my close friends recommended New Vision Digital. And this has been, by far, the best experience! Honestly, they helped my business by driving 6x engagement on the site within 3 months—They are great people to work with!</p>
                                <div class="review-details">
                                <div class="rev-thumb"><img src={IMAGES.homepage.Reviews} class="img-fluid" /></div>
                                <div class="rev-info">
                                    <h6><strong>Mr. Nirbhay Kataria</strong></h6>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="review-in">
                            <div class="review-con">
                                <p>We have been working with New Vision Digital for almost two years now. Their team helped to optimise my site and significantly increased the number of quality leads from 15% - 25% to 40% - 50%. They are very responsive, accommodating, and highly responsible partners. </p>
                                <div class="review-details">
                                <div class="rev-thumb"><img src={IMAGES.homepage.ClientPic} class="img-fluid" /></div>
                                <div class="rev-info">
                                    <h6><strong>Mr. Ramgopal Kumar</strong></h6>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-in">
                            <div class="review-con">
                                <p>Glad to say that my business leads have risen year over year, all thanks to New Vision Digital! Their SEO work, article/blog writing and great analysis technique have really helped me to grow my business. Apart from the leads, I liked their behaviour, ready to listen and respectful the whole time. </p>
                                <div class="review-details">
                                <div class="rev-thumb"><img src={IMAGES.homepage.Reviews} class="img-fluid" /></div>
                                <div class="rev-info">
                                    <h6><strong>Mr. Harry</strong></h6>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-in">
                            <div class="review-con">
                                <p>New Vision Digital's understanding of digital marketing, SEO and social media marketing is just commendable. These guys have helped my business sales grow up to 40% in the last few months. I can't thank them enough. Highly recommended!</p>
                                <div class="review-details">
                                <div class="rev-thumb"><img src={IMAGES.homepage.ClientPic} class="img-fluid" /></div>
                                <div class="rev-info">
                                    <h6><strong>Mr. Owen</strong></h6>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-in">
                            <div class="review-con">
                                <p>New Vision Digital is a needed blessing for every online business. They do everything very transparently and in a timely manner. They know how to do digital marketing. I'll suggest to stop-throwing away your hard-earned money on strategies that won't convert and getting associated with New Vision Digital Asap. </p>
                                <div class="review-details">
                                <div class="rev-thumb"><img src={IMAGES.homepage.Reviews} class="img-fluid" /></div>
                                <div class="rev-info">
                                    <h6><strong>Mr. Keith</strong></h6>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                        <li><FontAwesomeIcon icon={faStar} /></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                        </Slider>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="rev-h">
                        <h2>200+ Clients <span>Trust on</span> <strong>NVD</strong> Marketing <span>strategy</span></h2>
                    </div>
                    <div className="rev-star">
                        <ul>
                            <li><FontAwesomeIcon icon={faStar} color="#ffb50e" /></li>
                            <li><FontAwesomeIcon icon={faStar} color="#ffb50e" /></li>
                            <li><FontAwesomeIcon icon={faStar} color="#ffb50e" /></li>
                            <li><FontAwesomeIcon icon={faStar} color="#ffb50e" /></li>
                            <li><FontAwesomeIcon icon={faStar} color="#ffb50e" /></li>
                        </ul>
                        <h6>150+ Reviews based on</h6>
                    </div>
                    <div className="rev-b-client">
                        <img src={IMAGES.homepage.MarketStrat} className="img-fluid" alt='Market start' />
                    </div>
                    <div className="btn-rev">
                        <GetAQuoteButton Title="Get a Free Consultation" />
                        </div>
                </div>
            </div>
        </div>
    </section>
    );
}
