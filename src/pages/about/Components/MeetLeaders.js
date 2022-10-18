import React from 'react';
import { IMAGES } from '../../../constants/Image-Constant';

export default function MeetLeaders(props) {
    return (
        <section className="about-sec3">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="cen-h">
                    <h2>Meet the <span className='highlight'>Leaders</span></h2>
                    <p>With over 10 years of experience, we have got a well-seasoned team at the helm.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                {/* <!--start-profile--> */}
                <div className="about-profile" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
                    <div className="row">
                        <div className="col-md-4">
                         <div className="user-p-img">
                             <img src={IMAGES.aboutPage.sumitTayal} alt="Sumit Tayal" />
                         </div>   
                        </div>
                        <div className="col-md-8">
                            <div className="user-p-con">
                                <h3>Sumit Tayal</h3>
                                <h5>Founder & CEO</h5>
                                <p>The man behind the success of New Vision Digital as a digital marketing agency, Sumit Tayal, is a born leader. With his analytical bend of mind and in-depth knowledge of business operations, he makes sure to deliver results that elevate brands. As the powerhouse of ideas and the backbone of NVD, Mr Sumit comes up with innovative and result-driven approaches that deliver measured benefits to clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end-profile-->
                <!--start-profile--> */}
                <div className="about-profile" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="user-p-con">
                                <h3>Pawan Gupta</h3>
                                <h5>Director of Finance</h5>
                                <p>A competent and result-oriented professional, Mr. Pawan Gupta has over 24 years of rich and insightful experience in overall financial operations. With his exceptional skills and in-depth understanding of all phases of business and financial activity, he makes sure to put his best foot forward in all projects that come across him.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                         <div className="user-p-img">
                             <img src={IMAGES.aboutPage.pawanGupta} alt="Pawan Gupta" />
                         </div>   
                        </div>
                        
                    </div>
                </div>
                {/* <!--end-profile-->
                <!--start-profile--> */}
                <div className="about-profile" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
                    <div className="row">
                        <div className="col-md-4">
                         <div className="user-p-img">
                             <img src={IMAGES.aboutPage.manaliGill} alt="Manal Gill" />
                         </div>   
                        </div>
                        <div className="col-md-8">
                            <div className="user-p-con">
                                <h3>Manali Gill</h3>
                                <h5>Sr. Business Development Manager</h5>
                                <p>As the core business developer, Manali will be the primary point of contact between NVD and you. Being an enthusiastic, energetic, and people person, she brings energy to the development process and aims towards the company’s uprising growth. She has a positive and inquisitive attitude for every project that comes our way and ensures the client needs are duly met.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end-profile-->
                <!--start-profile--> */}
                <div className="about-profile" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="user-p-con">
                                <h3>Vikrant Pratap</h3>
                                <h5>Technical Head</h5>
                                <p>Vikrant is a “powerhouse” of ideas playing a key role as Technical Head in NVD. He is excellent in ensuring client needs are met and contributes to developing solutions. He strengthens delivery capabilities with his incessant energy. When not working, he loves to party and believes in “Work Hard, Party Harder!”</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                         <div className="user-p-img">
                             <img src={IMAGES.aboutPage.vikrantPratap} alt="Vikrant Pratap" />
                         </div>   
                        </div>
                        
                    </div>
                </div>
                {/* <!--end-profile-->
                <!--start-profile--> */}
                <div className="about-profile" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
                    <div className="row">
                        <div className="col-md-4">
                         <div className="user-p-img">
                             <img src={IMAGES.aboutPage.shashankSaxena} alt="Shashank Saxena" />
                         </div>   
                        </div>
                        <div className="col-md-8">
                            <div className="user-p-con">
                                <h3>Shashank Saxena</h3>
                                <h5>Manager</h5>
                                <p>Shashank's expertise in establishing and implementing marketing strategies for businesses makes him the one stop solution for clients. He's the team's jovial sparkplug, thanks to his concrete domain expertise and smart sense of humor.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end-profile-->
                <!--start-profile--> */}
                <div className="about-profile" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="user-p-con">
                                <h3>Jyoti Motwani</h3>
                                <h5>Account Manager</h5>
                                <p>As the hands-on Account manager, Jyoti is a keen learner who likes to deep dive into all the projects she works on. She believes in building long-lasting professional relationships with our clients and works on getting the job done with finesse. When not firefighting at work, you can find her enjoying a cup of hot cocoa and calm music alongside her anchoring sessions on Sunday.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                         <div className="user-p-img">
                             <img src={IMAGES.aboutPage.jyotiMotwani} alt="Jyoti Motwani" />
                         </div>   
                        </div>
                        
                    </div>
                </div>
                {/* <!--end-profile--> */}
            </div>
        </div>
    </div>
</section>
    );
}
