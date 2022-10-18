import React, { useEffect, useState } from 'react';

export default function WhatDidWeDo(props) {
const [currentState, setCurrentState] = useState("SEO");
const [servicesData, setServicesData] = useState([]);

useEffect(()=>{
const TabData = [
    {
    Name:"SEO",
    Title:"Search Engine Optimization",
    Description:"Good SEO strategy is the foundation to any website. We had a challenge of building authority as it was a comparatively newer website in an already edgy market. It was critical that we focus on quantity rather than quantity and that is why we have been able to drive significant organic traffic to the website. With regular monitoring and continuous SEO activities, we were able to bring the website in top 10 results on Google.",
},
{
    Name:"Website",
    Title:"Website Design and Development",
    Description:"A website should be the exact reflection of what the business is all about and Giant Migration needed a well-structured and comprehensive website which showcased what it stands for. NVD took the initiative of a thorough analysis of the potential UX, the target audience, enquiry types and created an incredibly smooth, well-navigating, and responsive website.",
},
{
    Name:"Social Media",
    Title:"Social Media",
    Description:"The world is on social media and we harnessed the power of social media platforms to increase brand awareness and boost audience engagement. Firstly, we had to establish a credible image on social media platforms to prove the legitimacy of the company. Our social media geeks worked on innovating creative content and engaging posts and simultaneously, worked on improving brand-customer engagement. Right from keeping the customer informed to keeping them engaged, we covered everything.",
},
{
    Name:"Paid Ads",
    Title:"Paid Ads",
    Description:"As for paid ads, we structured their campaigns to showcase their extensive range of visa and immigration services they assist in. With Google Ads Competitor analysis, we analysed their existing competition. In addition to that, landing page analysis was done and recommendations were led as per the requirement. All of this cumulatively expanded the client base, increased monthly client flow, significant increase in monthly leads and overall business expansion.",
},
{
    Name:"Branding",
    Title:"Branding",
    Description:"It is important to maintain the personality of a brand on all platforms by keeping everything in sync. Right from combining the appropriate fonts and colours to implementing the signature design all along, we kept a thorough check on the brand identity.",
},
];
setServicesData(TabData);
    },[])

    return (
        <>
        <section className="giantmigration-sec5 hidden-xs" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
        <div className="container">
            <div className="cen-h">
                <h2> What did <span className='text-orange'>we do?</span> </h2>
            </div>
            <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist" data-background-color="orange">
                    {
                        servicesData.map((value,index)=>{
                            return(
                                <li className="nav-item" key={index}>
                                <a href="javascript:void();" class={currentState === value.Name ? "nav-link active" :"nav-link"} onClick={()=>setCurrentState(value.Name)}>{value.Name}</a>
                              </li>
                            )
                        })
                    }
                  </ul>
                </div>
                 <div className="card-body">
                  <div className="tab-content">
                    {
                        servicesData.map((value,subind)=>{
                            return(
                                <>
                                {currentState === value.Name && (
                                <div class={currentState === value.Name ? "tab-pane active" : "tab-pane"}>
                                <h4>{value.Title}</h4>
                              <p>{value.Description}</p>
                            </div>
                                )
                                }
                                </>
                            )
                        })
                    }
                  </div>
                </div>
            </div>
         </div>
    </section>
    <section className="career-sec4 hidden-md">
        <div className="container">
            <div className="accordion" id="faq">
                {servicesData?.map((value,index) => {
                    return(
                        <div className="card" key={index}>
                            <div className="card-header" id="faqhead1">
                                <a className="btn btn-header-link" onClick={() => setCurrentState(value.Name)}>{value.Name}
                                <div className="accordion-icon">
                                {currentState === value.Name ? "-" : "+"}
                            </div>
                                </a>
                            </div>
                            {currentState === value.Name && (
                                <div className="card-body">
                                <h4>{value.Title}</h4>
                                <p>{value.Description}</p>
                                </div>
                                )}
                        </div>
                    )
                })
                }
            </div>
        </div>
    </section>
</>
    );
}
