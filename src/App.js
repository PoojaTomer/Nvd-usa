import React, {lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/preloader';
import Header from './components/Header';
import Footer from './components/Footer';
// import Homepage from './pages/home';
 const Homepage = lazy(() => import("./pages/home"));
 const About = lazy(() => import("./pages/about"));
 const Contact = lazy(() => import("./pages/contact"));
 const Services = lazy(() => import("./pages/services"));
 const Portfolio = lazy(() => import("./pages/portfolio"));
 const Career = lazy(() => import("./pages/career"));
 const Internship = lazy(() => import("./pages/internship"));
 const GiantMigration = lazy(() => import("./pages/giantMigration"));
 const SEO = lazy(() => import("./pages/services/innerServices/SEO"));
 const SocialMediaMarketing = lazy(() => import("./pages/services/innerServices/SocialMediaMarketing"));
 const InfluencerMarketing = lazy(() => import("./pages/services/innerServices/InfluencerMarketing"));
 const OnlineReputationManagement = lazy(() => import("./pages/services/innerServices/OnlineReputationManagement"));
 const EcommerceMarketplaceManagement = lazy(() => import("./pages/services/innerServices/EcommerceMarketplaceManagement"));
 const EmailMarketing = lazy(() => import("./pages/services/innerServices/EmailMarketing"));
 const WordpressDevelopment = lazy(() => import("./pages/services/innerServices/WordpressDevelopment"));
 const MagentoDevelopment = lazy(() => import("./pages/services/innerServices/MagentoDevelopment"));
 const ShopifyDevelopment = lazy(() => import("./pages/services/innerServices/ShopifyDevelopment"));
 const MobileAppsDevelopment = lazy(() => import("./pages/services/innerServices/MobileAppsDevelopment"));
 const PayPerClick = lazy(() => import("./pages/services/innerServices/PayPerClick"));
 const PhpDevelopment = lazy(() => import("./pages/services/innerServices/PhpDevelopment"));
 const WebsiteDesign = lazy(() => import("./pages/services/innerServices/WebsiteDesign"));
 const SocialAdvertising = lazy(() => import("./pages/services/innerServices/SocialAdvertising"));
 
 const ThankYou = lazy(() => import("./pages/ThankYou"));
 const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  //   useEffect(() => {
  //   document.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });
  // }, []);
  return (
   <BrowserRouter basename="/">
    <Suspense fallback={Preloader()}>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Homepage  title="Home page" />} />
      <Route path="/about" element={<About  title="about page" />} />
      <Route path="/contact" element={<Contact  title="contact page" />} />
      <Route path="/services" element={<Services  title="services page" />} />
      <Route path="/search-engine-optimization" element={<SEO  title="Seo services page" />} />
      <Route path="/social-media-marketing" element={<SocialMediaMarketing  title="Social Media Market services page" />} />
      <Route path="/influencer-marketing" element={<InfluencerMarketing  title="Influencer Marketing services page" />} />
      <Route path="/online-reputation-management" element={<OnlineReputationManagement  title="Online Reputation Management services page" />} />
      <Route path="/email-marketing" element={<EmailMarketing  title="Email Marketing services page" />} />
      <Route path="/ecommerce-marketplace-management" element={<EcommerceMarketplaceManagement  title="Ecommerce Marketplace Management services page" />} />
      <Route path="/wordpress-development" element={<WordpressDevelopment  title="Wordpress Development services page" />} />
      <Route path="/magento-development" element={<MagentoDevelopment  title="Magento Development services page" />} />
      <Route path="/shopify-development" element={<ShopifyDevelopment  title="Shopify Development services page" />} />
      <Route path="/php-development" element={<PhpDevelopment  title="Php Development services page" />} />
      <Route path="/mobile-apps-development" element={<MobileAppsDevelopment  title="Mobile Apps Development services page" />} />
      <Route path="/social-advertising" element={<SocialAdvertising  title="Social Advertising services page" />} />
      <Route path="/pay-per-click" element={<PayPerClick  title="Pay Per Click services page" />} />
      <Route path="/website-design" element={<WebsiteDesign  title="Website Design services page" />} />
      <Route path="/portfolio" element={<Portfolio  title="portfolio page" />} />
      <Route path="/career" element={<Career  title="career page" />} />
      <Route path="/internship" element={<Internship  title="internship page" />} />
      <Route path="/giant-migration" element={<GiantMigration  title="Giant Migration page" />} />
      <Route path="/thank-you" element={<ThankYou title="Thank You page"/>} />
      <Route path="*" element={<NotFound title="no record found"/>} />
    </Routes>
    <Footer/>
    </Suspense>
   </BrowserRouter>
  );
}

export default App;
