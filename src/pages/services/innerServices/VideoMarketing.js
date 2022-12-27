import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import ServiceList from './components/ServiceList';
import { IMAGES } from '../../../constants/Image-Constant';
import WebsiteProcess from './components/WebsiteProcess';

const Listing = <ul>
<li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">A more flexible, streamlined procedure for producing videos </li>
<li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">Professionals & experts video creators are at your fingertips</li>
<li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Optimized creativity to increase conversions <br /><br /></li>
<li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Quick and frequent video refresh</li>
<li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">Possibilities for ongoing A/B testing </li>

</ul>
const Process =[
    {
        subTitle:"What Sets Video Marketing Apart From Conventional Marketing?",
        Des:"ThThe term traditional marketing most frequently refers to actual, non-digital marketing strategies used by businesses to promote their namesake and products. Frequently, these are billboards, print materials, or trade exhibits. Video advertising, animated videos, and other online-based videos are common examples of video marketing, which uses video as the primary medium of marketing communication."},
    {
        subTitle:"What Advantages Come With Using a Video Marketing Company?",
        Des:"A video marketing agency in the USA that specializes in video marketing has the knowledge, resources, and tools required to produce high-quality video content. Internal production of professional videos longer than a few moments or with intricate animations or effects can be a resource- and pricing. A video marketing company in the USA can take care of all of this and more, ensuring that your videos are more visually appealing than those of your rivals, more aligned with a planned video marketing strategy, and optimized for a variety of distribution and publication options.",
    },
    {
        subTitle:"Is video marketing effective?",
        Des:"Video is a very powerful form of material for marketing, and social media's emergence has contributed to its popularity. "},
    {
        subTitle:"What Characterizes a Successful Marketing Video?",
        Des:"The goal of making a successful marketing video is to entertain your audience. While numerous variables can affect your video's objective, its engagement is of utmost importance.Although the most crucial component of a good marketing video is its content, having a video that is also technically flawless will distinguish your company. No matter how long your video is, a compelling introduction is crucial. Additionally, we advise having clear editing and high-quality audio.",
    },
]
export default function VideoMarketing(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Videos Optimization",
          Description:"Our professionals optimize the video we create based on your specifications by employing keyword-rich titles, descriptions, tags, and custom audio features. Optimized, feature-rich videos make it easier for viewers to find you.",
          Image:IMAGES.servicePage.VideoEntity1,
      },
      {
          SubHeading:"Channel Creation",
          Description:"We develop a dedicated channel for you on each social media platform where you can upload or live stream your videos in order to give your brand video a means to convey information about its services. It will make it easier for your audience to learn more about your services on your channel.",
          Image:IMAGES.servicePage.VideoEntity2,
      },
      {
          SubHeading:"Finalizing & Organizing Videos",
          Description:"After channel creation and optimization, the final stage is to begin arranging your company's films across all social media platforms, with a focus on YouTube and Metacafe. We can send information about your brand or company's services to your target audience and enhance your business values by coordinating it across various social media platforms.",
          Image:IMAGES.servicePage.VideoEntity3,
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
            <Breadcrumb Title="Video Marketing" Image={IMAGES.servicePage.VideoBanner} />
            <ServiceAbout  
            Heading="Video Marketing Services: Making A Difference In Our Clients' Businesses" 
            Des1="The importance of video in today's business world is clearer than ever. A growing number of businesses now understand the power of audio-visual material and consider the best approaches to maximizing its use. Consolidating an upward trend is now required, not an option."
            Des2="Your customers will appreciate your wise decision if you decide to include video in your marketing strategy. For all kinds of video marketing initiatives, including social media videos, website videos, and video advertising, New Vision Digital has a history of producing interesting videos. If you want your videos to be powerful and hold the attention of your viewers, we are the best video marketing services in the USA for you." 
            Image={IMAGES.servicePage.VideoAbout}/>
            <ServiceList 
            Heading="Why Choose Us For Video Marketing Services?" 
            Listing={Listing}
            />
            <section className="how-we-do">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">Video Marketing Services: New Vision Digital Approach For Online Commercials </h2>
                </div>
            </div>
            <div className="row mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                <div className="col-md-6">
                <ul>
                    <li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Video editing</li>
                    <li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">Video production</li>
                    <li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Editing Company/brand presentation videos</li>
                    <li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Editing materials for Social Media</li>
                    <li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">Adding motion graphics & subtitles</li>
                    <li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Editing materials for online courses</li>
                    <li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Video editing for podcasts</li>
                    <li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">Vlogs and other online video series</li>
                </ul>
              
                  </div> 
                <div className="col-md-6">
                   <img src={IMAGES.servicePage.VideoMarketServices} className="img-fluid" alt="Web Design" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" />
                </div>    
        </div>
        </div>
    </section>
              <ServiceEntities Heading="Our Video Marketing Procedure" para="Look at our promotional marketing process; by examining it, you will be better able to grasp our strategies" EntityData={serviceEntityData} />
             
              <WebsiteProcess
                Heading="General FAQ"
                Process={Process}
                Para={false}
          />
            <ReadyToGet Title="Get a free Analysis" Description="Give us the privilege of extending our expertise for your business’ online presence. Connect with us." />
        </>
    );
}

