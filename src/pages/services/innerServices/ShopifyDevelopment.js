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
<li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0"><span className='text-orange'><b>eCommerce Shopify Development –</b></span> Prepare yourself to be blown away by the breadth and depth of our development services. We'll be there every step of the way to help you build a Shopify e-commerce site, from setup to launch.</li>
<li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0"><span className='text-orange'><b>Custom Shopify Development -</b></span> Custom Shopify website creation is our forte. If you're looking for a Shopify website design company that understands the importance of a distinct brand identity, we're here to help.</li>
<li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0"><span className='text-orange'><b>Shopify Theme Development -</b></span> Refresh your website with innovative new Shopify themes. Want responsive and dynamic features that provide considerable development to your enterprises. To create an eye-catching e-commerce website, we use highly competent web designers that can use the most up-to-date technologies.</li>
<li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0"><span className='text-orange'><b>Shopify Migration -</b></span> Take your e-commerce shop a notch up with Shopify migration. You don't have to worry about business app complications, inconsistencies, and weak parts on your site when you work with our Shopify experts.</li>
<li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0"><span className='text-orange'><b>Shopify Integration -</b></span> Using your current Shopify store, you may create a unique shopping experience. A shopping cart, APIs, payment gateways or other third-party apps may be integrated into your website with our assistance.</li>
<li data-aos="fade-up" data-aos-delay="600" data-aos-offset="0"><span className='text-orange'><b>Shopify App Development -</b></span> For your e-commerce site, we'll create a mobile app that's both responsive and appealing. This Shopify software may help your company grow and become more efficient. Each of our apps is designed to provide the best possible user experience.</li>
</ul>

const Process=[
    {
      subTitle:"Do You Give Demo While Hiring Dedicated Shopify Developers?",
      Des:"Yes, we provide you with a brief demo and introduction if you decide to use New Vision Digital's certified Shopify professionals. This aids in engagement monitoring and comprehension. Knowing if we can produce satisfactory results would be helpful to you. We can also give you access to another expert if necessary because we have a large staff of Shopify specialists."},
      {
    subTitle:"How Many Team Members Will You Assign To My Shopify Project? Please Define Their Roles.",
      Des:"Depending on the needs of each specific project, the team composition varies. To guarantee a high-performing online solution, we also deploy business development executives, SEO specialists, and digital marketing specialists in addition to Shopify developers. The team can be modified to meet your specific needs.",
      },
      {
    subTitle:"Do you offer assistance and upkeep once the project is finished?",
      Des:"Yes, we favor developing enduring bonds with our customers. As a result, we keep an eye on the operation of the website and address any problems. After deployment, we offer both technical and non-technical support to help you expand your business.",
      },
     
]

export default function ShopifyDevelopment(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);
    const [serviceTrafficData, setServiceTrafficData] = useState([]);
    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Customer Recommendation",
          Description:"For us, customer satisfaction is the most important consideration. We are the best shopify development company in USA who employ the most up-to-date technologies and frameworks available.",
      },
      {
          SubHeading:"Transparency",
          Description:"We make our customers an important part of the development process and take your feedback into account. Throughout the lifecycle, integrity and mutual respect are at the core of all we do.",
      },
      {
          SubHeading:"Professionals with specialized training",
          Description:"Working with numerous technologies and frameworks is our strength. They can design cost-effective solutions for your organisation.",
      },
      {
          SubHeading:"Development of High Quality",
          Description:"The quality of our work is never compromised. We provide exemplary Shopify development to businesses.",
      },
      {
        SubHeading:"Reliability and Assistance",
        Description:"Our developers provide hassle-free maintenance and support. This enables us to tackle Shopify website difficulties or glitches at the earliest.",
    },
    {
        SubHeading:"Set a Deadline",
        Description:"Shopify web development projects are completed on time or ahead of schedule. A time estimate is given when a thorough strategy is drawn up.",
    },
    {
        SubHeading:"Cost-Efficient",
        Description:"We provide our services at reasonable pricing and customize them to fit your needs. When it comes to expanding on a shoestring budget, we are here to assist.",
    },
    ];
      setServiceEntityData(EntityData);
       },[])
       useEffect(()=>{
        const Process=[
            {
            SubHeading:"Accumulating Information :",
            Description:"To deliver the best Shopify development services in USA, we begin by assessing your project's viability, conducting a competitive analysis, and determining your business objectives, among other things.",
              Image:IMAGES.servicePage.ShopifyEntity1,
            },
            {
            SubHeading:"Prototype :",
            Description:"We generate high-fidelity wireframes and prototypes for your website design.",
              Image:IMAGES.servicePage.ShopifyEntity2,
            },
            {
             SubHeading:"Development phase :",
             Description:"Website pages and material are implemented in a CMS by us.",
              Image:IMAGES.servicePage.ShopifyEntity3,
            },
            {
            SubHeading:"Evaluation :",
            Description:"Every component of your website, from its look and feel to its functionality, is put through a rigorous evaluation process.",
              Image:IMAGES.servicePage.ShopifyEntity4,
            },
            {
            SubHeading:"Deployment :",
            Description:"We'll work with you to create and test your website, then help you get it up on the platform of your choice.",
            Image:IMAGES.servicePage.ShopifyEntity5,
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
      <Breadcrumb Title="Shopify Development" Image={IMAGES.servicePage.ShopifyBanner} />
      <ServiceAbout
       Heading="Exceptional Shopify Development Service that Boosts Your Business's Success"
       Des1="Has your online brand reputation taken a hit? Are you traumatized by its consequences? Here’s your chance to redeem your brand reputation. To avoid your online reputation from being damaged, you must work with an ORM company that specializes in removing unfavorable search results about you or your business." 
       Des2="New Vision Digital holds a decade of experience in helping brands redeem their lost reputation. You can hire Shopify Developers in USA who can assist you in building your business." 
       Image={IMAGES.servicePage.ShopifyAbout}
       />
        <ServiceList
        Heading="Enhance every aspect of your company with High-Quality Solutions"
        Listing={Listing}
         />
      <ServiceEntities Heading="Our Commitment to Service Makes Us the Right Choice" EntityData={serviceEntityData} Image={false} />
      <section className="how-we-do">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">How Our Shopify Development Service <span className='highlight'>Benefits Businesses</span></h2>
                </div>
            </div>
            <div className="row mt-3 align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                <div className="col-md-6">
                <ul>
                    <li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0"><span className='text-orange'><b>Industry Experience :</b></span> Our Shopify web developers have a wide range of expertise in a variety of industries.</li>
                    <li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0"><span className='text-orange'><b>Engaging UI :</b></span> We create engaging websites with bespoke features and themes for even the most intricate business procedures.</li>
                    <li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0"><span className='text-orange'><b>Secured :</b></span> We are particularly concerned with the security of the Shopify website and the personal data of our customers.</li>
                   
                </ul>
              
                  </div> 
                <div className="col-md-6">
                   <img src={IMAGES.servicePage.ShopifyBenefitsBusiness} className="img-fluid" alt="Web Design" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" />
                </div>    
        </div>
        </div>
    </section>
    <ServiceEntities
            Heading="How do we do it for you?"
            EntityData={serviceTrafficData} 
        />
        <WebsiteProcess
         Heading="General FAQ"
         Process={Process}
         Para={false}
          />
         <ReadyToGet Title="Enhance Your Brand and Product Visibility Through Shopify." Description="Connect with our experts to get a quote for your business today." />
 </>
    );
}
