import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from '../../../constants/Image-Constant';
var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    centerPadding: "100px",
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

function OurOffbeatMarketing(props) {
    return (
        <section className="home-sec1">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="h-sec1-img">
                        <img src={IMAGES.homepage.About} className="img-fluid" alt="about" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-sec1-con">
                        <h6 data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">What makes us unique?</h6>
                        <h2 data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Our Offbeat Marketing Solutions Drive Dollars to Your Bank Accounts</h2>
                        <p data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">In this covoluted Industry that is subjected to exponential growth and constant evolution, It's the first impression that lasts a lifetime. As an innovative Digital Marketing Agency. We have:</p>      
                        <ul>
                            <li data-aos="fade-right" data-aos-delay="800" data-aos-offset="0"><span data-max="12">+</span> <strong>Industry<br/>Experience</strong></li>
                            <li data-aos="fade-left" data-aos-delay="900" data-aos-offset="0"><span data-max="10">K+</span> <strong>Happy<br/>Clients</strong></li>
                            <li data-aos="fade-right" data-aos-delay="1000" data-aos-offset="0"><span data-max="100">+</span> <strong>Experts</strong></li>
                            <li data-aos="fade-left" data-aos-delay="1100" data-aos-offset="0"><span data-max="90">%</span> <strong>Client<br/>Retention</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="feature-s">
                    <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear"><span className='highlight'>We are featured in</span></h3>
                    <Slider {...settings}>
                    <li data-aos="zoom-in" data-aos-delay="100" data-aos-offset="0"><img src={IMAGES.homepage.FetImage1} className="img-fluid" alt="feature1" /></li>
                        <li data-aos="zoom-in" data-aos-delay="200" data-aos-offset="0"><img src={IMAGES.homepage.FetImage2} className="img-fluid" alt="feature2" /></li>
                        <li data-aos="zoom-in" data-aos-delay="300" data-aos-offset="0"><img src={IMAGES.homepage.FetImage3} className="img-fluid" alt="feature3" /></li>
                        <li data-aos="zoom-in" data-aos-delay="400" data-aos-offset="0"><img src={IMAGES.homepage.FetImage4} className="img-fluid" alt="feature4" /></li>
                        <li data-aos="zoom-in" data-aos-delay="500" data-aos-offset="0"><img src={IMAGES.homepage.FetImage5} className="img-fluid" alt="feature5" /></li> 
                    </Slider>
                   
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default OurOffbeatMarketing;