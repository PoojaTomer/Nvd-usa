import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from '../../../constants/Image-Constant';

function SucessStories(props) {
    var settings = {
        dots: true,
        arrows:false,
        infinite: false,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        centerPadding: "60px",
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
    return (
        <section className="home-sec2">
        <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
            <div className="row">
                <div className="col-md-5">
                    <div className="h-sec2-h">
                        <h2>Sucess Stories Crafted On Global Forefront For</h2>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="h-sec2-c">
                        <p>New Vision Digital has created a path of success for hundereds clients in our years in the industry. We craft the right marketing strategies to achieve the required growth and scalability, so that your business soars high. With our increadible digital marketing and development services, we have aided in the growth of:</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <Slider {...settings} spaceBetween={30}>
                    <div className="client-area">
                        <img src={IMAGES.homepage.ClientLogo1} className="img-fluid" alt="clientlogo1" />
                        <img src={IMAGES.homepage.ClientLogo2} className="img-fluid" alt="clientlogo2" />
                    </div>
                    <div className="client-area">
                        <img src={IMAGES.homepage.ClientLogo3} className="img-fluid" alt="clientlogo3" />
                        <img src={IMAGES.homepage.ClientLogo4} className="img-fluid" alt="clientlogo4" />
                    </div>
                    <div className="client-area">
                        <img src={IMAGES.homepage.ClientLogo5} className="img-fluid" alt="clientlogo5" />
                        <img src={IMAGES.homepage.ClientLogo6} className="img-fluid" alt="clientlogo6" />
                    </div>
                    <div className="client-area">
                        <img src={IMAGES.homepage.ClientLogo7} className="img-fluid" alt="clientlogo7" />
                        <img src={IMAGES.homepage.ClientLogo8} className="img-fluid" alt="clientlogo8" />
                    </div>
                    <div className="client-area">
                        <img src={IMAGES.homepage.ClientLogo9} className="img-fluid" alt="clientlogo9" />
                        <img src={IMAGES.homepage.ClientLogo10} className="img-fluid" alt="clientlogo10" />
                    </div>
                    <div className="client-area">
                        <img src={IMAGES.homepage.ClientLogo11} className="img-fluid" alt="clientlogo11" />
                        <img src={IMAGES.homepage.ClientLogo12} className="img-fluid" alt="clientlogo12" />
                    </div>
                    <div className="client-area">
                        <img src={IMAGES.homepage.ClientLogo5} className="img-fluid" alt="clientlogo5" />
                        <img src={IMAGES.homepage.ClientLogo6} className="img-fluid" alt="clientlogo6" />
                    </div>
                </Slider>
                </div>
            </div>
        </div>
    </section>
    );
}

export default SucessStories;