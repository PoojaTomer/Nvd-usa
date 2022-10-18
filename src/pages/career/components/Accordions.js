import React, { useEffect, useState } from 'react';
import ApplyForCareerButton from '../../../components/ApplyForCareerButton';


const SERVICE_NAME = {
    SOCIAL_MEDIA_EXECUTIVE: "Social Media Executive",
    PPC_EXECUTIVE: "PPC Executive",
    CONTENT_WRITER: "Content Writer",
    SOCIAL_MEDIA_MANAGER: "Social Media Manager",
    SEO_EXECUTIVE: "SEO Executive",
  };
  const SERVICE_DATA = {
    SOCIAL_MEDIA_EXECUTIVE: <ul>
    <li>Planning, creating and managing Social Media handles for the clients.</li>
    <li>Attending Client meetings to understand the clients requirements.</li>
    <li>Preparing Monthly Calendars.</li>
    <li>Conceptualizing and writing the content and copies.</li>
    <li>Briefing the designers for the graphics and ensuring that they are as per clients expectations.</li>
    <li>Planning and implementing Contests and other things except the regular posts for Social Media.</li>
    <li>Boosting Posts as per target audience.</li>
    <li>Building and Monitoring online reviews and reputation.</li>
    <li>Managing the Likes, shares, engagement and followers of the clients.</li>
    <li>Preparing & updating a Brand manuals of each client that has the dos and donts of the clients.</li>
    <li>Monitoring trends in social media tools, applications, channels, design and strategy.</li>
    <li>Compiling reports for management showing results.</li>
</ul>,
    PPC_EXECUTIVE:  <ul>
    <li>Plan, optimize, implement and manage paid campaigns for a variety of clients on Facebook, Instagram and Google.</li>
    <li>Ensure PPC campaigns are up and optimized according to brief and best practice guidelines.</li>
    <li>Develop near and long-time paid campaign strategies.</li>
    <li>Manage medium to large-sized PPC budgets.</li>
    <li>Work with the content team to ensure landing pages are effectively optimized for all PPC campaigns to ensure maximum ROI and conversion is possible.</li>
    <li>Perform keyword research and manage all bid management for your clients.</li>
    <li>Work with the PPC Manager to ensure all paid search activity falls in line with the larger search marketing and digital marketing strategy.</li>
    <li>Keep up to date with the latest industry trends.</li>
    <li>Analyze activity and performance of all paid campaigns and report findings back to the PPC Manager and subsequent clients.</li>
    <li>Help to define PPCs strategies for a host of clients.</li>
    </ul> ,
    CONTENT_WRITER:  <ul>
    <li>Responsible to take care of complete web content service which includes articles, blogs and product descriptions.</li>
    <li>Content development for brochures, posters, and marketing, meta descriptions, product branding.</li>
    <li>Should have diverse understanding of different niches with an appetite to adapt and learn.</li>
    <li>Obtain understanding of clients briefs and deliver upon it within promised deadline; Should be well versed with international content tones and grammar.</li>
    <li>Ensure work is delivered on time and is well executed.</li>
     </ul>,
    SOCIAL_MEDIA_MANAGER: <ul>
    <li>Planning, creating and managing Social Media handles for the clients.</li>
    <li>Attending Client meetings to understand the clients requirements.</li>
    <li>Preparing Communication Plan for the new clients with support of the team.</li>
    <li> Preparing Monthly Calendars.</li>
    <li>Conceptualizing and writing the content and copies.</li>
    <li>Briefing the designers for the graphics and ensuring that they are as per clients expectations.</li>
    <li>Planning and implementing Contests and other things except the regular posts for Social Media.</li>
    <li>Reviewing the final docket and getting it approved.</li>
    <li>Boosting Posts as per target audience.</li>
    <li>Building and Monitoring online reviews and reputation.</li>
    <li>Managing the Likes, shares, engagement and followers of the clients.</li>
    <li>Preparing & updating a Brand manuals of each client that has the dos and donts of the clients.</li>
    <li>Monitoring trends in social media tools, applications, channels, design and strategy.</li>
    <li>Compiling reports for management showing results.</li>
    <li>Team management and advance planning.</li>
    </ul>,
    SEO_EXECUTIVE: <ul>
    <li>Performing ongoing keyword research including discovery and expansion of keyword opportunities.</li>
    <li>Optimize website content, landing pages, and paid search copy to ensure high-quality scores and low bounces.</li>
    <li>Researching and implementing content recommendations for organic SEO success.</li>
    <li>Stay up to date with the latest Google algorithm changes as well as SEO and digital marketing trends and best practices.</li>
    <li>Monitor and evaluate search results and performance across major search channels to improve rankings and understand SEO strategy performance.</li>
    <li>Develop and implement link-building campaigns.</li>
    <li>Performing ongoing keyword discovery, expansion and optimization.</li>
    <li>Researching and implementing search engine optimization recommendations.</li>
    <li>Researching and analyzing competitor links and onsite strategies.</li>
    <li>Working with the development team to ensure SEO best practices are properly implemented on newly developed code.</li>
    <li>Recommending changes to website architecture, content, linking and other factors to improve SEO positions for target keywords.</li>
    </ul>,
  };
export default function Accordions(props) {
    const [currentState, setCurrentState] = useState(SERVICE_NAME.SOCIAL_MEDIA_EXECUTIVE);
    const [CategoryData, setCategoryData] = useState([]);
 
      useEffect(()=>{
        const CategData = [
            {
              Name: SERVICE_NAME.SOCIAL_MEDIA_EXECUTIVE,
              Data: SERVICE_DATA.SOCIAL_MEDIA_EXECUTIVE,
            },
            { 
            Name: SERVICE_NAME.PPC_EXECUTIVE,
            Data: SERVICE_DATA.PPC_EXECUTIVE,
        },
            { 
            Name: SERVICE_NAME.CONTENT_WRITER,
            Data:SERVICE_DATA.CONTENT_WRITER,
        },
            { 
            Name: SERVICE_NAME.SOCIAL_MEDIA_MANAGER,
            Data: SERVICE_DATA.SOCIAL_MEDIA_MANAGER,
         },
            { 
            Name: SERVICE_NAME.SEO_EXECUTIVE,
            Data: SERVICE_DATA.SEO_EXECUTIVE,
         },
          ];
            setCategoryData(CategData);
      },[])
    return (
        <>
        <section className="career-sec4">
        <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
            <h2>What are we <span className='highlight'>hiring</span> for?</h2>
            <h4>Join our mission</h4>
            <p>To provide industry-leading digital marketing services to clients while growing both personally and professionally.</p>
            <div className="accordion" id="faq">
            {CategoryData?.map((value,index) => {
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
                                <h4>Job Description</h4>
                                    {value.Data}
                            </div>
                            )}
                    </div>
                )
               
            })
            }
            </div>
            <center><ApplyForCareerButton Title="Apply Here" /></center>
        </div>
    </section>
    </>
    );
}
