import React, { Fragment } from 'react';

export default function GreenBgSec(props) {
    return (
        <section className="innerservice-sec4">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">{props.Heading}</h2>
                </div>
            </div>
            <div className="row mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear" >
                <div className="col-md-6">
                    {
                        props.Resions.map((value,index)=>{
                            return(
                                <Fragment key={index}>
                                    <h4 data-aos="zoom-in" data-aos-delay="800" data-aos-offset="0">{value.subTitle}</h4>
                                    <p data-aos="zoom-in" data-aos-delay="1000" data-aos-offset="0">{value.Des}</p>
                                </Fragment>
                            )
                        })
                    }
              
                  </div> 
                <div className="col-md-6">
                   <img src={props.Image} className="img-fluid" alt="Web Design" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" />
                </div>    
        </div>
        </div>
    </section>
    );
}
