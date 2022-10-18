import React from 'react';

export default function ServiceList(props) {
    return (
        <section className={props.ImgList === true ? "innerservice-sec3":"inner-service-sec3"}>
        <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2>{props.Heading}</h2>
                </div>
            </div>
            
            {
                props.Image ?
                <div className="row mt-5 align-items-center">
            <div className="col-md-6">
                <img src={props.Image} className="img-fluid" alt="Nail that first" /> 
            </div>
            <div className="col-md-6">
            {props.Listing}
            </div>
           </div>:
           <div className="row mt-5 align-items-center">
                <div className="col-md-12">
                   {props.Listing}
                </div>
                
            </div>
            }
        </div>
    </section>
    );
}
