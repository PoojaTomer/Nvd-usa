import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import ServiceList from './components/ServiceList';

const Listing = <ul>
<li>Set up the right social media platforms for your brand that will fuel its growth</li>
<li>Crisp, unique and value-first content- that guarantees the success of your campaign.</li>
<li>We don’t post just for the sake of posting. With our creative posts, we’ll make sure you reach new audiences and boost your leads</li>
<li>Zeroing to your target market that actually turns into customers.</li>
<li>Growing engagement on social media channels by focussing on key performance indicators such as likes, comments and actual sales.</li>
<li>Influencer marketing that worth your time and penny.</li>
</ul>

export default function SocialMediaMarketing(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Set a Campaign:",
          Image:IMAGES.servicePage.SmmEntity1,
          Description:"Get a clear picture of your target market and how your content will draw them to your website through our extensive keyword research and engagement campaigns. Our marketing genies will assist in setting realistic goals and tailor a strategy that fits your purpose.",
          Event:true,
      },
      {
          SubHeading:"Production of Content:",
          Image:IMAGES.servicePage.SmmEntity2,
          Description:"Are you bored of reading the same content across distinct websites? Don’t worry! We don’t bite. We create scroll-stopping content that edges out the competition. Get customised content that conveys your message and targets the customer market.",
          Event:false,
      },
      {
          SubHeading:"Deliver dramatic results:",
          Image:IMAGES.servicePage.SmmEntity3,
          Description:"Make the best use of our marketing skills by fusing the right content for your social media channels with our organic approach and get ROI-driven results.",
          Event:true,
      },
      {
          SubHeading:"Understand what works best for you",
          Image:IMAGES.servicePage.SmmEntity4,
          Description:"A social media campaign without analysis of data and strategy refinement is like tea without sugar. We’ll analyse and refine our strategies as and when required.",
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
      <Breadcrumb Title="Social Media Marketing" Image={IMAGES.servicePage.servicesBanner} />
      <ServiceAbout
       Heading="Think, Explore, And Meet Your Brand’s Digital Life With New Vision Digital"
       Des1="In today’s world, every second person is glued to the screens of their desktops and smartphones almost every day, looking for stuff online. In the midst of this digitalisation, social media has paved its way to becoming the biggest gateway for expanding business by promoting services. Yet, a lot of businesses find it challenging to keep up with these rapidly changing trends. So if these apps stress you out as well, worry not! At New Vision Digital, once we make commitments, we ensure fulfiling all our promises to the clients. Our team will give you the relief you deserve from the stress of managing your social media accounts." 
       Des2="New Vision Digital offers competitive services to assist brands in driving ROI from social media.. Get your brand the votes of confidence from social media networks such as Facebook, Instagram, and Linkedin with our organic approach. Connect with us to get started today." 
       Image={IMAGES.servicePage.SmmAbout}
       />
       <ServiceList
        Heading="Discover All the Social Media Noise With Our Marketing"
        Listing={Listing}
         />
      <ServiceEntities Heading="Organise, Optimise, And Analyse We’ll Do it All For you!" EntityData={serviceEntityData}  />
      <ReadyToGet Title="Experience the Magic of Marketing and Understand the Science of Growth in Sales with our Marketing Services" Description="Connect with our experts to get a quote for your business today." />
 </>
    );
}