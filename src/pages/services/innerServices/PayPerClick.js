import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import GetAQuoteButton from '../../../components/GetAQuoteButton';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import ServiceEntities from './components/ServiceEntities';

export default function PayPerClick(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Search Ads",
          Description:"If you are working on a limited budget, social media advertising is well-suited for boosting the online reach of your organic posts.",
      },
      {
          SubHeading:"Display Ads",
          Description:"The most effective way of reaching a wider audience is through Display ads. For lengthy sales cycle, we recommend these to businesses.",
      },
      {
          SubHeading:"Social Ads",
          Description:"Programmed to reach a specific audience, these ads are based on their respective hobbies, interests, networks, etc. Ideally suited for brands having an active social media presence",
      },
      {
          SubHeading:"Remarketing Ads",
          Description:"Doubling up your turnover is now easy with remarketing ads. Compel your earlier visitors to become your costumers with remarketing ads.",
      },
      {
        SubHeading:"Google Shopping Ads",
        Description:"Incredible ads that allow prospects to see products and their prices on SERPs before even clicking. These provide a higher chance of conversions.",
    },
    {
        SubHeading:"Amazon PPC Ads",
        Description:"One of the most popularPPC servicesin the digital landscape. Boost sales by generating brand awareness and increase your profits.",
    },
    {
        SubHeading:"Local Services Ads",
        Description:"We partner with your business to provide more visibility to your business locally. The best part is you get to pay for only those clicks that turn into leads.",
    },
    {
      SubHeading:"Gmail Sponsored Promotions",
      Description:"These ads allow you to reach directly to reach those leads that are interested, right in their inbox! Maximize high-quality clicks with GSPs.",
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
      <Breadcrumb Title="Pay Per Click" Image={IMAGES.servicePage.servicesBanner} />
      <section className="inner-service-sec2">
      <div className="overlay">
    <div className="container">
        <div className="row mt-5 align-items-center">
            <div className="col-md-6">
                <img src={IMAGES.servicePage.PpcAbout} className="img-fluid" alt="web design About" />
            </div>
            <div className="col-md-6">
                <h2 className="text-left">Drive Revenue like Never Before with PPC Management</h2>
               <p>The digital landscape is expanding at an exceptional rate and so are the websites. Every business wants to explore new marketing avenues with which they can maximize their conversion paths. But the road to business growth is full of challenges. Even though there is the availability of several digital marketing channels and advertising tools, most businesses lack visibility to their target audience.</p>
            </div>
        </div>
        <div className="row mt-5 align-items-center">
            <div className="col-md-6">
                <h2 className="text-left">Challenges Every Online Business has to face</h2>
                <ul>
                    <li>Cutting Edge Competition</li>
                    <li>Surge in Ad Blockers</li>
                    <li>Stringent Industry Regulation</li>
                    <li>Evolving customer Demands</li>
                    <li>Changing market standards</li>
                </ul>
               <p>This is why businesses are always in an uphill battle, unable to make very little to no progress with their internet marketing strategies.</p>
               <GetAQuoteButton Title="Get A Quote" />
            </div>
            <div className="col-md-6">
                <img src={IMAGES.servicePage.PpcAbout1} className="img-fluid" alt="web design About" />
            </div>
        </div>
        <p className="mt-3">If you are looking for an instant campaign boost with a fast ROI, the most profitable choice for you is Pay Per Click Advertising. You can maintain complete control of your Paid search marketing efforts and gain positive business outcomes with PPC services.</p>
    </div>
    </div>
</section>
<section className="inner-service-sec3">
    <div className="container">
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <h2>How Can PPC Advertising Benefit Your Business?</h2>
                <p className="text-center">In the recent few years, Pay Per Click advertising has proven to be one of the best marketing strategies. It is basically a paid search model which is used to create brand awareness and promote a brand. It helps in gaining immediate traction from a particular target audience each time a user clicks on the PPC ad. Here are the top benefits that your business gets with PPC</p>
            </div>
        </div>
        <div className="row mt-3 justify-content-center">
            <div className="col-md-6">
                <img src={IMAGES.servicePage.PpcListing} className="img-fluid" alt="How Can PPC" />
            </div>
            <div className="col-md-6">
             <ul className="one-list">
                <li>Enhanced Brand Visibility</li>
                <li>Get your campaign up and running instantly</li>
                <li>Immediate results after campaign launch</li>
                <li>Cost-effective way for introduction of your brand and service</li>
                <li>Trackable and Measurable data like clicks, impressions & conversions</li>
                <li>Allows you for absolute customization</li>
             </ul>
            </div>     
    </div>
    <div className="col-md-10 offset-md-1">
        <h2>Leverage Pay Per Click Advertising Services and Increase Your Leads</h2>
        <p className="text-center">New Vision Digital has been a reliable digital marketing partner for hundreds of businesses across the globe. We are a leader in <strong>pay-per-click advertising services.</strong> As of yet, we have partnered with various industry giants and marketing professionals and have helped increase their leads, boost their brand awareness, and reach their respective goals. If you want an immediate boost in your business, then our <strong>PPC services in Dubai</strong> have got your back.</p>
        <h4 className="text-center">Grab instant leads now</h4>
    </div>

    </div>  
</section>
      <ServiceEntities Heading="Different Types of PPC Campaigns" para="To build the online presence of a company, there are different types of PPC campaigns. Our team will work as per your requirements to determine which PPC ads are ideal for your business. Depending upon your goals, here are the different types of PPC ads you can indulge in" EntityData={serviceEntityData} Image={false} />
      <section className="innerservice-sec4">
    <div className="container">
        <div className="row mt-3">
            <div className="col-md-6">
               <img src={IMAGES.servicePage.PpcResion} className="img-fluid" alt="Web Design" />
            </div>
            <div className="col-md-6">
                <h2 className="text-left">Reap benefits with PPC Advertising at NVD</h2>
              <ul>
                <li>At NVD, we initiate the process by determining your PPC – SEM goals.</li>
                <li>After identifying your campaign metrics and establishing the PPC structure, we help in bringing new visitors to your website.</li>
                <li>With our PPC services in Dubai, you can have an immediate gain in your brand visibility.</li>
                <li>Our team will help you navigate all the intricacies and technicalities of PPC.</li>
                <li>We integrate your PPC campaign with your SEO and online marketing campaign for maximum benefit</li>
          

              </ul>
            </div>            
    </div>
    </div>
</section>
      
         <ReadyToGet Title="Is fast ROI something that you are looking for? If yes, then why aren’t you thinking about PPC?" Description="Connect with our experts today!" form={false} />
 </>
    );
}
