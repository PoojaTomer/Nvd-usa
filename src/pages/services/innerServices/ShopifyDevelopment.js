import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import GreenBgSec from './components/GreenBgSec';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import WebsiteProcess from './components/WebsiteProcess';
import ServiceList from './components/ServiceList';

const Listing = <ul className="mt-3">
<li>eCommerce Shopify Development – Prepare yourself to be blown away by the breadth and depth of our development services. We'll be there every step of the way to help you build a Shopify e-commerce site, from setup to launch.</li>
<li>Shopify Migration - Take your e-commerce shop a notch up with Shopify migration. You don't have to worry about business app complications, inconsistencies, and weak parts on your site when you work with our Shopify experts.</li>
<li>Custom Shopify Development - Custom Shopify website creation is our forte. If you're looking for a Shopify website design company that understands the importance of a distinct brand identity, we're here to help.</li>
<li>Shopify Integration - Using your current Shopify store, you may create a unique shopping experience. A shopping cart, APIs, payment gateways or other third-party apps may be integrated into your website with our assistance.</li>
<li>Shopify Theme Development - Refresh your website with innovative new Shopify themes. Want responsive and dynamic features that provide considerable development to your enterprises. To create an eye-catching e-commerce website, we use highly competent web designers that can use the most up-to-date technologies.</li>
<li>Shopify App Development - For your e-commerce site, we'll create a mobile app that's both responsive and appealing. This Shopify software may help your company grow and become more efficient. Each of our apps is designed to provide the best possible user experience.</li>
</ul>
const Resions=[
    {
      subTitle:"Customer Recommendation",
      Des:"For us, customer satisfaction is the most important consideration. We employ the most up-to-date technologies and frameworks available."},
      {
        subTitle:"Transparency",
      Des:"We make our customers an important part of the development process and take your feedback into account. Throughout the lifecycle, integrity and mutual respect are at the core of all we do.",
      },
      {
        subTitle:"Professionals with specialized training",
      Des:"Working with numerous technologies and frameworks is our strength. They can design cost-effective solutions for your organisation.",
      },
      {
        subTitle:"Reliability and Assistance",
      Des:"Our developers provide hassle-free maintenance and support. This enables us to tackle Shopify website difficulties or glitches at the earliest.",
      },
      {
        subTitle:"Set a Deadline",
      Des:"Shopify web development projects are completed on time or ahead of schedule. A time estimate is given when a thorough strategy is drawn up.",
      },
      {
        subTitle:"Cost-Efficient",
      Des:"We provide our services at reasonable pricing and customise them to fit your needs. When it comes to expanding on a shoestring budget, we are here to assist.",
      },
]
const Process=[
    {
      subTitle:"Accumulating Information :",
      Des:"We begin by assessing your project's viability, conducting a competitive analysis, and determining your business objectives, among other things."},
      {
    subTitle:"Prototype :",
      Des:"We generate high-fidelity wireframes and prototypes, for your website design.",
      },
      {
    subTitle:"Development phase :",
      Des:"Website pages and material are implemented in a CMS by us.",
      },
      {
    subTitle:"Evaluation :",
      Des:"Every component of your website, from its look and feel to its functionality, is put through a rigorous evaluation process.",
      },
      {
    subTitle:"Deployment :",
        Des:"We'll work with you to create and test your website, then help you get it up on the platform of your choice.",
        },
]

export default function ShopifyDevelopment(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Industry Experience",
          Description:"Our Shopify web developers have a wide range of expertise in a variety of industries.",
      },
      {
          SubHeading:"Engaging UI",
          Description:"We create engaging websites with bespoke features and themes for even the most intricate business procedures.",
      },
      {
          SubHeading:"Secured",
          Description:"We are particularly concerned with the security of the Shopify website and the personal data of our customers.",
      },
      {
          SubHeading:"Development of High Quality",
          Description:"The quality of our work is never compromised. We provide exemplary Shopify development to businesses.",
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
      <Breadcrumb Title="Shopify Development" Image={IMAGES.servicePage.servicesBanner} />
      <ServiceAbout
       Heading="Exceptional Shopify Development Service that Boosts Your Business's Success"
       Des1="Has your online brand reputation taken a hit? Are you traumatized by its consequences? Here’s your chance to redeem your brand reputation. To avoid your online reputation from being damaged, you must work with an ORM company that specialises in removing unfavourable search results about you or your business." 
       Des2="New Vision Digital holds a decade of experience in helping brands redeem their lost reputation." 
       Image={IMAGES.servicePage.Shopify}
       />
        <ServiceList
        Heading="Enhance every aspect of your company with High-Quality Solutions"
        Listing={Listing}
         />
      <ServiceEntities Heading="How Our Shopify Development Services" EntityData={serviceEntityData} Image={false} />
        <GreenBgSec
       Heading="Our Commitment to Service Makes Us the Right Choice"
       Resions={Resions}
       Image={IMAGES.servicePage.Icri}
        />
        <WebsiteProcess
         Heading="How do we do it for you?"
         Process={Process}
          />
         <ReadyToGet Title="Enhance Your Brand and Product Visibility Through Shopify." Description="Connect with our experts to get a quote for your business today." />
 </>
    );
}
