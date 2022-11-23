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
<li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Focus on specific audiences and connect with new audience segments</li>
<li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">Increase your follower growth rate on Instagram, Facebook, Pinterest, Twitter, and more</li>
<li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Boost the online reach of your organic posts and reach the audience which is highly interested in what you’re offering</li>
<li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Amplify your website conversions while cutting marketing costs</li>
<li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">Acquire actionable insights and drive more clicks & views</li>
<li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Attract qualified leads into your sales funnel</li>
<li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">Influence your customer’s buying decisions and ramp up your direct sales</li>
</ul>

export default function SocialAdvertising(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);
    const [serviceTrafficData, setServiceTrafficData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Facebook Ads",
          Description:"Video ads, poll ads, carousel ads, image ads, and so many options are just waiting for you to micro-target your audience and generate immediate results.",
      },
      {
          SubHeading:"Instagram Ads",
          Description:"Instagram has billions of active users; thus, it offers incredible opportunities for business growth. Through sponsored content and creative ads on this platform, we can help your brand generate great outcomes.",
      },
      {
          SubHeading:"Linkedin Ads",
          Description:"For B2B marketers aiming to maximize the effectiveness of social media advertising, LinkedIn is a top recommendation.",
      },
      {
          SubHeading:"Pinterest Ads",
          Description:"For B2B marketers aiming to maximize the effectiveness of social media advertising, LinkedIn is a top recommendation.",
      },
      {
        SubHeading:"Pinterest Ads",
        Description:"The most cost-effective social media channel for advertising to increase goal completion is undoubtedly Pinterest.",
    },
    {
        SubHeading:"YouTube Ads",
        Description:"Reaching the right customers and people who matter to you is now easy with YouTube ads.",
    }
   
      ];
      setServiceEntityData(EntityData);
       },[])
    useEffect(()=>{
        const Process=[
            {
            SubHeading:"Assign an experienced Social Media Expert for your project",
            Description:"To Start with, we’ll assign an experienced social media expert to your project to decrease the marketing costs and increase the results. The expert will learn about your business, develop a social media advertising strategy and execute it to deliver the best results.",
              Image:IMAGES.servicePage.SAddEntity1,
            },
            {
            SubHeading:"Develop an Advertising Strategy",
            Description:"Next, we work on developing a clear and concise advertising strategy that makes every dollar on social media advertising worth spending. This strategy will consist of tried and tested advertising funnels to show how we work to convert the leads into website traffic and conversions.",
              Image:IMAGES.servicePage.SAddEntity2,
            },
            {
             SubHeading:"Curate Creative and Engaging Advertisements",
             Description:"We launch ads that make people actually want to click on them. Our ad specialists write creative ad copies and develop images as per your campaign’s requirements. In addition, we also A/B split test advertisements to determine which ad drives the most results for your business goals. ",
              Image:IMAGES.servicePage.SAddEntity3,
            },
            {
            SubHeading:"Monitor and optimize your ads",
            Description:"In order to get things to work your way, we work on identifying low-performing areas of your ad campaigns. We keep track of the campaigns on the social media networks you choose.",
              Image:IMAGES.servicePage.SAddEntity4,
            },
            {
            SubHeading:"Communication and Reporting",
            Description:"We help you understand and analyze how your campaign and advertisements are performing across different social media platforms. Based on the analysis, we work to improve and deliver the requirements",
            Image:IMAGES.servicePage.SAddEntity5,
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
      <Breadcrumb
        Title="Social Advertising"
        Image={IMAGES.servicePage.ServicesSocialAadBanner}
     />
      <ServiceAbout
            Heading="Surpass your Competitors on the Market’s Graph with Unmatched Paid Social Media Advertising"
            Des1="The digital world is brimming with businesses, and in this competitive landscape, rising to prominence can only be done with strategic campaigning. New Vision Digital works to help an array of business niches to improve their conversion and retention rates with increased customer acquisition. We are undisputedly the leading provider of paid social media advertising in the USA." 
            Des2="At New Vision Digital, we know that your brand’s visibility is a top priority for you. Therefore, we help you leverage the power of advertising with unmatched social media advertising. Utilizing social media in an effective way will provide incredible opportunities for growth, foster leads, and transform your viewers into customers! So, if you have big goals for your company, NVD can help in harnessing the power of social media for your brand. With effective and engaging ads for Facebook, Instagram, LinkedIn, and other social media platforms, we can extract what you need – higher and faster ROI!" 
            Image={IMAGES.servicePage.SAddAbout}
        />
        <ServiceList
            Heading="High Yields, Low Cost"
            para="Here’s Why You Must Select Us as your Advertising Partner"
            Listing={Listing}
        />
        <ServiceEntities
            Heading="Our Suite of Social Media Advertising Services"
            para="There is a myriad of social media platforms available, but which one of them is right for you to display your social media ads? You cannot simply follow the trend and hop on a wagon of social media advertising because it may never deliver profitable results in favor of your business."
            para2="At New Vision Digital, we help you determine which social media platforms will suit your business needs. Have a look at the platforms we can help you with:"
            EntityData={serviceEntityData}
            Image={false}
        />
        <ServiceEntities
            Heading="More traffic, More Sales, And More Conversions"
            para="Here’s How We Help You Benefit from Social Media Advertising."
            EntityData={serviceTrafficData} 
        /> 
        <ReadyToGet
            Title="Ready to Take your brand to new Heights in the Digital Ecosystem?"
            Description="If yes, then what are you waiting for? Connect with our experts to get a free audit for your social media accounts and customized services for paid social media advertising in the USA."
            form={false}
         />
 </>
    );
}

