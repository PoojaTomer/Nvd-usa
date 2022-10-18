import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from '../../../constants/Image-Constant';

var settings = {
    dots: false,
    infinite: false,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: "10px",
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
export default function CaseStudy(props) {
    return (
        <section className="home-sec5">
        <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
            <div className="row">
                <div className="col-md-12">
                    <div className="cen-h">
                        <h6>Case Study</h6>
                        <h2>We have sucessfully campaigned for</h2>
                        <h5>Going the Extra Mile for Their Sucess</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="case-study">
                        {/* <!--case-box-start--> */}
                        <Slider {...settings} spaceBetween={30}>
                        <div className="case-box">
                            <div className="case-box-area">
                            <div className="case-box-in">
                                <div className="case-box-img">
                                    <img src={IMAGES.homepage.CaseStudy} className="img-fluid" alt="case3" />
                                </div>
                            </div>
                            <div className="case-box-in">
                                <div className="case-box-con">
                                    <h4>Tall RCM</h4>
                                    <p>Tall RCM has been serving customers since 2020 and has developed reliably on account of our astounding client support, quality conveyance, and sensible expense.They work with various associations in different geographic areas across the United States of America. They approached us to increase the website traffic and conversion through enhanced keyword optimization. The company should have optimzed search engine.</p>
                                    <div className="case-achive">
                                        <h6>Achievements:-</h6>
                                        <ul>
                                            <li><img src={IMAGES.homepage.CaseStudy1} className="img-fluid" alt="icon1"/><span data-max="193.15">%</span> Increment in overall website traffic.</li>
                                            <li><img src={IMAGES.homepage.CaseStudy2} className="img-fluid" alt="icon2" /><span data-max="80.27">%</span> Increment in Organic Traffic.</li>
                                            <li><img src={IMAGES.homepage.CaseStudy3} className="img-fluid" alt="icon3" /><span data-max="15">+</span> Keywords ranking on 1st page of Google SERP.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="case-box">
                            <div className="case-box-area">
                            <div className="case-box-in">
                                <div className="case-box-img">
                                    <img src={IMAGES.homepage.CaseStudy} className="img-fluid" alt="case3" />
                                </div>
                            </div>
                            <div className="case-box-in">
                                <div className="case-box-con">
                                    <h4>Tall RCM</h4>
                                    <p>Tall RCM has been serving customers since 2020 and has developed reliably on account of our astounding client support, quality conveyance, and sensible expense.They work with various associations in different geographic areas across the United States of America. They approached us to increase the website traffic and conversion through enhanced keyword optimization. The company should have optimzed search engine.</p>
                                    <div className="case-achive">
                                        <h6>Achievements:-</h6>
                                        <ul>
                                            <li><img src={IMAGES.homepage.CaseStudy1} className="img-fluid" alt="icon1"/><span data-max="193.15">%</span> Increment in overall website traffic.</li>
                                            <li><img src={IMAGES.homepage.CaseStudy2} className="img-fluid" alt="icon2" /><span data-max="80.27">%</span> Increment in Organic Traffic.</li>
                                            <li><img src={IMAGES.homepage.CaseStudy3} className="img-fluid" alt="icon3" /><span data-max="15">+</span> Keywords ranking on 1st page of Google SERP.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                </Slider>
                     
                        {/* <!--case-box-end-->
                        <!--case-box-start--> */}
                        
                        {/* case-box-end */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
