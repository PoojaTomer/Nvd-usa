import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import GreenBgSec from './components/GreenBgSec';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import ServiceList from './components/ServiceList';

const Listing = <ul>
<li>Create content on-site and off-site that drives traffic and leads your website to save a spot on the top of page 1 on SERPs.</li>
<li>Strategies and campaigns that don’t go south.</li>
<li>Remain up to date for campaigns with paid tools such as SEMrush and Google Analytics.</li>
<li>Prioritize and plan as you like. We keep you in the loop and take feedback on things you wish to focus more on.</li>
<li>Have your own SEO team that does the smart work to achieve what you desire.</li>
</ul>
const Resions=[
    {
      subTitle:"How does your firm conduct keyword research?",
      Des:"Our SEO specialists make use of various tools to conduct keyword analysis across all industry types. We determine the search volume, the keyword’s relevancy to our client’s business, and the chances of its leading to sales and competitiveness. Our team diligently handpicks keywords that will contribute to delivering the best results. "},
      {
       subTitle:"Do you do SEO for eCommerce websites?",
      Des:"Yes. Although eCommerce websites have their own set of unique challenges, our professional SEO services in the USA have delivered successful campaigns time and again. ",
      },
      {
    subTitle:"How much will SEO cost for my company?",
      Des:"The cost of an SEO campaign varies depending on the targeted keywords, the website’s history, the industry, and the work required to meet your objectives. We work with businesses of all sizes and have cost-effective solutions that deliver real-time results. Our specialists will evaluate your requirements and create a successful strategy for you.",
      },
]
export default function SEO(props) {
  const [serviceEntityData, setServiceEntityData] = useState([]);
  useEffect(()=>{
    const EntityData = [
        {
        SubHeading:"Strategise:",
        Image:IMAGES.servicePage.SeoEntity1,
        Description:"We’ll map out an effective plan in depth keyword research keeping in mind your audience & niche. Our team will map the plan with your pages and work towards implementing it. List down all that you want us to deliver, and we will identify the best possible solutions to make your website visible on top pages of SERPs.",
        Event:true,
    },
    {
        SubHeading:"Personalise:",
        Image:IMAGES.servicePage.SeoEntity2,
        Description:"We produce results that help our clients steal the limelight and shine bright in the digital world. Our exceptionally talented content writers produce refreshing content for on-site ( web pages, web blogs and more) with the best technical approach and off-page ( articles, blogs, press releases, classifieds and more) with high-ranking keywords. We assure a positive experience and better ROI with our content and services.",
        Event:false,
    },
    {
        SubHeading:"Optimise:",
        Image:IMAGES.servicePage.SeoEntity3,
        Description:"Once we set up a strategy, we use a holistic digital approach to optimise the website for driving traffic, converting leads, getting top ranks and bringing revenue for the brand.",
        Event:true,
    },
    {
        SubHeading:"Analyse:",
        Image:IMAGES.servicePage.SeoEntity4,
        Description:<>
        <p>To get an overview of your website’s health and performance after optimisation, we conduct a comprehensive website analysis which includes-</p>
                <ul>
                    <li>Domain analysis</li>
                    <li>Traffic analysis</li>
                    <li>On-page analysis</li>
                    <li>Off-page analysis</li>
                    <li>User interface analysis</li>
                </ul>
        </>,
         Event:false,
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
      <Breadcrumb Title="Search Engine Optimization" Image={IMAGES.servicePage.servicesBanner} />
      <ServiceAbout
       Heading="Aiming for 3X ROI? Let <span className='highlight'>our SEO Experts</span> Pave the Way to the Top of SERPs"
       Des1="New Vision Digital provides result-oriented SEO services to help businesses improve their website’s visibility and increase their traffic organically. Get the exposure your brand needs and watch your website climb the ladder to the coveted spot on the SERPs." 
       Des2="Reach out to us to avail our professional SEO services in the USA today." 
       Image={IMAGES.servicePage.SeoAbout}
       />
       <ServiceList
        Heading="Entrust us to Scale Your Website Rankings, Outrank your Competitors and Boost your Sales"
        Listing={Listing}
         />
         <section className="inner-service-sec4">
    <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <h2>Our Suite of <span className='highlight'>SEO Services</span></h2>
            </div>
        </div>
        <div className="mt-5 align-items-center">
          <ul>
            <li><span className='text-orange'><b>SEO Consulting Services:</b></span> Develop, implement and optimize an SEO-friendly strategy that matches the taste of your ideal audience with SEO Consulting services. Our specialists offer recommendations, hands-on reports, and documentation to help you understand SEO and its requirements for your business.  </li>
            <li><span className='text-orange'><b>Local SEO:</b></span> An increase in search performance is directly related to the amount of foot traffic to your business’s physical location. As the best SEO company in the USA, we get you on the map so that your high-intent customers can come across you while performing ‘near me’ searches.</li>
            <li><span className='text-orange'><b>International SEO:</b></span> Planning to Connect with the audience of the global market in their native language? Our specialists are here to your rescue. Deliver engaging and incredible experiences wherever you plan to place your foot, regardless of language or location, with our multilingual and multiregional SEO strategy.</li>
            <li><span className='text-orange'><b>eCommerce SEO:</b></span> Pave the way for increased conversions by attracting high-intent customers with our exceptional eCommerce SEO services. We’ll assist you in optimizing descriptions, coming to grips with technical issues, and upgrading the internal linking structure to uplift browsing. </li>
            <li><span className='text-orange'><b>YouTube SEO:</b></span> Increase website traffic, leads and online sales by optimizing youtube videos and content without the hassle of managing the account by yourself. At New Vision Digital, we have the best team at the helm to assist our clients in expanding their customer base and sales. </li>
            <li><span className='text-orange'><b>CMS SEO:</b></span> Our cookie cutter approach to optimization of Content Management systems (CMS) can help you thrive in the digital marketing world. Get the best of both worlds- effective CMS optimization and personal control over your business’s website with us.
            </li>
            <li><span className='text-orange'><b>App-store Optimization:</b></span> Take your mobile marketing to the top level with App-store optimization services from New Vision Digital. Our specialists hold years of experience in app store optimization and have helped hundreds of brands boost their rankings, increase traffic, and rank higher on the app store’s search results. </li>
          </ul>
            
        </div>
             
    </div>
</section>
      <ServiceEntities Heading="Drive More Traffic, Build More Leads And Bring More Revenue. New Vision Digital Helps Businesses to" EntityData={serviceEntityData}  />
      <GreenBgSec
       Heading="Reasons Why You Should Entrust Us with your Website’s Development"
       Resions={Resions}
       Image={IMAGES.servicePage.SeoResion}
      //  Image1={IMAGES.servicePage.Icri}
        />
      <ReadyToGet Title="Experience the Magic of Marketing and Understand the Science of Growth in Sales with our Marketing Services" Description="Connect with our experts to get a quote for your business today." />
 
      </>
    );
}