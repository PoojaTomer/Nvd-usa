import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import ServiceList from './components/ServiceList';
import WebsiteProcess from './components/WebsiteProcess';
const Listing =    <div className="row mt-5 align-items-center">
<div className="col-md-6">
    <img src={IMAGES.servicePage.mobileList} className="img-fluid" alt="Find Creativity" data-aos="zoom-in" /> 
</div>
<div className="col-md-6">
    <h4 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Our mobile app development services in the USA include</h4>
   <ul className="one-list">
    <li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">E-commerce Apps that fuel the growth of your e-commerce store</li>
    <li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Business apps that can optimize your business processes</li>
    <li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Utility apps for personal and business productivity</li>
    <li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">Lifestyle mobile apps for great usability</li>
    <li data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">Easy-to-use News and Information apps</li>
   </ul>
</div>
<div className="col-md-6">
    <h4 data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">Native Android app development</h4>
    <ul className="one-list">
     <li data-aos="fade-up" data-aos-delay="750" data-aos-offset="0">Android app design & development</li>
     <li data-aos="fade-up" data-aos-delay="800" data-aos-offset="0">API Integration</li>
     <li data-aos="fade-up" data-aos-delay="850" data-aos-offset="0">Android app testing</li>
     <li data-aos="fade-up" data-aos-delay="900" data-aos-offset="0">Play store optimization</li>
     <li data-aos="fade-up" data-aos-delay="950" data-aos-offset="0">App version upgrades and updates</li>
    </ul>
 </div>
 <div className="col-md-6">
    <h4 data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">iOS app development</h4>
    <ul className="one-list">
     <li data-aos="fade-up" data-aos-delay="750" data-aos-offset="0">iPhone app design and development</li>
     <li data-aos="fade-up" data-aos-delay="800" data-aos-offset="0">iPad app design and development</li>
     <li data-aos="fade-up" data-aos-delay="850" data-aos-offset="0">iWatch app design and development</li>
     <li data-aos="fade-up" data-aos-delay="900" data-aos-offset="0">Apple TV app design and development</li>
     <li data-aos="fade-up" data-aos-delay="950" data-aos-offset="0">iOS app support and maintenance</li>
     <li data-aos="fade-up" data-aos-delay="1000" data-aos-offset="0">App store optimisation</li>
    </ul>
 </div>
 <div className="col-md-6">
    <h4 data-aos="fade-up" data-aos-delay="1000" data-aos-offset="0">Web App development</h4>
    <ul className="one-list">
     <li data-aos="fade-up" data-aos-delay="1050" data-aos-offset="0">Application shell architecture</li>
     <li data-aos="fade-up" data-aos-delay="1100" data-aos-offset="0">Progressive and responsive web design</li>
     <li data-aos="fade-up" data-aos-delay="1150" data-aos-offset="0">Custom web app development</li>
     <li data-aos="fade-up" data-aos-delay="1200" data-aos-offset="0">PWAs with offline functionalities</li>
     <li data-aos="fade-up" data-aos-delay="1250" data-aos-offset="0">Lighthouse app development</li>
     <li data-aos="fade-up" data-aos-delay="1300" data-aos-offset="0">Workbox app development</li>
    </ul>
 </div>
 <div className="col-md-6">
    <h4 data-aos="fade-up" data-aos-delay="1000" data-aos-offset="0">React Native App development</h4>
    <ul className="one-list">
     <li data-aos="fade-up" data-aos-delay="1050" data-aos-offset="0">React Native Android & iOS app development</li>
     <li data-aos="fade-up" data-aos-delay="1100" data-aos-offset="0">React native app customization</li>
     <li data-aos="fade-up" data-aos-delay="1150" data-aos-offset="0">React native UI/UX design</li>
     <li data-aos="fade-up" data-aos-delay="1200" data-aos-offset="0">React Native support and maintenance</li>
    </ul>
 </div>
