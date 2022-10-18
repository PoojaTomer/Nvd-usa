import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import ServiceList from './components/ServiceList';

const Listing = <ul>
<li>Remove Negative Comment/Link/Content</li>
<li>Personal Reputation Management</li>
<li>Corporate Reputation Management</li>
<li>Review Website Monitoring</li>
<li>Directory Listings Monitoring</li>
<li>Social Media Monitoring</li>
</ul>

export default function OnlineReputationManagement(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);
    const [notVisible, setNotVisible] = useState(false);

    useEffect(()=>{
      const EntityData = [
          {
          Image:IMAGES.servicePage.OrmEntity1,
          Description: <ul>
          <li>Thorough brand analysis to discover the online gaps and fix the brand positioning.</li>
          <li>A comprehensive plan based on already-existing web resources to improve brand awareness.</li>
          <li>For better branding, our professionals mix the best ideas for producing good content.</li>
          <li>To boost your brand's visibility we write positive reviews about your company online.</li>
          <li>We monitor your brand's references on the web and social media continually and provide timely warnings.</li>
          <li>We give extensive report metrics to monitor the campaign's success and verify the services delivered.</li>
        </ul>,
          Event:true,
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
      <Breadcrumb Title="Online Reputation Management" Image={IMAGES.servicePage.servicesBanner} />
      <ServiceAbout
       Heading="Reputation is built over time, but maybe destroyed in an instant!"
       Des1="Has your online brand reputation taken a hit? Are you traumatized by its consequences? Here’s your chance to redeem your brand reputation. To avoid your online reputation from being damaged, you must work with an ORM company that specialises in removing unfavourable search results about you or your business." 
       Des2="New Vision Digital holds a decade of experience in helping brands redeem their lost reputation." 
       Image={IMAGES.servicePage.OrmAbout}
       />
       <ServiceList
        Heading="Curb your audience's problems before they Escalate"
        Listing={Listing}
         />
      <ServiceEntities Heading="Realize the Power of Positive Image with New Vision Digital" EntityData={serviceEntityData}  />
      <ReadyToGet Title="End-To-End Online Reputation Management Services" Description="Schedule an ORM audit with one of our digital marketing professionals right now! Do You Need Reputation Management? Get in Touch Arrowblack" form={notVisible} />
 </>
    );
}
