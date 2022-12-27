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
<li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0"><span className='text-orange'><b>Agile Methodologies : </b></span> We have a well-trained team of developers who use an agile methodology approach to bring excellence in long and short term projects.</li>
<li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0"><span className='text-orange'><b>Robust Security : </b></span> We adopt and implement proven web security techniques and tools for the development of secure PHP applications and websites. At New Vision Digital, we take all the necessary measures to keep your data safe and secure.</li>
<li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0"><span className='text-orange'><b>On-time Delivery : </b></span> As a reliable PHP development company, we ensure keeping our word for all our projects. We follow an efficient approach that assists us to deliver projects on time and provide you with a delightful experience.
</li>
<li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0"><span className='text-orange'><b>Seasoned Team : </b></span> We have a team of experienced developers who have delivered numerous multi-user, high-performing, secure and quality websites & web apps. As we are the top PHP development company in USA, our team possesses strong technical skills and knowledge of all the latest trends and advancements in PHP.
</li>

</ul>
const Process=[
    {
      subTitle:"Can I change the layout of my website in the future?",
      Des:"Yes, you can request updates to the designs in the future. We are a top PHP development firm, and based on your requirements, our qualified developers will perform all the necessary changes to the site's interface, functionality, and layout."},
      {
    subTitle:"Do you create PHP-based mobile websites?",
      Des:"Yes, we create responsive websites. As a leading php development agency in USA, we create appealing, user-centered, and aesthetically pleasing web applications that are perfect for mobile devices. Our skilled developers are knowledgeable in cutting-edge CSS3 and HTML5 technology.",
      },
      {
        subTitle:"How are quality tests conducted?",
      Des:"Testing and website upkeep are responsibilities that are handled by a committed team. We use a variety of research techniques. Our staff will test the application across a range of systems and gadgets.",
      },
]

export default function PhpDevelopment(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);
    const [serviceTrafficData, setServiceTrafficData] = useState([]);
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
          Description:"Our dedicated developers integrate the topmost features of PHP to deliver highly engaging, pleasing and collaborative social networking websites. Connect with  the best php development agency in USA to utilize the latest trends and develop the best websites for your business.",
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
       useEffect(()=>{
        const Process=[
            {
            SubHeading:"Analysis :",
            Description:"We commence by analysing your project requirements and provide an estimation to you based on the analysis.",
              Image:IMAGES.servicePage.PhpEntity1,
            },
            {
            SubHeading:"Preparation of contract :",
            Description:"After performing an analysis of the project, we prepare a contract for you. Here, we finalise architecture & design and then divide the work into sprints for development.",
              Image:IMAGES.servicePage.PhpEntity2,
            },
            {
             SubHeading:"Development :",
             Description:"Our developers start building your PHP solution by implementing their technical skills as per your requirements.",
              Image:IMAGES.servicePage.PhpEntity3,
            },
            {
            SubHeading:"QA & Testing",
            Description:"After developing the solution, our QA team performs stringent tests to ensure that the product delivered to you meets all the expectations.",
              Image:IMAGES.servicePage.PhpEntity4,
            },
            {
            SubHeading:"Delivery & Support",
            Description:"After testing the product, we extend complete assistance for deployment, server management, and post-deployment support to you.",
            Image:IMAGES.servicePage.PhpEntity5,
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
      <Breadcrumb Title="PHP Development" Image={IMAGES.servicePage.PhpBanner} />
      <ServiceAbout
       Heading="Get the best Return on Investment with our End-to-End PHP Development Services"
       Des1="A leading digital solutions provider, New Vision Digital is known for delivering robust and unrivalled web development solutions to clients on a global scale. With a proven proficiency in programming language and its framework, we have excelled in extending dynamic and result-driven PHP solutions that lead to the growth of your business." 
       Des2="Reach out to our team to avail the best php development services in USA for your website and application today." 
       Image={IMAGES.servicePage.PhpAbout}
       />
       <ServiceList
           Heading="Trust us to Deliver Solutions that Meet Versatile Demands"
           Listing={Listing}
        />
      <ServiceEntities Heading="A wide range of Cutting-edge PHP solutions" EntityData={serviceEntityData} Image={false} />
      <ServiceEntities
            Heading="Our PHP Web Development Process"
            EntityData={serviceTrafficData} 
        />
       
        <WebsiteProcess
         Heading="General FAQ"
         Process={Process}
         Para={false}
          />
         <ReadyToGet Title="Experience the Magic of Marketing and Understand the Science of Growth in Sales with our Marketing Services" Description="Connect with our experts to get a quote for your business today." />
 </>
    );
}

