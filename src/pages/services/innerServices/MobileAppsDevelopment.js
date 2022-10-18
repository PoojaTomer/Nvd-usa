import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import ServiceList from './components/ServiceList';
const Listing =    <div className="row mt-5 align-items-center">
<div className="col-md-6">
    <img src={IMAGES.servicePage.mobileList} className="img-fluid" alt="Find Creativity" /> 
</div>
<div className="col-md-6">
   <ul className="one-list">
    <li>E-commerce Apps that fuel the growth of your e-commerce store</li>
    <li>Business apps that can optimise your business processes</li>
    <li>Utility apps for personal and business productivity</li>
    <li>Lifestyle mobile apps for great usability</li>
    <li>Easy to use News and Information apps</li>
   </ul>
</div>
<div className="col-md-6">
    <h4>Native Android app development</h4>
    <ul className="one-list">
     <li>Android app design & development</li>
     <li>API Integration</li>
     <li>Android app testing</li>
     <li>Play store optimisation</li>
     <li>App version upgrades and updates</li>
    </ul>
 </div>
 <div className="col-md-6">
    <h4>iOS app development</h4>
    <ul className="one-list">
     <li>iPhone app design and development</li>
     <li>iPad app design and development</li>
     <li>iWatch app design and development</li>
     <li>Apple TV app design and development</li>
     <li>iOS app support and maintenance</li>
     <li>App store optimisation</li>
    </ul>
 </div>
 <div className="col-md-6">
    <h4>Web App development</h4>
    <ul className="one-list">
     <li>Application shell architecture</li>
     <li>Progressive and responsive web design</li>
     <li>Custom web app development</li>
     <li>PWAs with offline functionalities</li>
     <li>Lighthouse app development</li>
     <li>Workbox app development</li>
    </ul>
 </div>
 <div className="col-md-6">
    <h4>React Native App development</h4>
    <ul className="one-list">
     <li>React Native Android & iOS app development</li>
     <li>React native app customisation</li>
     <li>React native UI/UX design</li>
     <li>React Native support and maintenance</li>
    </ul>
 </div>
</div>
export default function MobileAppsDevelopment(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Consultation :",
          Image:IMAGES.servicePage.mobileApp1,
          Description:"Before commencing anything, we’ll consult with you to understand your requirements and determine the level of complexity in the development process. Thereafter, we analyse the market by conducting extensive market research to find out the industrial standards.",
       
      },
      {
          SubHeading:"Wireframing :",
          Image:IMAGES.servicePage.mobileApp2,
          Description:"After understanding your requirements, we proceed towards brainstorming, mind mapping, testing of concepts and strategy development before delving into the core development process of your mobile app. Our team of expert developers put their best foot forward and come up with the best mobile app frameworks for your business.",
         
      },
      {
          SubHeading:"Design Approval :",
          Image:IMAGES.servicePage.mobileApp3,
          Description:"Once our team is ready with the frameworks, we send the designs to you for approval. Our development team will consider your comments and employ the changes in further development steps.",
         
      },
      {
          SubHeading:"Development :",
          Image:IMAGES.servicePage.mobileApp4,
          Description:"It's now time to proceed with the core mobile app development process. Our development professionals use their best skills for emphasising QA and performance testing for ensuring the functionality of the app.",
          
      },
      {
        SubHeading:"Feedback & Adjustments :",
        Image:IMAGES.servicePage.mobileApp5,
        Description:"As soon as we feel content with the app’s performance, we present the system to you and make changes as per feedback. Although our apps align with the highest standards of mobile app development, we bring further improvements if you want.",
       
    },
    {
        SubHeading:"Content Integration & Quality Assurance :",
        Image:IMAGES.servicePage.mobileApp6,
        Description:"After the primary approval, we integrate the content into the app. After the integration, our team performs meticulous testing of functionality, usability, performance and device from every aspect of the development process.",
       
    },
    {
        SubHeading:"Launch & deployment :",
        Image:IMAGES.servicePage.mobileApp7,
        Description:"Once our app passes the quality assurance check, our experts finalise the APK & IPA files and submit them to the Google Play Store and App Store respectively. Our developers then resort to finishing backend deployment for Android and iOS platforms. Our services do not end here. We also offer support when you need to release updates or fix any development issues.",
      
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
      <Breadcrumb Title="Mobile Apps Development" Image={IMAGES.servicePage.servicesBanner} />
      <ServiceAbout
       Heading="Have An App Idea in Mind? Bring It to Us, and We Will Make Magic Happen."
       Des1="At New Vision Digital, we believe that life is too short for an ordinary app. That is why we strive to put a truck full of creativity on the development highway for creating apps that stand out. Get ready to conquer the app platform with a battle plan created by our development warriors. Discover all the possibilities of growth app development can bring to your business with us." 
       Des2="New Vision Digital offers optimum quality services for mobile app development through a team of highly skilled and seasoned professionals. We strive to make app development on platforms a breeze for businesses like yours. Connect with us to immerse in an app development experience like never before." 
       Image={IMAGES.servicePage.mobileAbout}
       />
       <ServiceList
        Heading="Find Creativity, Technology, Finesse All at One Place."
        Listing={Listing}
         />
      <ServiceEntities Heading="From developing a Strategy to Launching the App- This is How We Do it" EntityData={serviceEntityData}  />
      <ReadyToGet Title="Get Ready with the Apps That Are Engineered to Impress." Description="Reach out to us to get a quote for your project today" />
 </>
    );
}