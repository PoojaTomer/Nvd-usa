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
      subTitle:"Unrivalled Quality of services",
      Des:"As a reputed WordPress website development company, we are committed to delivering the best quality WordPress websites. Our developers adhere to the industry standards and develop unparalleled solutions for our clients."},
      {
        subTitle:"Proven Methodologies",
      Des:"Throughout our development journey, we have tried various proven methodologies that have enabled us to deliver robust solutions to our clients.",
      },
      {
        subTitle:"SEO friendly Websites",
      Des:"Our developers ensure compliance with the latest guidelines and perform necessary optimisation to make your website search engine friendly.",
      },
      {
        subTitle:"Non-disclosure agreement",
      Des:"At New Vision Digital, we respect the privacy and confidentiality of our clients. Thereby, before commencing the WordPress web development project, we sign an NDA with our clients.",
      },
]
const Process=[
    {
      subTitle:"Order",
      Des:"After you share your design files and requirements with us, we’ll commence fetching useful insights into your project."},
      {
    subTitle:"Review of Specifications :",
      Des:"Our experts conduct a thorough analysis of your requirements and map a plan of action for your project.",
      },
      {
        subTitle:"Development :",
      Des:"Our seasoned developers get their fingers to the bone to build an effective website for your business.",
      },
      {
    subTitle:"QA",
      Des:"Our team of technically sound inspectors ensure the website is bug-free.",
      },
      {
        subTitle:"Delivery",
          Des:"After checking the proposed website’s functionality and usability, we’ll send it to you for your review.",
          },
]
export default function WordpressDevelopment(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Installation and Configuration",
          Description:"Our team has rich industrial experience in deploying WordPress development solutions to businesses of diverse industries. Get a stress free installation and configuration as our developers bring into play their skills and experience for your web solution.",
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
          Description:"Address your diverse business needs with our customised plugins and extensions on the WordPress Platform. Connect with us to extend the website's functionality as per your requirements.",
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
      Description:"Our techies ensure offering exceptional technical support and services to assist you to update and maintain your website. Keep pace with the updates for your site through our unparalleled support services.",
  },
  {
    SubHeading:"Bug Fixation",
    Description:"Improve the functionality and usability of your website through our bug fixation services. Our quality analysts will fix all the flaws and ensure the optimum performance of your website.",
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
      <Breadcrumb Title="Wordpress Development" Image={IMAGES.servicePage.servicesBanner} />
      <ServiceAbout
       Heading="Responsive Mobile Website"
       secHeading="Leverage the Power of WordPress Websites with Our Web Development Services"
       Des1="New Vision Digital is a leading web development company crafting digital solutions to extend better business results. From conceptualisation to deployment, we ensure delivering an easy-to-manage and high-performing WordPress website for your business." 
       Des2="Scale Heights, Drive More Traffic and Earn More Revenue with our WordPress website development services. Get a quick and convenient WordPress website for your business with our experts. Connect with us to avail of our tendering services today." 
       Image={IMAGES.servicePage.TransframHeading}
       />
      <ServiceEntities Heading="Engage in Growth and Results For your Business With our WordPress Development Services" EntityData={serviceEntityData} Image={false} />
        <GreenBgSec
       Heading="Reasons Why You Should Entrust Us with your Website’s Development"
       Resions={Resions}
       Image={IMAGES.servicePage.Icri}
        />
        <WebsiteProcess
         Heading="Our WordPress Website Development Process"
         Process={Process}
          />
         <ReadyToGet Title="Have a Website Design in mind? Connect with our Creative Developers." Description="Give us the privilege of extending our expertise for your business’ online presence. Connect with us." />
 </>
    );
}
