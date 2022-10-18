import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import ServiceList from './components/ServiceList';

const Listing =  <ul>
<li> <img src={IMAGES.servicePage.AmazonIcon} className="img-fluid" alt="amazon" /></li>
<li> <img src={IMAGES.servicePage.FlipkartIcon} className="img-fluid" alt="flipkart" /></li>
<li> <img src={IMAGES.servicePage.MyntraIcon} className="img-fluid" alt="myntra" /></li>
<li> <img src={IMAGES.servicePage.EbayIcon} className="img-fluid" alt="Ebay" /></li>
<li> <img src={IMAGES.servicePage.MeeshoIcon} className="img-fluid" alt="meesho" /></li>
<li> <img src={IMAGES.servicePage.PaymentIcon} className="img-fluid" alt="Paytm" /></li>
<li> <img src={IMAGES.servicePage.SnapdealIcon} className="img-fluid" alt="snapdeal" /></li>
<li> <img src={IMAGES.servicePage.IndiamartIcon} className="img-fluid" alt="indiamart" /></li>
</ul>  
const AboutSubContent =[
    {
    Title:"DATA-DRIVEN APPROACH -",
    Description:"Prowess the power of data and hard information to drive your business on the path to success.",},
    {
    Title:"ACCELERATE YOUR SALES -",
    Description:"Simplify your strategic decisions and experience steady growth in revenues through our collection and analysis skills.",},
    {
    Title:"ACHIEVE OPERATIONAL EXCELLENCE -",
    Description:"With speed, accuracy, and transparency in our services, we ensure delivering optimum-quality results across all channels and platforms.",},
] 
export default function EcommerceMarketplaceManagement(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);
    const [notVisible, setNotVisible] = useState(false);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Product Data Feed Capturing:",
          Description:"We comprise a team of highly-seasoned professionals who will gather data from various sources, such as PDF documents, web, and physical catalogues. Thereafter, the data gathered will be modified as per the product feed particulars of the chosen marketplaces.",
          Image:IMAGES.servicePage.ECom1,
      },
      {
          SubHeading:"Product Data Entry:",
          Description:"While entering the data into the product information section, our experts pay immense attention that all-important subtleties including brand, item type, particulars, cost, and much more are entered accurately. Our team works conscientiously to ensure the inventory listings are flawless.",
          Image:IMAGES.servicePage.ECom2,
      },
      {
          SubHeading:"Categorisation of Products:",
          Description:"We categorise the entire range of products into relevant categories to make them quickly accessible and searchable for the customers. Classification of products into diverse categories ensures no room for confusion and easier accessibility of products for the customers.",
          Image:IMAGES.servicePage.ECom3,
      },
      {
          SubHeading:"Product Data Optimisation:",
          Description:"A business just doesn’t scale by merely uploading the products. You need to put forth efforts to make those items noticeable to customers. Connect with us to allow our experts to upgrade your postings organically with meta content and successful product depictions.",
          Image:IMAGES.servicePage.ECom4,
      },
      {
        SubHeading:"Product Photo Enhancement:",
        Description:"A product photo creates an image of the brand in the eyes of a customer and can affect the sale of goods. Therefore, to ensure product images do not impact your sales, we review if they match the quality norms and then upload them. In case the images need to be fixed, our image editors take the command and do the needful.",
        Image:IMAGES.servicePage.ECom5,
    },
    {
        SubHeading:"Prodcutdatfeed Sponsored Ads:",
        Description:"A sponsored Ad helps you have an edge over your competitors through a sponsored spot on marketplace listings. No matter your budget, our experts will help you manage bids on marketplace listings through the right sponsored spots- leading to an increase in revenue.",
        Image:IMAGES.servicePage.ECom6,
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
      <Breadcrumb Title="eCommerce Marketplace Management" Image={IMAGES.servicePage.servicesBanner} />
      <ServiceAbout
       Heading="Manage your Marketplace Presence Seamlessly With New Vision Digital"
       Des1="New Vision Digital offers state-of-the-art eCommerce management services to accelerate your brand’s growth on marketplaces such as Amazon, eBay, Flipkart and more. We draw expertise in offering impeccable solutions for marketplace listing services to ensure your business’ growth and scalability." 
       Des2="From day-to-day marketplace optimisation to ASIN management, our team is skilled at executing a strategy that assures a raise in your revenues. Reach out to us to get started." 
       Image={IMAGES.servicePage.Ecommerce}
       subHeading="Manage your Marketplace Presence Seamlessly With New Vision Digital"
       AboutSubContent={AboutSubContent}
       />
       <ServiceList
        Heading="Grow Your Marketplace Presence on E-commerce platforms such as"
        Listing={Listing}
        ImgList={true}
         />
      <ServiceEntities Heading="Our Suite of Marketplace Listing Services Include" EntityData={serviceEntityData}   />
      <ReadyToGet Title="We are all Set to Craft an eCommerce Strategic Roadmap for your business. Are you ready to trust us?" Description="If yes, do not wait anymore and connect with our experts today." form={notVisible} />
 </>
    );
}
