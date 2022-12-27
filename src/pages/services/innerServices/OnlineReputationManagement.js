import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../../components/Breadcrumb';
import ReadyToGet from '../../../components/ReadyToGet';
import { IMAGES } from '../../../constants/Image-Constant';
import ServiceAbout from './components/ServiceAbout';
import ServiceEntities from './components/ServiceEntities';
import ServiceList from './components/ServiceList';
import WebsiteProcess from './components/WebsiteProcess';

const Listing = <ul>
<li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Thorough brand analysis to discover the online gaps and fix the brand positioning.</li>
<li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">A comprehensive plan based on already-existing web resources to improve brand awareness.</li>
<li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">For better branding, our professionals mix the best ideas for producing good content.</li>
<li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">To boost your brand's visibility we write positive reviews about your company online.</li>
<li data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">We monitor your brand's references on the web and social media continually and provide timely warnings.</li>
<li data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">We give extensive report metrics to monitor the campaign's success and verify the services delivered.</li>
</ul>
const Process=[
  {
    subTitle:"Do online reputation management services work?",
    Des:"Expert brand reputation management services are more similar to damage control. They analyze client sentiments around your businesses using digital marketing techniques. It is the expert's responsibility to remedy the negative by posting uplifting materials and reviews. Services for reputation repair are useful for all types of businesses as well as for individuals."},
    {
  subTitle:"How can I monitor my reputation online?",
    Des:"Social media management assistance for online reviews is typically included in services for managing an individual's online reputation. You might contact the best ORM company in the USA for analytical assistance to control your reputation—additionally, their tools for evaluating your online reputation rate your productivity. Your search engine ranking also demonstrates your brand's reputation. It validates what your clients believe.",
    },
    {
  subTitle:"How much does reputation management cost?",
    Des:"The cost of managing your online reputation varies significantly from business to business and is based on the services you choose. From the service providers, you may pick a reputation management package. They often come in monthly, six-month, and annual packages. In general, the cost will vary depending on the result you want from the reputation repair.",
    },
]
export default function OnlineReputationManagement(props) {
    const [serviceEntityData, setServiceEntityData] = useState([]);
    const [notVisible, setNotVisible] = useState(false);

    useEffect(()=>{
      const EntityData = [
          {
          Image:IMAGES.servicePage.OrmEntity,
          Description: <ul>
          <li>Analyzing</li>
          <li>Channel Identification</li>
          <li>Strategy Building</li>
          <li>Implementation</li>
          <li>Monitoring & Evaluation</li>
        </ul>
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
      <Breadcrumb Title="Online Reputation Management" Image={IMAGES.servicePage.OrmBanner} />
      <ServiceAbout
       Heading="Reputation is built over time,
       but maybe destroyed in an instant!"
       Des1="Has your online brand reputation taken a hit? Are you traumatized by its consequences? Here’s your chance to redeem your brand reputation. To avoid your online reputation from being damaged, you must work with an ORM company that specializes in removing unfavorable search results about you or your business." 
       Des2="New Vision Digital holds a decade of experience in helping brands redeem their lost reputation with the best ORM services in the USA." 
       Image={IMAGES.servicePage.OrmAbout}
       />
       <ServiceList
        Heading="Realize the Power of Positive Image with New Vision Digital"
        Listing={Listing}
         />
         <section className="inner-service-sec4 bg-grey">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">Curb your audience's problems before they Escalate</h2>
                </div>
            </div>
            <h3>Remove Negative</h3>
          <div className="row justify-content-center">
           
            <div className="col-md-6">
            <div className="service-box active">
                <h4 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Comment/Link/Content</h4>
                <p data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Even if you have a stellar reputation, bad publicity may quickly tarnish it. To remove unfavorable or defamatory comments or links from Google search results, we have a strategy in place. Personal Reputation</p>
            </div>
            </div>
            <div className="col-md-6">
            <div className="service-box active">
                <h4 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Management</h4>
                <p data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">A single "Tweet" or comment on social media can open the book of judgment for you. To protect your reputation and revive it, being the best online reputation management in the USA we have personal reputation management in place.</p>
            </div>
            </div>
            </div>
            <h3>Corporate Reputation</h3>
            <div className="row justify-content-center">
            <div className="col-md-12">
            <div className="service-box active">
                <h4 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Management</h4>
                <p data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Google My Business and Yelp are two of the most popular review sites used by customers. Positive responses are something we strive to achieve. We lay our expertise in turning an unfavorable review into a good one.</p>
            </div>
            </div>
            </div>
            <h3>Directory Listings</h3>
            <div className="row justify-content-center">
            <div className="col-md-12">
            <div className="service-box active">
                <h4 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">Management</h4>
                <p data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">Whatever is mentioned about your firm, its employees, or the brand as a whole is subject to our scrutiny. Whether it was a press release or an online forum remark that was critical of your company, we work together to devise a strategy.</p>
            </div>
            </div>
           </div>
        </div>
        </section>
      <ServiceEntities Heading="Our Online Reputation Management (ORM) Strategy" EntityData={serviceEntityData}  />
      <WebsiteProcess
         Heading="General FAQ"
         Process={Process}
         Para={false}
          />
      <ReadyToGet Title="Get Your FREE ORM Proposal Now!" Description="Schedule an ORM audit with one of our digital marketing professionals right now! Do You Need Reputation Management? Get in Touch Arrowblack" form={notVisible} />
 </>
    );
}
