import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import WebsiteProcess from './components/WebsiteProcess';
import ServiceList from './components/ServiceList';

const Listing = <ul className="mt-3">
<li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0"><span className='text-orange'><b>Professional Designers : </b></span> Our team is made up of skilled and seasoned logo designers who are passionate about creating high-quality logos.</li>
<li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0"><span className='text-orange'><b>Unique Logos : </b></span>We create completely original and one-of-a-kind logos. We strictly adhere to trademark law to preserve the design and the company that created it.</li>
<li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0"><span className='text-orange'><b>100% Money-Back Guarantee : </b></span>Our logo designs imaginatively convey your concept. We take guarantee to provide outcomes that have met or exceeded the expectations of our clients.</li>
<li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0"><span className='text-orange'><b>24/7 Personalized Support :</b></span> We are available to help you every day of the week. We place a high value on our customers and work hard to resolve any issues they may have.</li>
</ul>

const Process=[
    {
      subTitle:"How long does creating a logo take?",
      Des:"As soon as we get all the information we need from you, our logo designers start brainstorming concepts for original and creative logo designs while keeping your needs in mind."},
      {
    subTitle:"Can I speak with the designers directly?",
      Des:"Indeed, why not. Our commitment to transparency makes us the best logo design company because it allows you to communicate with the designer directly and share your opinions. In actuality, the client's ideas, opinions, and vision must be effectively communicated if a logo is to be successful.",
      },
      {
    subTitle:"What's the process for copyright registration?",
      Des:"As soon as you complete the logo and make all of the payments, we will start working on the copyright. Thanks to copyright protection, you have the power to have the sole right to print, display, and distribute the logo, so you are free to do whatever you want.",
      },
     
]

export default function LogoDesign(props) {
    const [serviceTrafficData, setServiceTrafficData] = useState([]);
    useEffect(()=>{
        const Process=[
            {
            SubHeading:"Design Brief :",
            Description:"Being one of the best logo design companies in USA, we concentrate more on the design brief to describe the anticipated outcome of the project. We recognize the need for your company to work hard to realize the purpose that your logo is meant to serve.",
              Image:IMAGES.servicePage.LogoDesignEntity1,
            },
            {
            SubHeading:"Research :",
            Description:"Proper research enables our talented designers to produce the ideal logo that conveys a feeling of the setting in which the brand will be used. We work by keeping up with the most recent trends and understanding how to best serve your company's demands.",
              Image:IMAGES.servicePage.LogoDesignEntity2,
            },
            {
             SubHeading:"Conceptualizing :",
             Description:"Our graphic designers focus on striking visuals to engage your target audience.",
              Image:IMAGES.servicePage.LogoDesignEntity3,
            },
            {
            SubHeading:"Drawing and coloring :",
            Description:"Our logo designers work very hard to capture the message and emotion our clients want their viewers to take away from the logo. Our designers run amok with as many concepts as possible to achieve the best outcomes.",
              Image:IMAGES.servicePage.LogoDesignEntity4,
            },
            {
            SubHeading:"Client feedback :",
            Description:"The secret to our success is our customers. Until you are satisfied with the results of your logo designs, we always look forward to working closely with your ideas and letting you communicate your likes and dislikes.",
            Image:IMAGES.servicePage.LogoDesignEntity5,
            },
        ]
        setServiceTrafficData(Process);
         },[])

    return (
        <>
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
            <meta name="keyword" content="Nvd usa" />
      </Helmet>
      <Breadcrumb Title="Logo Design" Image={IMAGES.servicePage.LogoDesignBanner} />
      <ServiceAbout
       Heading="Build Brand Awareness 3x With the Best Logo Design Company in USA"
       Des1="The logo is one of the most vital aspects that have served as a fundamental component of the technological system since its inception. In particular, any business or brand depends on creating a logo because it is the sole feature that attracts clients or consumers to the logo of any brand or other business. So, if you want to effectively communicate your brand and make a lasting first impression, partner with our professional and the best logo design services in USA." 
       Des2="New Vision Digital is the best custom logo design company in USA that ensures the best results for our clients. Our skilled logo design team creates one-of-a-kind bespoke logo concepts that our clients like at first glance as part of the professional logo design services we provide in the USA. Get associated with us to increase your brand visibility. " 
       Image={IMAGES.servicePage.LogoDesignAbout}
       />
        <ServiceList
        Heading="GOT A GAME-CHANGING IDEA? CHOOSE US TO DO IT"
        Listing={Listing}
         />
      <section className="our-popular-service" style={{background: "#f5f5f5",}}>
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">Our Popular <span className='highlight'>Services</span></h2>
                </div>
            </div>
            <div className="row mt-3  align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                <div className="col-md-6">
                <ul>
                    <li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">3D Logo Design</li>
                    <li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">Iconic Logo Design</li>
                    <li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Typographic Logo Design</li>
                    <li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Flat Logo Design</li>
                   
                </ul>
              
                  </div> 
                <div className="col-md-6">
                   <img src={IMAGES.servicePage.LogoDesignPopularService} className="img-fluid" alt="Web Design" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" />
                </div>    
        </div>
        </div>
    </section>
    <ServiceEntities
            Heading="OUR LOGO DESIGNING PROCESS"
            EntityData={serviceTrafficData} 
        />
        <WebsiteProcess
         Heading="General FAQ"
         Process={Process}
         Para={false}
          />
         <ReadyToGet Title="Enhance Your Brand and Product Visibility Through Shopify." Description="Connect with our experts to get a quote for your business today." />
 </>
    );
}
