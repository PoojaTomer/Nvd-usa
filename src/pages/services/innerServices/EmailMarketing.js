import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import ServiceList from './components/ServiceList';

const Listing =  <ul className="one-list">
<li>Create beautiful Templates that make your email readers go aww</li>
<li>A/B Testing that assists you to increase your ROI</li>
<li>Send time Optimisation to boost your click and open rates</li>
<li>Advance reporting that helps you know the growth in your business</li>
<li>Add unlimited contacts through our effective tools and services</li>
</ul>
const ListImg = IMAGES.servicePage.EmListImg
export default function EmailMarketing(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);
    const [notVisible, setNotVisible] = useState(false);

    useEffect(()=>{
      const EntityData = [
          {
          SubHeading:"Define the Goal",
          Description:"The first step of email marketing is deciding the goal you wish to achieve through our campaigns and services for your business/brand.",
      },
      {
          SubHeading:"A/B Testing as per Requirements",
          Description:"After our creative experts create the campaign as per the list and subscribe, we enable our clients to do a test drive.",
      },
      {
          SubHeading:"Send the mail",
          Description:"After testing with a demo mail, the final message is sent on the contact list, as provided by you.",
      },
      {
          SubHeading:"Measurement of Results",
          Description:"We have a team of seasoned experts who use an automated system to analyse all the results after the tasks are done.",
      },
      {
        SubHeading:"Preparation of Report",
        Description:"After the results are measured, a report of responses, unresponsive and unsubscribed emails is prepared for your review.",
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
      <Breadcrumb Title="Email Marketing" Image={IMAGES.servicePage.servicesBanner} />
      <ServiceAbout
       Heading="Boost your Email Open Rates with Innovative and Integrative Email Marketing Campaigns"
       Des1="Email is one of the best ways of communication in social and professional lives. Combined with a well-articulated Call-To-Action, a strategically crafted email can do wonders for your business." 
       Des2="At New Vision Digital, we aim to make every possible step to assist you in generating more leads and boosting your email open rates. Connect with our experts to increase brand awareness, generate revenues and improve client relationships through our email marketing services." 
       Image={IMAGES.servicePage.EmAbout}
       />
       <ServiceList
        Heading="Nail that first impression With Innovative and Effective Emailers"
        Listing={Listing}
        Image={ListImg}
         />
      <ServiceEntities Heading="Process We Follow to Execute your Email Marketing Campaign" EntityData={serviceEntityData} Image={false}  />
      <ReadyToGet Title="Choose Smart. Choose New Vision Digital" Description="Connect with our experts to get a personalised email marketing campaign for your business today." form={notVisible} />
 </>
    );
}
