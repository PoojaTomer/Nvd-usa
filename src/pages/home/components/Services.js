import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

var settings = {
    dots: true,
    arrows:false,
    infinite: false,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll:1,
   centerMode: false,
    centerPadding: "10px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
export default function Services(props) {
    return (
        <section className="home-sec4">
        <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
            <div className="row">
                <div className="col-md-12">
                    <div className="cen-h">
                        <h2>360 Digital Marketing Solutions <span className='highlight'>for your Business</span></h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                  <div className="services-sider"> 
                  <Slider {...settings} spaceBetween={30}>
                  <div className="b-box">
                        <div className="h-sec4-box">
                            <div className="h-sec4-img">
                                <img src={IMAGES.homepage.Services1} className="img-fluid" alt="Web Design" />
                            </div>
                            <div className="h-sec4-con">
                                <h4>Web Design and Development</h4>
                                <p>Your presence in the digital realm is highly dependent on the performance of your website.</p>
                            </div>
                        </div>
                    </div>
                    <div className="b-box">
                        <div className="h-sec4-box">
                            <div className="h-sec4-img">
                                <img src={IMAGES.homepage.Services2} className="img-fluid" alt="Social Media" />
                            </div>
                            <div className="h-sec4-con">
                                <h4>Social Media Management and Marketing</h4>
                                <p>Be present where the world is. We help you make a mark on social media platforms where your target audience is.</p>
                            </div>
                        </div>
                    </div>
                    <div className="b-box">
                        <div className="h-sec4-box">
                            <div className="h-sec4-img">
                                <img src={IMAGES.homepage.Services3} className="img-fluid" alt="Reputation" />
                            </div>
                            <div className="h-sec4-con">
                                <h4>Reputation Management</h4>
                                <p>Want to beat your competition and ditch the queue? Paid ads are your answer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="b-box">
                        <div className="h-sec4-box">
                            <div className="h-sec4-img">
                                <img src={IMAGES.homepage.Services4} className="img-fluid" alt="Reputation Management" />
                            </div>
                            <div className="h-sec4-con">
                                <h4>Reputation Management</h4>
                                <p>Want to beat your competition and ditch the queue? Paid ads are your answer.</p>
                            </div>
                        </div>
                    </div>
                  </Slider>
                 
                    </div>    
                </div>
            </div>
        </div>
    </section>
    );
}
