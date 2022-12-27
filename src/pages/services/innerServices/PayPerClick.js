import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import GetAQuoteButton from '../../../components/GetAQuoteButton';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import ServiceList from './components/ServiceList';
import WebsiteProcess from './components/WebsiteProcess';

const Listing = <ul>
<li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Bespoke PPC management services for high conversions</li>
<li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">Data-driven Paid Media strategy to help you optimize your ROI</li>
<li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Proactive optimization for delivery of the best possible results</li>
<li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Complete transparency that makes every dollar worth it. </li>
<li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">Enhanced Brand Visibility</li>
<li data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">Get your campaign up and running instantly</li>
<li data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">Immediate results after the campaign launch</li>
<li data-aos="fade-up" data-aos-delay="800" data-aos-offset="0">Trackable and Measurable data like clicks, impressions & conversions</li>
</ul>
const Process=[
    {
      subTitle:"How are PPC advertising services prices?",
      Des:"Companies that offer Pay Per Click services in the USA offer an array of pricing models. While some may charge one flat fee, others may charge based on performance, and some also charge on the basis of how much you are willing to pay."},
    {
    subTitle:"How does PPC bidding work?",
    Des:"PPC bidding is done on the basis of an auction. When a bid is placed by an advertiser, the ad network compares it against other bids. The final cost per click will be determined by the ad network after taking into account the ad’s quality, the landing page, and other factors.",
    },
    {
    subTitle:"Can I do PPC on my own instead of hiring a PPC advertising company?",
    Des:"It is not recommended to do Pay per click on your own. It is a very highly complicated field that necessitates good math and analytical abilities. Most first-time advertisers make costly errors that reduce their potential revenue.",
    },
]
export default function PayPerClick(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);
    const [serviceBenefitsData, setServiceBenefitsData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Search Ads",
          Description:"Perfect for one-time campaign promotions or short-sales cycles. This can help in generating high-quality leads and grab new customers.",
      },
      {
          SubHeading:"Display Ads",
          Description:"The most effective way of reaching a wider audience is through Display ads. For lengthy sales cycles, we recommend these to businesses.",
      },
      {
          SubHeading:"Social Ads",
          Description:"Programmed to reach a specific audience, these ads are based on their respective hobbies, interests, networks, etc. Ideally suited for brands having an active social media presence.",
      },
      {
          SubHeading:"Remarketing Ads",
          Description:"Doubling up your turnover is now easy with remarketing ads. Compel your earlier visitors to become your customers with remarketing ads.",
      },
      {
        SubHeading:"Google Shopping Ads",
        Description:"Incredible ads that allow prospects to see products and their prices on SERPs before even clicking. These provide a higher chance of conversions.",
    },
    {
        SubHeading:"Amazon PPC Ads",
        Description:"One of the most popular PPC services in the digital landscape. Boost sales by generating brand awareness and increasing your profits.",
    },
    {
        SubHeading:"Local Services Ads",
        Description:"We partner with your business to provide more visibility to your business locally. The best part is you get to pay for only those clicks that turn into leads.",
    },
    {
      SubHeading:"Gmail Sponsored Promotions",
      Description:"These ads allow you to directly reach those leads that are interested right in their inbox! Maximize high-quality clicks with GSPs.",
  },
   
      ];
      setServiceEntityData(EntityData);
       },[])
       useEffect(()=>{
        const Process=[
            {
            SubHeading:"Define PPC- SEM goals",
            Description:"We initiate the process by determining your PPC–SEM goals, reviewing historical data, and curating a clear plan that meets your requirements.",
            Image:IMAGES.servicePage.PpcEntity1,
            },
            {
            SubHeading:"Implement Tracking",
            Description:"After identifying your campaign metrics and establishing the PPC structure, we implement basic to advanced tracking options as per the requirements of the campaigns.",
            Image:IMAGES.servicePage.PpcEntity2,
            },
            {
             SubHeading:"Building and targeting keywords",
             Description:"When approaching new accounts, businesses often pay more than they do by removing poor ads and keywords. Here, we either refine your account or make a new one from scratch. Our process and methodology are unmatched, which will maximize every bid in your campaign.",
            Image:IMAGES.servicePage.PpcEntity3,
            },
            {
            SubHeading:"Develop Ad copies and creatives",
            Description:"We have a team of highly qualified and experienced professionals who ensure that your ad copy and creatives are as good as your vision. With our experience, expertise, testing abilities, and data analysis, we ensure that all copies are best-in-class.",
            Image:IMAGES.servicePage.PpcEntity4,
            },
            {
            SubHeading:"Optimize Landing Pages",
            Description:"As the best PPC company in the USA, we ensure to get the best conversion rates for your pages. Hence, we use our tested and unique CRO methodology that delivers what you expect.",
            Image:IMAGES.servicePage.PpcEntity5,
            }, 
            {
            SubHeading:"Craft bidding strategy",
            Description:"The right bid is critical when it comes to PPC Advertising. That is why we use our insights and advanced software to ensure that our clients never overpay. When we are up and running, our team monitors, reports, and refines the bidding strategy on a daily basis.",
            Image:IMAGES.servicePage.PpcEntity6,
            },
        ]
        setServiceBenefitsData(Process);
         },[])
    return (
        <>
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
            <meta name="keyword" content="Nvd usa" />
      </Helmet>
      <Breadcrumb Title="Pay Per Click" Image={IMAGES.servicePage.ppcBanner} />
      <ServiceAbout
            Heading="Drive 3X Revenue through your Sales Funnel like Never Before with PPC Management"
            Des1="The digital landscape is expanding at an exceptional rate, and so are the websites. Every business wants to explore new marketing avenues with which they can maximize their conversion paths. But the road to business growth is full of challenges. Even though there is the availability of several digital marketing channels and advertising tools, most businesses lack visibility to their target audience. If you are looking for an instant campaign boost with a fast ROI, the most profitable choice for you is Pay Per Click Advertising. You can maintain complete control of your Paid search marketing efforts and gain positive business outcomes with PPC services." 
            Des2="To help you fight this battle and emerge victorious, we at New Vision Digital are ready to become your ammunition against the competitive world. We are undisputedly the leading provider of the finest and most reliable Pay Per click advertising services in the USA. As of yet, we have partnered with various industry giants and marketing professionals and have helped increase their leads, boost their brand awareness, and reach their respective goals. If you want an immediate boost in your business, then our PPC agency in the USA has got your back." 
            Image={IMAGES.servicePage.PpcAbout}
        />
        <ServiceList
            Heading="Snag a top spot on SERPs "
            para="Here’s why you should opt for our services"
            Listing={Listing}
        />
      <ServiceEntities
        Heading="Our Suite of PPC Services"
        para="To build the online presence of a company, there are different types of PPC campaigns. Our team will work as per your requirements to determine which PPC ads are ideal for your business. Depending upon your goals, here are the different types of PPC ads you can indulge in- "
        EntityData={serviceEntityData} Image={false} />
      <ServiceEntities
        Heading="Reap Benefits with PPC Advertising at New Vision Digital"
        para="Here’s how we do it for you"
        EntityData={serviceBenefitsData} 
        /> 
        <WebsiteProcess
         Heading="Frequently Asked Questions about PPC Services."
         Process={Process}
         Para={false}
          />
         <ReadyToGet Title="Is fast ROI something that you are looking for? If yes, then why don’t you think about PPC?" Description="Connect with our experts today to get a free website audit!" form={false} />
 </>
    );
}
