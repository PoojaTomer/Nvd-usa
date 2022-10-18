import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import GreenBgSec from './components/GreenBgSec';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import WebsiteProcess from './components/WebsiteProcess';

const Resions=[
    {
      subTitle:"Agile Methodologies",
      Des:"We have a well-trained team of developers who use an agile methodology approach to bring excellence in long and short term projects."},
      {
        subTitle:"Robust Security",
      Des:"We adopt and implement proven web security techniques and tools for the development of secure PHP applications and websites. At New Vision Digital, we take all the necessary measures to keep your data safe and secure.",
      },
      {
        subTitle:"On-time Delivery",
      Des:"As a reliable PHP development company, we ensure keeping our word for all our projects. We follow an efficient approach that assists us to deliver projects on time and provide you with a delightful experience.",
      },
      {
        subTitle:"Seasoned Team",
      Des:"We have a team of experienced developers who have delivered numerous multi-user, high-performing, secure and quality websites & web apps. Our team possesses strong technical skills and knowledge of all the latest trends and advancements in PHP.",
      },
]
const Process=[
    {
      subTitle:"Analysis :",
      Des:"We commence by analysing your project requirements and provide an estimation to you based on the analysis."},
      {
    subTitle:"Preparation of contract :",
      Des:"After performing an analysis of the project, we prepare a contract for you. Here, we finalise architecture & design and then divide the work into sprints for development.",
      },
      {
        subTitle:"CMS Development",
      Des:"Our team has full-scale expertise in open-source CMS such as Drupal, Joomla, Magento, WordPress, and more to develop highly customised websites. With us, you can harness the full potential of CMS for creating successful and fully-functional websites.",
      },
      {
    subTitle:"Development :",
      Des:"Our developers start building your PHP solution by implementing their technical skills as per your requirements.",
      },
      {
    subTitle:"QA & Testing",
        Des:"After developing the solution, our QA team performs stringent tests to ensure that the product delivered to you meets all the expectations.",
          },
    {
    subTitle:"Delivery & Support",
        Des:"After testing the product, we extend complete assistance for deployment, server management, and post-deployment support to you.",
            },
]

export default function PhpDevelopment(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Custom PHP Apps",
          Description:"Get static, dynamic, and integrated PHP web apps for your business with our custom PHP app development services. Our team works with the most-suitable PHP frameworks to develop enterprise apps for different types of businesses.",
      },
      {
          SubHeading:"eCommerce PHP Solutions",
          Description:"We combine the right technologies to build top-notch eCommerce solutions with modern features and functionalities. Our developers have the apt skills and capabilities to deliver highly customised eCommerce portals as per your requirements.",
      },
      {
          SubHeading:"CMS Development",
          Description:"Our team has full-scale expertise in open-source CMS such as Drupal, Joomla, Magento, WordPress, and more to develop highly customised websites. With us, you can harness the full potential of CMS for creating successful and fully-functional websites.",
      },
      {
          SubHeading:"Social Networking Solutions",
          Description:"Our dedicated developers integrate the topmost features of PHP to deliver highly engaging, pleasing and collaborative social networking websites. Connect with us to utilise the latest trends and develop the best websites for your business.",
      },
      {
        SubHeading:"API Integration",
        Description:"Want to integrate your public, private, Internal or third-party APIs into your PHP system and CMS? We can help. Hire us as your PHP development parts to integrate a website as per your requirements.",
    },
    {
        SubHeading:"Custom Web Portals",
        Description:"Meet the needs of your business by creating web portals with us using PHP. Whether it's a B2C portal or a B2B portal- our developers have extensive knowledge and experience in building custom web portals that aim toward the growth of your business.",
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
      <Breadcrumb Title="PHP Development" Image={IMAGES.servicePage.servicesBanner} />
      <ServiceAbout
       Heading="Responsive Mobile Website"
       secHeading="Get the best Return on Investment with our End-to-End PHP Development Services"
       Des1="A leading digital solutions provider, New Vision Digital is known for delivering robust and unrivalled web development solutions to clients on a global scale. With a proven proficiency in programming language and its framework, we have excelled in extending dynamic and result-driven PHP solutions that lead to the growth of your business." 
       Des2="Reach out to our team to avail of our notable expertise for your PHP website and application today." 
       Image={IMAGES.servicePage.Php}
       />
      <ServiceEntities Heading="A wide range of Cutting-edge PHP solutions" EntityData={serviceEntityData} Image={false} />
        <GreenBgSec
       Heading="Trust us to Deliver Solutions that Meet Versatile Demands"
       Resions={Resions}
       Image={IMAGES.servicePage.Php1}
        />
        <WebsiteProcess
         Heading="From Start to Fin, Our PHP Web Development Process"
         Process={Process}
          />
         <ReadyToGet Title="Experience the Magic of Marketing and Understand the Science of Growth in Sales with our Marketing Services" Description="Connect with our experts to get a quote for your business today." />
 </>
    );
}

