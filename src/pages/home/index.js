import React from 'react';
import {useRef} from 'react';
import { Helmet } from 'react-helmet';
import OurLocations from '../../components/OurLocations';
import ReadyToGet from '../../components/ReadyToGet';
import Banner from './components/Banner';
import CaseStudy from './components/CaseStudy';
import ClientsTrust from './components/ClientsTrust';
import GetWorld from './components/GetWorld';
import OurOffbeatMarketing from './components/OurOffbeatMarketing';
import Services from './components/Services';
import SucessStories from './components/SucessStories';
import WitnessTheGrowth from './components/WitnessTheGrowth';



export default function Homepage(props) {
    const ref = useRef(null);
    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <>
        <Helmet>
            <title>{props.title}</title>
                <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
                <meta name="keyword" content="Nvd usa" />
            </Helmet>
           <Banner handleClick={handleClick}/>
            <OurOffbeatMarketing />
           <SucessStories />
           <GetWorld />
        
           <Services />
           <ReadyToGet form={false} Title="Advertise! Attract! Acquire! Encore!" Description="Connect with us to get a free proposal by our experts today" />
           <CaseStudy />
           <WitnessTheGrowth/>
           <ClientsTrust />
           <ReadyToGet Title="Ready to Get Started? Are You Ready?" Description="Digital Marketing is a powerful tool for growing your company. To speak with one of our seasoned digital strategies, please get in touch with us. With our help, Your marketing will be more effective. We promise a new marketing strategy that will outperform your peresent marketing plan." />
           <OurLocations />
        </>
    );
}
