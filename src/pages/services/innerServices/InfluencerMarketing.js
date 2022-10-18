import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import ServiceList from './components/ServiceList';

const Listing = <ul>
<li>Get maximum reach on your social media handles by collaborating with niche-specific influencers</li>
<li>Reach new audiences for your brand by leveraging the influencers’ social media followings through unique and creative content</li>
<li>Boost your brand’s image and value across diverse channels through exemplary influencer marketing strategies</li>
<li>Obtain customer and influencer insights through campaign reports for enhancing your products and services.</li>
<li>Unlock and engage your audience with unique marketing campaigns</li>
</ul>

export default function InfluencerMarketing(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);
    const [notVisible, setNotVisible] = useState(false);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Influencer Relationship Management",
          Image:IMAGES.servicePage.ImEntity1,
          Description:"Over the past few years, our team of experts have managed to form relationships with numerous influencers across diverse niches. We’ll assist you to manage your relations with content creators that have an established presence on social media platforms such as Instagram, Snapchat, Youtube and Twitter.",
       
      },
      {
          SubHeading:"Creative Strategies",
          Image:IMAGES.servicePage.ImEntity2,
          Description:"Our team is filled with creative minds that make sure to influence the mind of your audience, draw them towards your brand, make them act, and leave a lasting impression.",
         
      },
      {
          SubHeading:"Content Strategizing & Creation for Social Media",
          Image:IMAGES.servicePage.ImEntity3,
          Description:"We’ll strategise and create unique and eye-catching content that aligns with your campaign’s structure, content and requirements.",
         
      },
      {
          SubHeading:"Coverage of Influencer’s Events",
          Image:IMAGES.servicePage.ImEntity4,
          Description:"Our team will put extended efforts to create brand awareness and exposure through connecting you with the influencers that fit your goal and business.",
          
      },
      {
        SubHeading:"Select Influencers from Our Analytics",
        Image:IMAGES.servicePage.ImEntity5,
        Description:"Select the ideal influencers from our analytics that fit your campaign. We’ll analyse and identify the right influencers as per your niche and present the analytics for your perusal.",
       
    },
    {
        SubHeading:"Content Distribution",
        Image:IMAGES.servicePage.ImEntity6,
        Description:"We’ll use the biggest networks in your industry to distribute your influencer content and reach out to millions of people.",
       
    },
    {
        SubHeading:"Accurate Reporting",
        Image:IMAGES.servicePage.ImEntity7,
        Description:"Our team is equipped to deliver accurate and customised reports of metrics that suit your brand’s goals. Moreover, we’ll also provide consumer and influencer insights that can help you improve your product or services.",
      
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
      <Breadcrumb Title="Influencer Marketing" Image={IMAGES.servicePage.servicesBanner} />
      <ServiceAbout
       Heading="Take your Influencer Marketing up a Notch With New Vision Digital"
       Des1="The last couple of years saw a dramatic change in the social media industry- particularly in the relationship between businesses and influencers. What’s more - as an increasing number of businesses are focussing on creating long term collaborations with influencers that can provide them with straightforward Returns On Investment." 
       Des2="To help you connect and work with influencers, we at New Vision Digital offer phenomenal influencer marketing services. We’ll fuel the most effective marketing campaign that will pace the growth of your business and drive more revenue." 
       Image={IMAGES.servicePage.ImAbout}
       />
       <ServiceList
        Heading="Customer Attention, Engagement and Growth All at One Place"
        Listing={Listing}
         />
      <ServiceEntities Heading="From Managing your Relationships with Influencers to Delivering a Report Here’s How We Do It" EntityData={serviceEntityData}  />
      <ReadyToGet Title="Trust, Connect, Grow your Brand with Us" Description="Reach out to our experts to help your brand scale heights today." form={notVisible} />
 </>
    );
}