</div>;
const Process=[
    {
      subTitle:"How to receive mobile app maintenance services after its launch?",
      Des:"New Vision Digital does not only assist its clients in conceptualizing and launching a mobile app for their businesses but also offers complete app monitoring and maintenance services. We do the hard work so that your mobile app performs seamlessly without any bugs or anomalies. In addition, we assist our clients in optimizing their app’s performance and delivering consistent results."},
      {
    subTitle:"What are the benefits of mobile app development?",
      Des:"Around 300 million people in the USA are among the world’s more than 3 billion smartphone users. In all honesty, if your company doesn’t participate in the mobile ecosystem, it is hidden away in a cavern that no one can access. Due to the prevalence of mobile devices among consumers, having a mobile app is no longer a luxury but rather a requirement for every business. Harness the power of app development with the top mobile app development in the USA, New Vision Digital. ",
      },
      {
        subTitle:"What about the integrity and security of data in mobile apps?",
      Des:"Thanks to our mobile app development methodology, your data, user data, and important business intellectual property are completely safe and secure. For complete data security, we make sure that critical procedures like authorizations and authentication are encrypted and protected by firewalls.",
      },
]
export default function MobileAppsDevelopment(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Consultation :",
          Image:IMAGES.servicePage.mobileApp1,
          Description:"Before commencing anything, we’ll consult with you to understand your requirements and determine the level of complexity in the development process. Thereafter, we analyze the market by conducting extensive market research to find out the industrial standards.",
       
      },
      {
          SubHeading:"Wireframing :",
          Image:IMAGES.servicePage.mobileApp2,
          Description:"After understanding your requirements, we proceed towards brainstorming, mind mapping, testing of concepts, and strategy development before delving into the core development process of your mobile app. Our team of expert developers put their best foot forward and come up with the best mobile app frameworks for your business.",
         
      },
      {
          SubHeading:"Design Approval :",
          Image:IMAGES.servicePage.mobileApp3,
          Description:"Once our team is ready with the frameworks, we will send the designs to you for approval. Our development team will consider your comments and employ the changes in further development steps.",
         
      },
      {
          SubHeading:"Development :",
          Image:IMAGES.servicePage.mobileApp4,
          Description:"It’s now time to proceed with the core mobile app development process. Our development professionals use their best skills to emphasize QA and performance testing to ensure the functionality of the app.",
          
      },
      {
        SubHeading:"Feedback & Adjustments :",
        Image:IMAGES.servicePage.mobileApp5,
        Description:"As soon as we feel content with the app’s performance, we present the system to you and make changes as per feedback. Although our apps align with the highest standards of mobile app development, we bring further improvements if you want.",
       
    },
    {
        SubHeading:"Content Integration & Quality Assurance :",
        Image:IMAGES.servicePage.mobileApp6,
        Description:"After the primary approval, we integrate the content into the app. After the integration, our team performs meticulous testing of functionality, usability, performance, and device from every aspect of the development process.",
       
    },
    {
        SubHeading:"Launch & deployment :",
        Image:IMAGES.servicePage.mobileApp7,
        Description:"Once our app passes the quality assurance check, our experts finalize the APK & IPA files and submit them to the Google Play Store and App Store, respectively. Our developers then resort to finishing backend deployment for Android and iOS platforms. Our services do not end here. We also offer support when you need to release updates or fix any development issues.",
      
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
      <Breadcrumb Title="Mobile Apps Development" Image={IMAGES.servicePage.MobileBanner} />
      <ServiceAbout
       Heading="Have An App Idea in Mind?
       Bring It to Us, and We Will Make Magic Happen."
       Des1="At New Vision Digital, we believe that life is too short for an ordinary app. That is why we strive to put a truck full of creativity on the development highway for creating apps that stand out. Get ready to conquer the app platform with a battle plan created by our development warriors. Discover all the possibilities of growth app development can bring to your business with us." 
       Des2="New Vision Digital offers optimum quality services for mobile app development through a team of highly skilled and seasoned professionals. We strive to make app development on platforms a breeze for businesses like yours. Connect with us to immerse in an app development experience like never before with mobile app development services in the USA." 
       Image={IMAGES.servicePage.mobileAbout}
       />
       <section className="our-popular-service" style={{background: "#f5f5f5",}}>
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">Design and Launch Robust & Scalable <span className='highlight'>Mobile Apps</span></h2>
                </div>
            </div>
            <div className="row mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                <div className="col-md-6">
                <ul>
                    <li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0"><span className='text-orange'><b>Decades of Experience:</b></span> Disrupt the status quo and unleash some never-seen-before unique apps with our exceptional app development services in the USA. </li>
                    <li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0"><span className='text-orange'><b>Passion-driven team:</b></span> Our strong team of highly qualified & passionate developers, business analysts, and solution architects are ready to serve you.</li>
                    <li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0"><span className='text-orange'><b>Successful & timely deliveries:</b></span> Since our inception, we have delivered an array of mobile apps and IoT solutions for our clients.</li>
                    <li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0"><span className='text-orange'><b>Consistent Success:</b></span> Our team’s expertise and sharp business acumen translate into our client’s success.</li>
                </ul>
              
                  </div> 
                <div className="col-md-6">
                   <img src={IMAGES.servicePage.MobileDesign} className="img-fluid" alt="Web Design" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" />
                </div>    
        </div>
        </div>
    </section>
       <ServiceList
        Heading="Find Creativity, Technology, Finesse All at One Place."
        Listing={Listing}
        BgImage={IMAGES.servicePage.mobileDesignbg}
         />
      <ServiceEntities Heading="From developing a Strategy to Launching the App- This is How We Do it." EntityData={serviceEntityData}  />
      <WebsiteProcess
         Heading="Frequently Asked Questions about Mobile App Development"
         Process={Process}
         Para={false}
          />
      <ReadyToGet Title="Get Ready to Build Apps That Are Engineered to Impress." Description="Reach out to us to get a quote for your project and avail yourself of our mobile app development services in the USA." />
 </>
    );
}