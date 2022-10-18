import React, { Fragment } from 'react';

export default function WebsiteProcess(props) {
    return (
        <section className="inner-service-sec4">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2>{props.Heading}</h2>
                    {props.para?  <p className="text-center">{props.para}</p>:null}
                </div>
            </div>
            <div className="row mt-3">
                {
                    props.Process.map((value,index)=>{
                        return(
                            <Fragment key={index}>
                                <div className="col-md-6">
                                    <h4>{value.subTitle}</h4>
                                    <p>{value.Des}</p>
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
