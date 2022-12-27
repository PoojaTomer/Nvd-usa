import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES } from '../../../constants/Image-Constant';

var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
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
export default function WitnessTheGrowth(props) {
    return (
        <section className="home-sec6">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="cen-h" data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">
                        <h2>Witness the Growth Journey of <span className="highlight">Your Website From</span></h2>
                        <div className="google-img">
                            <img src={IMAGES.homepage.GoogleHome} className="img-fluid" alt="google" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
                    <div className="case-study">
                        {/* <!--start-slide--> */}
                        <Slider {...settings} spaceBetween={30}>
                        <div className="ranktable-sec">
                            <div className="rank-table">
                                <a href="https://dsaone.com/"><h3>dsaone.com</h3></a>
                                <table>
                                    <tr>
                                        <td>Keywords</td>
                                        <td>Baseline Ranking (US)</td>
                                        <td>Current Ranking (US)</td>
                                    </tr>
                                    <tr>
                                        <td>litigation support mcallen</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>record retrieval solutions mcallen</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>litigation services mcallen</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>document management company mcallen</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>document copy services mcallen</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>document imaging services mcallen</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        {/* <!--end-slide-->
                        <!--start-slide--> */}
                        <div className="ranktable-sec">
                            <div className="rank-table">
                                <a href="https://dsaone.com/"><h3>dsaone.com</h3></a>
                                <table>
                                    <tr>
                                        <td>Keywords</td>
                                        <td>Baseline Ranking (US)</td>
                                        <td>Current Ranking (US)</td>
                                    </tr>
                                    <tr>
                                        <td>litigation support mcallen</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>record retrieval solutions mcallen</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>litigation services mcallen</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>document management company mcallen</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>document copy services mcallen</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>document imaging services mcallen</td>
                                        <td>-</td>
                                        <td>1</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        {/* <!--end-slide--> */}
                        </Slider>
                    </div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">
                    <div className="seo-img-s">
                        <img src={IMAGES.homepage.SeoHome} className="img-fluid" alt="seo" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
