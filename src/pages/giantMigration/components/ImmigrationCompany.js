import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function ImmigrationCompany(props) {
    return (
        <section className="giantmigration-sec2">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Giant <span className='highlight'>Migration</span></h2>
                    <h4 data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">How did the immigration company gain <br/>website traffic by a whopping <span className="highlight">190%</span> in just 1 year?</h4>
                    <p data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Most people dream of settling abroad and to accomplish this dream, immigration firms help. But what <br/>happens to a newbie, a new company in an already competitive market?</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4 d-flex" data-aos="zoom-in" data-aos-delay="100" data-aos-offset="0">
                    <div className="giantmigration-box">
                        <img src={IMAGES.giantMigration.Top10} className="img-fluid" alt="Top 10 Results" />
                        <h4>Top 10 Results</h4>
                        <p>In a matter of just 18 Months, Giant Migration has reached in the top 10 results of Google’s search results.</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex" data-aos="zoom-in" data-aos-delay="300" data-aos-offset="0">
                    <div className="giantmigration-box">
                        <img src={IMAGES.giantMigration.Extraordinary} className="img-fluid" alt="Extraordinary" />
                        <h4>191.20%</h4>
                        <p>Extraordinary increment of 191.2% in overall website traffic.</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex" data-aos="zoom-in" data-aos-delay="500" data-aos-offset="0">
                    <div className="giantmigration-box">
                        <img src={IMAGES.giantMigration.Over6000} className="img-fluid" alt="Over 6000" />
                        <h4>6000+</h4>
                        <p>Over 6000 conversions through paid channels.</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex" data-aos="zoom-in" data-aos-delay="700" data-aos-offset="0">
                    <div className="giantmigration-box">
                        <img src={IMAGES.giantMigration.Booming} className="img-fluid" alt="76k" />
                        <h4>76k</h4>
                        <p>A booming social engagement of over 76k</p>
                    </div>
                </div>
                <div className="col-md-4 d-flex" data-aos="zoom-in" data-aos-delay="900" data-aos-offset="0">
                    <div className="giantmigration-box">
                        <img src={IMAGES.giantMigration.Rank} className="img-fluid" alt="10+ Keywords 1st" />
                        <h4>10+ Keywords 1st</h4>
                        <p>Rank on 1st page of Google’s search results</p>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-12 mt-4">
            <p className="text-left" data-aos="fade-up" data-aos-delay="800" data-aos-offset="0">Giant Migration, even though an extraordinarily resourceful company, lacked the opportunity of visibility. As a comparatively new immigration company, Giant Migration needed digital marketing to maximise their digital visibility so that they could reach to potential clients.</p>
            <p className="text-left" data-aos="fade-up" data-aos-delay="900" data-aos-offset="0">We had a number of goals in front of us to bring Giant Migration into the main game. Right from an effective SEO strategy to SMO mantras, we knew we had to put in everything to pull Giant Migration in the rankings where it now stands.</p>
            </div>
            </div>
        </div>
    </section>
    );
}
