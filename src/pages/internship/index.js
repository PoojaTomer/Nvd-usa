import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';
import Opening from './components/Opening';
import ComeJoinUs from './components/ComeJoinUs';

export default function Internship(props) {
    return (
        <>
          <Helmet>
      <title>{props.title}</title>
            <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
            <meta name="keyword" content="Nvd usa" />
      </Helmet>
      <Breadcrumb Title="Internship Opportunities" Image={IMAGES.intershipPage.IntershipBanner} />
      <Opening />
      <ComeJoinUs />
        </>
  );
}