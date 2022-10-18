import React from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../../components/Breadcrumb';
import { IMAGES } from '../../constants/Image-Constant';
import CaseStudy from './components/CaseStudy';
import GiantMigration from './components/GiantMigration';
import ReadyToGet from '../../components/ReadyToGet';

export default function Portfolio(props) {
    return (
        <>
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content="Find end-to-end digital marketing strategy for our clients to drive better sales. Connect with the best digital marketing company in Dubai. Enquire Now!" />
            <meta name="keyword" content="Nvd usa" />
        </Helmet>
        <Breadcrumb Title="Portfolio" Image={IMAGES.portfolioPage.PortfolioBanner} /> 
        <CaseStudy />
        <GiantMigration />
        <ReadyToGet Title="Experience the Magic of Marketing and Understand the Science of Growth in Sales with our Marketing Services" Description="Connect with our experts to get a quote for your business today." />
        </>
    );
}
