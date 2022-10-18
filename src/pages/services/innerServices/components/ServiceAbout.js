import React from 'react';
import GetAQuoteButton from '../../../../components/GetAQuoteButton';

export default function ServiceAbout(props) {
    return (
        <>
    <section className="inner-service-sec2">
        <div className="overlay">
            <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2>{props.Heading?.replace(/(<([^>]+)>)/ig, '')}</h2>
                    </div>
                </div>
                <div className="row mt-5 align-items-center">
                <div className="col-md-6">
                        <img src={props.Image} className="img-fluid" alt="Service About" />
                    </div>
                    <div className="col-md-6">
                        {
                            props.secHeading ?
                            <h4>{props.secHeading}</h4>:null
                        }
                   
                       <p>{props.Des1}</p>
                       <p>{props.Des2}</p>
                       {props.Des3 ?  <p>{props.Des3}</p> :null}
                        <GetAQuoteButton Title="Get a Quote" />
                    </div>
                   
                </div>
                {
            props.subHeading ? <>
            <div className="row mt-4">
            <div className="col-md-12">
                <h2>{props.subHeading}</h2>
            </div>
        </div>
        <div className="row mt-5 align-items-center">
            {
                props.AboutSubContent.map((value,index)=>{
                    return(
                        <div className="col-md-4">
                        <h4 className="subheading">{value.Title}</h4>
                        <p>{value.Description}</p>
                        </div>
                    )
                })
            }
        </div>
            </>:null}
            </div>
        </div>
    </section>
    </>
    );
}
