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
      subTitle:"Robust Solutions",
      Des:"As a reliable eCommerce development company, we are driven toward extending scalable and feature-packed e-commerce websites to our clients. Moreover, you can adapt your website as per your requirements due to its scalability"},
      {
        subTitle:"Safe and Secure Websites",
      Des:"At new Vision Digital, we comprise a team of developers who leave no stone turned to ensure your website is highly secure and protected. We deploy various security extensions and safety measures to protect your website from all kinds of hacking and malware attacks.",
      },
      {
        subTitle:"Fast Speed",
      Des:"As experienced developers, we understand what role does webpage loading speed play in providing a better user experience and higher search ranking. We adhere to the W3C coding standards and perform website optimisation to ensure faster speed for your site. SEO Friendly: Our developers comply with various standards such as SEO, accessibility and WCAG to deliver an SEO friendly website to you.",
      },
      {
        subTitle:"Experience",
      Des:"With a robust experience of over 11 years, we have established ourselves as a well-known eCommerce development company. Our experts are equipped with the technical know-how to offer result-driven solutions for your business.",
      },
]
const Process=[
    {
      subTitle:"Discovery :",
      Des:"Before commencing any project, we gather the requirements, conduct a competitive analysis and find your business goals to discover its feasibility."},
      {
    subTitle:"Design :",
      Des:"As per your requirements, our skilled developers create wireframes and prototypes for the design of your website.",
      },
      {
    subTitle:"Development :",
      Des:"Our team commences the work of developing web pages and other website components which are implemented in a CMS.",
      },
      {
    subTitle:"Testing :",
      Des:"We conduct a stringent test procedure to check various aspects of your website, including its performance, appearance and functionality.",
      },
      {
    subTitle:"Deployment :",
        Des:"After developing and testing the website successfully, our developers will deploy your website on the desired platforms and conclude the setup process.",
        },
]
export default function MagentoDevelopment(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Magento eCommerce Web Design",
          Description:"Get an advanced Magento eCommerce website with top-notch features and functionality for your business with our web design service. Our web designers and developers employ their skills to the best of their ability to develop your website as per your requirements.",
      },
      {
          SubHeading:"Custom Magento Development",
          Description:"Our team is equipped to develop a tailor-made website that includes custom functionalities and meets the needs of your business. We’ll deliver the best quality solutions after performing an analysis of your requirements and business ecosystem.",
      },
      {
          SubHeading:"Magento Consulting Service",
          Description:"Get the right guidance and support to assist your business scale heights. We have a team of professionals who extend practical and successful strategies to help you grow your business.",
      },
      {
          SubHeading:"Multi-vendor eCommerce Development",
          Description:"Get all your vendors to sell their products on a single marketplace. We have the right skills and experience to harness the potential of Magento development for developing an eCommerce marketplace and give your users an enthralling experience.",
      },
      {
        SubHeading:"Magento Migration Service",
        Description:"Still stuck on a Magento 1. x website? Put an end to your worries as our developers will assist you to upgrade your website to the latest Magento 2. x platform- all while ensuring the safety of your data. We have a team of seasoned developers who are adept at handling all challenges that come in the way of migration and optimising your website for better performance.",
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
      <Breadcrumb Title="Magento Development" Image={IMAGES.servicePage.servicesBanner} />
      <ServiceAbout
       Heading="Responsive Mobile Website"
       secHeading="Make the Most of your eCommerce Potential with New Vision Digital"
       Des1="As a premier Magento Development company, New Vision Digital is known for delivering out of the box solutions for custom websites in the UAE. Abreast of the latest technicalities and features of Magento, our creative developers blend their knowledge and expertise to extend phenomenal websites to our clients." 
       Des2="Enjoy a seamless website development, the latest technology adoption and peace of mind with our services." 
       Image={IMAGES.servicePage.Magento}
       />
      <ServiceEntities Heading="Our Magento Development Capabilities" EntityData={serviceEntityData} Image={false} />
        <GreenBgSec
       Heading="Perquisites of Hiring us As your Magento Development Partner"
       Resions={Resions}
       Image={IMAGES.servicePage.Icri}
        />
        <WebsiteProcess
         Heading="Our Ideal process of delivering exceptional Magento Development Services"
         Process={Process}
          />
         <ReadyToGet Title="Want to upgrade your website on the Magento Development Platform? We have got you covered." Description="Reach out to our experts to avail of our services today!" />
 </>
    );
}

