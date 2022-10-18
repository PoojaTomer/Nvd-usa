import React, { Fragment } from 'react';

export default function GreenBgSec(props) {
    return (
        <section className="innerservice-sec4">
        <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2>{props.Heading}</h2>
                </div>
            </div>
            <div className="row mt-3 ">
                <div className="col-md-6">
                    {
                        props.Resions.map((value,index)=>{
                            return(
                                <Fragment key={index}>
                                    <h4>{value.subTitle}</h4>
                                    <p>{value.Des}</p>
                                </Fragment>
                            )
                        })
                    }
              
                  </div> 
                <div className="col-md-6">
                   <img src={props.Image} className="img-fluid" alt="Web Design" />
                </div>    
        </div>
        </div>
    </section>
    );
}
