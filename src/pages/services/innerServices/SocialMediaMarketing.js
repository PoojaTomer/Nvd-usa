import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import GreenBgSec from './components/GreenBgSec';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import ServiceList from './components/ServiceList';
import WebsiteProcess from './components/WebsiteProcess';

const Listing = <ul>
<li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Set up the right social media platforms for your brand that will fuel its growth.</li>
<li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">Crisp, unique and value-first content- that guarantees the success of your campaign.</li>
<li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">We don’t post just for the sake of posting. With our creative posts, we’ll make sure you reach new audiences and boost your leads.</li>
<li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Zeroing into your target market that actually turns into customers.</li>
<li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">Growing engagement on social media channels by focusing on key performance indicators such as likes, comments and actual sales.</li>
<li data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">Influencer marketing that is worth your time and penny.
</li>
</ul>;
const Process=[
    {
      subTitle:"Which platforms should I use?",
      Des:"It’s a cinch to get caught in the hype of a new social media platform. However, every platform you choose will require immense time, energy, and budget to meet your goals. Start with one or two platforms that make the most sense and capitalize on them by making high-quality posts."},
      {
    subTitle:"How to make more people follow my brand on social media platforms?",
      Des:"When your brand’s social media accounts are managed properly, you will witness growth through targeted ads, carefully crafted copies, platform-specific practices and more. At New Vision Digital, we believe in driving quality traffic and followers for your brand. Your followers should be your targeted audience and just any breathing humans. Thereby, we propose a campaign backed with professional strategies that work and help you increase followers naturally.",
      },
      {
        subTitle:"Why should I go for social media marketing for my business?",
      Des:"Social media serves as a great way to increase brand awareness and helps build a community of prospective customers. It can be a major driver for revenue growth and makes your audience feel like a part of your brand. Another reason to invest in social media marketing is audience targeting, Display advertising and promoted posts can help you launch a new or retargeting brand awareness campaign.",
      },
]
export default function SocialMediaMarketing(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Set a Campaign:",
          Image:IMAGES.servicePage.SmmEntity1,
          Description:"Get a clear picture of your target market and how your content will draw them to your website through our extensive keyword research and engagement campaigns. Our marketing genies will assist in setting realistic goals and tailoring a strategy that fits your purpose.",
      },
      {
          SubHeading:"Production of Content:",
          Image:IMAGES.servicePage.SmmEntity2,
          Description:"Are you bored of reading the same content across distinct websites? Don’t worry! We don’t bite. We create scroll-stopping content that edges out the competition. Get customized content that conveys your message and targets the customer market.",
      },
      {
          SubHeading:"Deliver dramatic results:",
          Image:IMAGES.servicePage.SmmEntity3,
          Description:"Make the best use of our marketing skills by fusing the right content for your social media channels with our organic approach and get ROI-driven results.",
      },
      {
          SubHeading:"Understand what works best for you:",
          Image:IMAGES.servicePage.SmmEntity4,
          Description:"A social media campaign without analysis of data and strategy refinement is like tea without sugar. We’ll analyze and refine our strategies as and when required to drive the required results.",
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
       Heading="Shake hands with your Brand’s New Digital Life With New Vision Digital"
       Des1="In today’s world, every second person is glued to the screens of their desktops and smartphones almost every day, looking for stuff online. In the midst of this digitalization, social media has paved its way to becoming the biggest gateway for expanding business by promoting services. Yet, a lot of businesses find it challenging to keep up with these rapidly changing trends. So if these apps stress you out as well, worry not! At New Vision Digital, once we make commitments, we ensure fulfilling all our promises to the clients. Our team will give you the relief you deserve from the stress of managing your social media accounts." 
       Des2="New Vision Digital offers competitive services to assist brands in driving ROI from social media. Get your brand the votes of confidence from social media networks such as Facebook, Instagram, and Linkedin with our organic approach. Connect with us to get started today." 
       Image={IMAGES.servicePage.SmmAbout}
       />
       <ServiceList
        Heading="Discover the Social Media Noise With Our Social Media Marketing"
        Listing={Listing}
         />
          <section className="innerservice-sec4">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">Our Suite of <span className='text-orange'>Social Media Marketing</span> Services </h2>
                </div>
            </div>
            <div className="row mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                <div className="col-md-6">
                <ul>
                    <li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Platform-specific Social media management</li>
                    <li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">Social media content strategy</li>
                    <li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Profile creation</li>
                    <li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">Branding</li>
                    <li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">Content Management</li>
                    <li data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">Building online community</li>
                    <li data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">Social Media organic marketing</li>
                    <li data-aos="fade-up" data-aos-delay="800" data-aos-offset="0">Suggesting niche-specific influencers</li>
                    <li data-aos="fade-up" data-aos-delay="900" data-aos-offset="0">Social Media Advertising</li>
                </ul>
              
                  </div> 
                <div className="col-md-6">
                   <img src={IMAGES.servicePage.SmmServices} className="img-fluid" alt="Web Design" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" />
                </div>    
        </div>
        </div>
    </section>
      <ServiceEntities Heading="Organize, Optimize, and Analyze" EntityData={serviceEntityData} para="Here’s How the Team Brings a successful campaign to the table"   />
    
        <WebsiteProcess
         Heading="Become the Mover and Shaker of the Social Media Ecosystem With Powerful Marketing"
         para="Connect with our experts to get a free website audit for your business today."
         Process={Process}
          />
      <ReadyToGet Title="Experience the Magic of Marketing and Understand the Science of Growth in Sales with our Marketing Services" Description="Connect with our experts to get a quote for your business today." />
 </>
    );
}