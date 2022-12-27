import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import WebsiteProcess from './components/WebsiteProcess';

const Process=[
    {
      subTitle:"What services does a reputable website development business provide?",
      Des:"You may build a website tailored to your needs with the assistance of a seasoned bespoke web development firm. In collaboration with you, they will design the website, pick the appropriate hosting and domain, and set up all essential features and functions. Additionally, they may assist you with website security."},
      {
    subTitle:"Is it preferable to hire a web development company directly or to outsource the creation of a website?",
      Des:"For a variety of reasons, it is preferable to work with a web development company while creating a website. Cost-effectiveness, increased experience, the flexibility of scaling the team size up or down, and familiarity with the newest trends and technology are just a few.",
      },
      {
    subTitle:"What can I expect from a business that develops custom web applications?",
      Des:"When working with a bespoke web app development business, they will be able to handle the project with ease and draw on their experience to complete it successfully. Additionally, they will be able to answer any queries or issues you may have and will be ready to provide you with regular updates on the project's development.",
      },
     
]
export default function WebsiteDesign(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Content Writing",
          Description:"Words are powerful, especially on the website. It's important to keep your website up-to-date with fresh, useful content that answers your clients' issues and questions. Let us help you improve your website content for search engines and visitors.",
          Image:IMAGES.servicePage.WebDesignEntity1,
      },
      {
          SubHeading:"Logo Design",
          Description:"A logo is like a window that opens into your living room, giving everyone a sneak peek into your life. Your logo is a way for customers to instantly identify your business. Custom design is the best way to establish the credibility and professionalism of your company.",
          Image:IMAGES.servicePage.WebDesignEntity2,
      },
      {
          SubHeading:"eCommerce Web Design",
          Description:"A poor user experience results in 88% of online consumers never returning. Don't let this happen to your online shop. You want to make a good first impression on the people who could become your customers. Optimizing product pages, keeping the design clean and professional, using high-quality creatives, and making your text legible are just some of the things we do for you.",
          Image:IMAGES.servicePage.WebDesignEntity3,
      },
      {
          SubHeading:"Custom Web Design",
          Description:"With our WordPress web design services, you can be sure that your website will reflect your distinct identity and meet the demands of your target audience. To establish your unique selling points (USPs), we indulge in extensive site research, competition benchmarking, and audience analysis.",
          Image:IMAGES.servicePage.WebDesignEntity4,
      },
   
      ];
      setServiceEntityData(EntityData);
       },[])
    return (
        <>
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
            <meta name="keyword" content="Nvd usa" />
      </Helmet>
      <Breadcrumb Title="Website Design" Image={IMAGES.servicePage.WebDesignBanner} />
      <ServiceAbout
       Heading="Does Your Website Need a Facelift?"
       secHeading="Make an aesthetic case for your Business and Convert Clicks into Sales!"
        Des1="The internet is a treasure trove of possibilities. Make the most of its potential. New Vision Digital extends website design services that can help you establish your online presence and tap into your target market's buying power."
        Des2="We can handle anything from website design and development to SEO and site maintenance!
         A web design company that can help you construct an online lead generating engine is only a few clicks away. If you're searching for a website that's not only visually appealing but also one that ranks well and generates high-quality leads, you've come to the right place!
         "
        Image={IMAGES.servicePage.WebDesignAbout} />
      <section className="inner-service-sec3">
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">Web design that reflects your Business Persona and helps scale Sales</h2>
            </div>
        </div>
        <div className="row mt-5 align-items-center">
            <div className="col-md-6">
                <p data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Fast, responsive, and user-friendly websites are our forte. It is our goal to create aesthetically attractive custom websites for you that gives your brand a competitive advantage. Here’s how we do it for you:</p>
               <ul className="one-list">
                <li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">Our strength is communicating. We believe in taking the time to get to know your businesses, their target audience, and their goals.</li>
                <li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Once we have your vision in place, we discuss the style, functionality, design ideas, brand power, and more.</li>
                <li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Voila! You have an engaging User Interface that enhances the user's experience and reduces bounce rates.</li>
               </ul>
               <p data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">With a global clientele and strong roots in Dubai and India, we are the web design experts you need for that website facelift.</p>
            </div>
            <div className="col-md-6">
                <img src={IMAGES.servicePage.WebDesignListing1} className="img-fluid" alt="Nail that first" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" /> 
            </div>
        </div>
        <h4 className="text-center text-white mt-5" data-aos="fade-down" data-aos-duration="1000" data-aos-easing="linear"><em>Facelift with Sales Lift</em></h4>
        <div className="col-md-10 offset-md-1 mt-5">
            <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">Major components of Expert Web Design</h2>
        </div>
          <div className="row mt-3 align-items-center">
            <div className="col-md-6">
                <img src={IMAGES.servicePage.WebDesignListing2} className="img-fluid" alt="Nail that first" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" /> 
            </div>
            <div className="col-md-6">
              
               <ul className="one-list">
                <li data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">The first impression leaves a lasting impact. So make your website visually appealing. Make your visitors go</li>
                <li data-aos="fade-up" data-aos-delay="800" data-aos-offset="0">If you can’t navigate your path through it, you are less likely to take that route. Similarly, a website with a troubled navigation system is going to find it difficult to grab the audience’s attention.</li>
                <li data-aos="fade-up" data-aos-delay="900" data-aos-offset="0">If you're going to splurge on website design, don't forget the content. Convincing and succinct information with engaging calls to action are hallmarks of a successful website.</li>
                <li data-aos="fade-up" data-aos-delay="1000" data-aos-offset="0">You can land people on your site, but to engage them you must work on Interactive website design.</li>
               </ul>
            </div>
        </div>

    </div>
</section>
      <ServiceEntities Heading="Digital Assets That Work For Today's Businesses" EntityData={serviceEntityData} />
      <section className="innerservice-sec4">
    <div className="container">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">Web Design by New Vision Digital Produces Positive Outcomes</h2>
            </div>
        </div>
        <div className="row mt-3 ">
            <div className="col-md-6">
               <img src={IMAGES.servicePage.WebDesignProcess} className="img-fluid" alt="Web Design" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" />
            </div>
            <div className="col-md-6">
                    <p data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">To succeed in the digital realm, you'll need an intelligently designed and developed website. A one that doesn’t lose its visitors halfway; they must rapidly learn about your product or service and have simple access to buy or contact you.</p>
                    <p data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">We make it a priority to create custom websites for each of our customers, making sure that your business's objectives are met while also accurately reflecting your brand online. When you trust New Vision Digital with your website design, you are rewarded in the following ways:</p>
                    <ul className="one-list">
                        <li data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">One-on-One communication with our in-house design Expert.</li>
                        <li data-aos="fade-up" data-aos-delay="800" data-aos-offset="0">A dedicated project manager is assigned to your project.</li>
                        <li data-aos="fade-up" data-aos-delay="900" data-aos-offset="0">The approval process for site strategy, content, and design strictly adhere to.</li>
                        <li data-aos="fade-up" data-aos-delay="1000" data-aos-offset="0">Mobile-friendly website design that looks appealing on all mediums.</li>
                        <li data-aos="fade-up" data-aos-delay="1200" data-aos-offset="0">Your wish is our command.</li>
                        <li data-aos="fade-up" data-aos-delay="1300" data-aos-offset="0">DevelopmentShopify DevelopmentReact DevelopmentPHP DevelopmentMobile App DevelopmentWeb DesignLogo DesignBusiness SetupAccounting & AuditingCFO ServiceZoho ConsultingCloud Services</li>
                    </ul>

            </div>

             
    </div>
    </div>
</section>
    <WebsiteProcess
         Heading="General FAQ"
         Process={Process}
         Para={false}
          />
    <ReadyToGet Title="We Can Help You Create the Website of Your Dreams." Description="Connect with us to start your website design journey today!" />
 </>
    );
}

