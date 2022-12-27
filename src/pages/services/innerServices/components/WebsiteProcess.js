import React, { Fragment } from 'react';

export default function WebsiteProcess(props) {
    return (
        <section className="inner-service-sec4">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">{props.Heading}</h2>
                    {props.para?  <p className="text-center">{props.para}</p>:null}
                </div>
            </div>
            {props.SubTitle? <h3 className="mb-0" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear">{props.SubTitle}</h3>:""}
            {props.Para == false ? "":<h3 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear">Frequently Asked Questions about <span className='highlight'>Social Media Marketing</span></h3>}
            
            <div className="row mt-3">
               
                {
                    props.Process.map((value,index)=>{
                        return(
                            <Fragment key={index}>
                                <div className="col-md-6 d-flex" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                                    <div className='service-box'>
                                    <h4 data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">{value.subTitle}</h4>
                                    <p data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">{value.Des}</p>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>
    </section>
    );
}
