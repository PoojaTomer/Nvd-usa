import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from '../../../constants/Image-Constant';
var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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
        <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
            <div className="row">
                <div className="col-md-6">
                    <div className="h-sec1-img">
                        <img src={IMAGES.homepage.About} className="img-fluid" alt="about" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-sec1-con">
                        <h6>What makes us unique?</h6>
                        <h2>Our Offbeat Marketing Solutions <span className='highlight'>Drive Dollars to</span> Your Bank Accounts</h2>
                        <p>In this covoluted Industry that is subjected to exponential growth and constant evolution, It's the first impression that lasts a lifetime. As an innovative Digital Marketing Agency. We have:</p>      
                        <ul>
                            <li><span>12+</span> <strong>Industry<br/>Experience</strong></li>
                            <li><span>10K+</span> <strong>Happy<br/>Clients</strong></li>
                            <li><span>100+</span> <strong>Experts</strong></li>
                            <li><span>90%</span> <strong>Client<br/>Retention</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="feature-s">
                    <h3><span className='highlight'>We are featured in</span></h3>
                    <Slider {...settings}>
                    <li><img src={IMAGES.homepage.FetImage1} className="img-fluid" alt="feature1" /></li>
                        <li><img src={IMAGES.homepage.FetImage2} className="img-fluid" alt="feature2" /></li>
                        <li><img src={IMAGES.homepage.FetImage3} className="img-fluid" alt="feature3" /></li>
                        <li><img src={IMAGES.homepage.FetImage4} className="img-fluid" alt="feature4" /></li>
                        <li><img src={IMAGES.homepage.FetImage5} className="img-fluid" alt="feature5" /></li> 
                    </Slider>
                   
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default OurOffbeatMarketing;