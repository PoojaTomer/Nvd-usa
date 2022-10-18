import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';
import AboutGallery from './Components/AboutGallery';
import ExploreNvd from './Components/ExploreNvd';
import MeetLeaders from './Components/MeetLeaders';

export default function About(props) {
    return (
        <>
          <Helmet>
                <title>{props.title}</title>
                <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
                <meta name="keyword" content="Nvd usa" />
            </Helmet>
         <Breadcrumb Title="About Us" Image={IMAGES.aboutPage.AboutBanner} /> 
         <AboutGallery />
         <ExploreNvd/>
         <MeetLeaders />
        </>
    );
}
