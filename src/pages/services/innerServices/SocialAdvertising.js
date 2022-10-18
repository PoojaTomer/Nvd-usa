import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import GetAQuoteButton from '../../../components/GetAQuoteButton';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import ServiceEntities from './components/ServiceEntities';
import WebsiteProcess from './components/WebsiteProcess';

const Process=[
    {
      subTitle:"Amplifying Organic Posts",
      Des:"If you are working on a limited budget, social media advertising is well-suited for boosting the online reach of your organic posts."},
      {
    subTitle:"Gain New Followers",
      Des:"With paid social advertising, reaching to new market segments becomes easier and faster than any other marketing method.",
      },
      {
    subTitle:"Generate Higher Website Conversions",
      Des:"Social media ads have the capability to double up the website conversion rates and cuts your marketing costs significantly.",
      },
      {
    subTitle:"Grab Qualified Leads",
      Des:"As per your marketing intent, social media ads can be easily optimized to drive targeted leads and remarketing the failed ones.",
      },
]
export default function SocialAdvertising(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Facebook Ads",
          Description:"Video ads, poll ads, carousel ads, image ads, and so many options are just waiting for you to micro-target your audience and generate immediate results.",
      },
      {
          SubHeading:"Instagram Ads",
          Description:"Instagram has billions of active users;thus, it offers incredible opportunities for business growth. Through sponsored content and creative ads, your brand can generate great outcomes.",
      },
      {
          SubHeading:"Linkedin Ads",
          Description:"For B2B marketers aiming to maximize the effectiveness of social media advertising, LinkedIn is a top recommendation.",
      },
      {
          SubHeading:"Pinterest Ads",
          Description:"The most cost-effective social mediachannel for advertisingto increase goal completion is undoubtedly Pinterest.",
      },
      {
        SubHeading:"YouTube Ads",
        Description:"Reaching the right customers and people who matter to you is now easy with YouTube ads.",
    }
   
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
      <Breadcrumb Title="Social Advertising" Image={IMAGES.servicePage.servicesBanner} />
      <section className="inner-service-sec2">
      <div className="overlay">
    <div className="container">
        <div className="row mt-5 align-items-center">
            <div className="col-md-6">
                <img src={IMAGES.servicePage.SAddAbout} className="img-fluid" alt="web design About" />
            </div>
            <div className="col-md-6">
                <h2 className="text-left">Increase Your Sales Exponentially with Social Media Advertising</h2>
               <p>The digital world is brimming with businesses and in this competitive landscape, rising to prominence can only be done with strategic campaigning. New Vision Digital works for a variety of business niches and aims to enhance conversion and retention rates with increased customer acquisition. We know that your brand’s visibility is a top priority for you and this can be maximized immediately with effective social media advertising. Utilizing social media in an intelligent way will provide incredible opportunities for growth, foster leads and transform your viewers into customers!</p>
            </div>
        </div>
        <div className="row mt-5 align-items-center">
            <div className="col-md-6">
                <h2 className="text-left">Do You Want To Convert Your Viewers Into Customers?</h2>
               <p>Social Media ads are a blessing when it comes to targeting your audience and creating instant awareness about your brand. You might not know but in the last couple of years, social media ads have gained an edge over other digital marketing methods.So, if you have big goals for your company, NVD can help in harnessing the power of social media for your brand. With effective and engaging ads for Facebook, Instagram, LinkedIn, and other social media platforms, we can extract what you need – higher and faster ROI!</p>
               <p>With each ad campaign, we target specific audience based on a set criterion. Social ads are also not big on budget as you only get to pay for the number of impressions your ads get. Isn’t that something you would want to invest in?</p>
               <GetAQuoteButton Title="Get A Quote" />
            </div>
            <div className="col-md-6">
                <img src={IMAGES.servicePage.SAddAbout1} className="img-fluid" alt="web design About" />
            </div>
        </div>
    </div>
    </div>
</section>
      <ServiceEntities Heading="Social Media Platforms Where You Must Advertise" para="There is a myriad of social media platforms available but which one of them is right for you to display your social media ads? You cannot simply follow the trend and hop on a wagon of social media advertising because it may never deliver profitable results in favour of your business" para2="At New Vision Digital, we help you in determining which social media platforms will suit your business needs. Have a look at the platforms we can help you with:" EntityData={serviceEntityData} Image={false} />
      <WebsiteProcess Heading="How Can Your Brand Benefit from Social Media Advertising?" para="Paid social media advertising is undoubtedly the best way to monetize from the best social media platforms. Each business wants to boost their conversion rates and social media advertising is perfect for that. Here are some reasons why you need to invest in paid social media campaigns:" Process={Process} />
      <section className="innerservice-sec4">
    <div className="container">
        <div className="row mt-3 ">
            <div className="col-md-6">
               <img src={IMAGES.servicePage.SAddListing} className="img-fluid" alt="Web Design" />
            </div>
            <div className="col-md-6">
                <h2 className="text-left">Sit Back and Relax, Let NVD do the Work for You!</h2>
                <p>Not everyone has the right knowledge and information about the changing algorithms of social media sites and the evolving marketing strategies. But our social media geeks have the perfect strategies up their sleeves to help you get your business skyrocketing in absolutely no time.</p>
                <p>Right from targeting the appropriate keywords to targeting the right audience and setting realistic goals, NVD tailors strategies that fit your purpose!Throughout our years in the industry, we have worked with several leaders and have driven outstanding results. Organic approach, engaging content and ROI-driven results, if that interests you, then shake our hand.</p>
            </div>            
    </div>
    </div>
</section>
      
    <ReadyToGet Title="Ready to Give Boost to Your Business?" Description="If yes, then what are you waiting for? Connect with our experts for customized social media ad campaigns." form={false} />
 </>
    );
}

