import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import GreenBgSec from './components/GreenBgSec';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import ServiceList from './components/ServiceList';
import WebsiteProcess from './components/WebsiteProcess';

const Listing = <ul>
<li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Agile methodology to help you remain flexible during the whole development cycle</li>
<li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">Have a ready-to-go team by your side for better and faster results</li>
<li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Ensure the highest level of security when building enterprise-grade apps and web solutions</li>
<li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Get involved in each step of the process and know each detail throughout the development.</li>

</ul>
const Process=[
    {
      subTitle:"What do you mean by ReactJS Development?",
      Des:"ReactJS refers to an open-source Javascript library mostly used for developing UI for single-page applications. The ReactJS front-end library has the responsibility for the view layer in the application's MVC. It is the most popular library among developers across the globe."},
      {
    subTitle:"What is the difference between React and React Native Development?",
      Des:"There is a basic difference between react and react native development that everyone must know about. While ReactJS is the front-end library, React Native refers to a cross-platform app development framework. React is used to build irresistible UI and the use of React Native is to build high-quality mobile applications. If you combine both, highly-superior, unique, and highly-functional mobile apps can be built. ",
      },
      {
        subTitle:"How does app development costs are reduced in ReactJS?",
      Des:"Reusable UI components and in-process testing in ReactJS provide significant cost reductions in the creation of applications. Additionally, developers can create JavaScript code for the app's server and client sides. It lowers costs while accelerating the development of the app.",
      },
]


export default function ReactDevelopment(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);
    const [serviceTrafficData, setServiceTrafficData] = useState([]);
    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"ReactJS UI/UX Development",
          Description:"We create engaging user interfaces utilizing a creative strategy and best design techniques while keeping in mind the most recent UI/UX trends.",
      },
      {
          SubHeading:"ReactJS PLUGIN Development",
          Description:" As a leading ReactJS development company in the USA, we are committed to catering to your plugin requirements which are powered by the ReactJS JavaScript library.",
      },
      {
          SubHeading:"ReactJS Web Development",
          Description:"Experts in ReactJS can lead a full web development project from scratch, guaranteeing a high-quality outcome while adhering to the deadline and budget.",
      },
      {
          SubHeading:"ReactJS Customization Services",
          Description:"If you wish to build a customized solution for your organization, our experts can utilize Reach JS to design and deploy a custom solution as per your specific requirements.",
      },
      {
        SubHeading:"ReactJS Support & Maintenance",
        Description:"If you hold a long-term strategy in mind, we extend reliable support and maintenance solutions to keep the solution up and running.",
    },
    {
        SubHeading:"ReactJS Upgradation",
        Description:"Want to upgrade your existing ReactJS solution to the latest version? We can assist you with unmatched upgradation services to help you enrich your solution with the latest ReactJS version.",
    },
   
      ];
      setServiceEntityData(EntityData);
       },[])
       useEffect(()=>{
        const Process=[
            {
            SubHeading:"Analysis of Requirements:",
            Description:"After we receive a query, we connect with your company to learn more about your company, requirements, and goals. Our team starts the work by analyzing your project's needs and studies the current industry market to deliver the right combination of tech and talent.",
              Image:IMAGES.servicePage.ReactEntity1,
            },
            {
            SubHeading:"Deployment of resources:",
            Description:"Post understanding your requirements, we cherry-pick the most suitable developers to commence the process by mapping out an effective plan keeping in mind your specific requirements. List down all that you want us to deliver, and we will identify the best possible solutions to help you implement as per the requirements.",
            Image:IMAGES.servicePage.ReactEntity2,
            },
            {
             SubHeading:"Estimation of Service Cost:",
             Description:"We produce results that help our clients steal the limelight and strengthen their digital footprint through our unmatched services. We analyze the complexity of the future application and deduce a price. Additionally, we offer an array of engagement models for you to choose from, therefore; you can pick whatever floats the boat.",
            Image:IMAGES.servicePage.ReactEntity3,
            },
            {
            SubHeading:"Development:",
            Description:"Our exceptionally talented and experienced developers commence the process of design and deployment of a customized solution in sync with your goals. Deemed as the leading react JS development company in the USA assure a positive experience and better ROI with our content and services.",
            Image:IMAGES.servicePage.ReactEntity4,
            },
            {
            SubHeading:"Support:",
            Description:"Once the application is developed and fully functional, we extend complete support for technicalities and updates so that the solution is secure and contributes to your business's growth.",
            Image:IMAGES.servicePage.ReactEntity5,
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
      <Breadcrumb Title="React Development" Image={IMAGES.servicePage.ReactBanner} />
      <ServiceAbout
       Heading="Experiment and Create Out-of-the-Box React JS Applications With New Vision Digital"
       Des1="New Vision Digital is one of the most renowned companies offering high-quality ReactJS development services in the USA. Our company is backed by a team of highly qualified and experienced ReactJS developers who, with their business acumen, are always ready to deliver above-par web solutions for your business and surpass your expectations." 
       Des2="Regardless of whether you want to get a simple business website or a complex one, we can do it all. Get associated with us to hire a ReactJS developer in the USA in the USA today. 
       " 
       Image={IMAGES.servicePage.ReactAbout}
       />
       <ServiceList
           Heading="Why Choose New Vision digital for ReactJS Development"
           Listing={Listing}
        />
      <ServiceEntities Heading="Our Gamut of ReactJS Development services in the USA" EntityData={serviceEntityData} Image={false} />
      <ServiceEntities
            Heading="How do we do it?"
            EntityData={serviceTrafficData} 
            para="Here's how we make it possible for you"
        />
       
        <WebsiteProcess
         Heading="Frequently Asked Questions"
         Process={Process}
         Para={false}
          />
         <ReadyToGet Title="Harness the power of ReactJS Framework with New Vision Digital" Description="Get in touch with us to get top-notch ReactJS development services in the USA at unbeatable prices." />
 </>
    );
}
