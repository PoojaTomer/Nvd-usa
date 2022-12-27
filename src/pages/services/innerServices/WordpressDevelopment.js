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
<li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0"><span className='text-orange'><b>Unrivaled Quality of services : </b></span>As a reputed WordPress website development company, we are committed to delivering the best quality WordPress websites. Our developers adhere to industry standards and develop unparalleled solutions for our clients when offering wordpress website development in USA. </li>
<li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0"><span className='text-orange'><b>Proven Methodologies : </b></span>Throughout our development journey, we have tried various proven methodologies that have enabled us to deliver robust solutions to our clients.</li>
<li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0"><span className='text-orange'><b>SEO friendly Websites : </b></span>Our developers ensure compliance with the latest guidelines and perform the necessary optimization to make your website search-engine friendly.</li>
<li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0"><span className='text-orange'><b>Non-disclosure agreement : </b></span>At New Vision Digital, we respect the privacy and confidentiality of our clients. Thereby, before commencing the WordPress web development project, we sign an NDA with our clients.</li>

</ul>
const Process=[
    {
      subTitle:"WordPress is available in which languages?",
      Des:"There are currently 169 translations available for WordPress, and 10 of them are 100% up to date. You can visit the WordPress Polyglots page to see if your language is available and even contribute to the process of translation."},
      {
    subTitle:"Do you sign an NDA before the commencement of development?",
      Des:"Yes, we sign a Non-disclosure agreement and discuss the same when offering WordPress development services in the USA. ",
      },
   
]
export default function WordpressDevelopment(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Installation and Configuration",
          Description:"Our team has rich industrial experience in deploying WordPress development solutions to businesses of diverse industries. Get a stress-free installation and configuration as our developers bring into play their skills and experience for your web solution.",
      },
      {
          SubHeading:"Responsive Design",
          Description:"Our team has some of the best experts who develop web solutions using WordPress that offer an appealing look and feel to your users. We extend solutions that have the best website appearance and functionality over different devices and browsers.",
      },
      {
          SubHeading:"Migration",
          Description:"With our expertise, we ensure accelerating the WordPress migration process for you. Get your website swiftly switched to a new host with no loss of data.",
      },
      {
          SubHeading:"Plugin Development",
          Description:"Address your diverse business needs with our customized plugins and extensions on the WordPress Platform. Connect with us to extend the website’s functionality as per your requirements.",
      },
      {
        SubHeading:"eCommerce Solutions",
        Description:"Create a tailor-made eCommerce website for your business with us. Our experts are proficient at integrating WooCommerce and other necessary plugins & features to develop a fully-functional eCommerce website for your business.",
    },
    {
        SubHeading:"CMS Development",
        Description:"Clout the features of CMS to develop an easily manageable website for your business with us. Our experts are adept at simplifying the content creation process to keep your website updated all the time.",
    },
    {
        SubHeading:"Payment Solutions",
        Description:"Ensure a seamless transactional experience for your users through the integration of efficient payment gateways and methods. Moreover, we can also assist in implementing stringent security measures.",
    },
    {
      SubHeading:"Support",
      Description:"Our techies ensure offering exceptional technical support and services to assist you in updating and maintaining your website. Keep pace with the updates for your site through our unparalleled support services from the best wordpress development agency in the USA!",
  },
  {
    SubHeading:"Bug Fixation",
    Description:"Improve the functionality and usability of your website through our bug-fixation services. Our quality analysts will fix all the flaws and ensure the optimum performance of your website.",
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
      <Breadcrumb Title="Wordpress Development" Image={IMAGES.servicePage.WpBanner} />
      <ServiceAbout
       Heading="Unlock the Power of WordPress Development"
       secHeading="Unlock the Power of WordPress Development
       Explore an ecosystem full of possibilities with New Vision Digital"
       Des1="New Vision Digital is a leading web development company crafting digital solutions to extend better business results. From conceptualization to deployment, we ensure delivering an easy-to-manage and high-performing WordPress website for your business." 
       Des2="Scale Heights, Drive More Traffic, and Earn More Revenue with our WordPress website development services. Get a quick and convenient WordPress website for your business with our experts. Get connected to establish a long and fruitful WordPress partnership with the best WordPress development agency in the USA." 
       Image={IMAGES.servicePage.WpAbout}
       />
        <ServiceList
        Heading="Entrust Us with your Website’s Development"
        Listing={Listing}
         />
      <ServiceEntities Heading="Engage in Growth and Results For your Business With Our WordPress Website Development Services in the USA." para="Here’s All we have to offer." EntityData={serviceEntityData} Image={false} />
      <section className="how-we-do">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">How we <span className='highlight'>Do it </span></h2>
                </div>
            </div>
            <div className="row mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                <div className="col-md-6">
                <ul>
                    <li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0"><span className='text-orange'><b>Order :</b></span> After you share your design files and requirements with us, we’ll commence fetching useful insights into your project.</li>
                    <li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0"><span className='text-orange'><b>Review of Specifications :</b></span> Our experts conduct a thorough analysis of your requirements and map a plan of action for your project.</li>
                    <li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0"><span className='text-orange'><b>Development :</b></span> Our seasoned developers get their fingers to the bone to build an effective website for your business.</li>
                    <li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0"><span className='text-orange'><b>QA :</b></span> Our team of technically sound inspectors ensures the website is bug-free.</li>
                    <li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0"><span className='text-orange'><b>Delivery :</b></span> After checking the proposed website’s functionality and usability, we’ll send it to you for your review.</li>
                </ul>
              
                  </div> 
                <div className="col-md-6">
                   <img src={IMAGES.servicePage.SmmServices} className="img-fluid" alt="Web Design" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" />
                </div>    
        </div>
        </div>
    </section>
        <WebsiteProcess
         Heading="Have a Website Design in mind? Connect with our Creative Developers."
         para="Give us the privilege of extending our expertise to your business’s online presence. Connect with us to get a free website audit."
         SubTitle="Frequently Asked Questions"
         Process={Process}
         Para={false}
          />
         <ReadyToGet Title="Have a Website Design in mind? Connect with our Creative Developers." Description="Give us the privilege of extending our expertise for your business’ online presence. Connect with us." />
 </>
    );
}
