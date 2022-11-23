import React, { Fragment} from 'react';

export default function ServiceEntities(props) {
  
const  CheckIsEven =(number)=>{
    if(number% 2 === 0){
        return true;
    }
    return false;
}
 
 return (
      <>
      {
        props.Image === false ?
        <section className="inner-service-sec4 bg-grey">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">{props.Heading}</h2>
                    {props.para?  <p className="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">{props.para}</p>:null}
                    {props.para2?  <p className="text-center" data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">{props.para2}</p>:null}
                </div>
            </div>
          <div className="row mt-3 justify-content-center">
            {
                props.EntityData.map((value,index)=>{
                 console.log("total length=>",props.EntityData.length);
                    return(
                        <div class= {props.EntityData.length% 2 === 0? "col-md-6 d-flex" :"col-md-4 d-flex"}>
                        <div className="service-box active">
                            <h4 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">{value.SubHeading}</h4>
                          <p data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">{value.Description}</p>
                        </div>
                    </div>
                    )
                })
            }
           </div>
        </div>
        </section>:
       
        <section className="inner-service-sec4 bg-white">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">{props.Heading}</h2>
                    {props.para?  <p className="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">{props.para}</p>:null}
                    {props.para2?  <p className="text-center" data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">{props.para2}</p>:null}
                </div>
            </div>
        {
           props.EntityData.map((value,index)=>{
            if(CheckIsEven(index)){
                // for even
                return(
                    <Fragment key={index}>
                        <div className="right-content mt-5" data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="linear">
                        <div className="row align-items-center">
                         <div className="col-md-6 text-left">
                            <div className="image-box">
                            <img src={value.Image} className="img-fluid" alt="Set a Campaign" data-aos="zoom-in" data-aos-duration="1000"  data-aos-easing="linear" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="content">
                            <h4 data-aos="fade-up" data-aos-delay="400" data-aos-offset="0">{value.SubHeading}</h4>
                            <p data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">{value.Description}</p>
                            </div>
                            </div>
                         </div>
                         </div>
                    </Fragment>
                )
            }else{
                return(
                    <Fragment key={index}>
                        <div className="left-content mt-5" data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="linear">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                            <div className="content">
                            <h4 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">{value.SubHeading}</h4>
                            <p data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">{value.Description}</p>
                            </div>
                            </div>
                            <div className="col-md-6 text-left">
                            <div className="image-box">
                            <img src={value.Image} className="img-fluid" alt="Set a Campaign" data-aos="zoom-in" data-aos-duration="1000"  data-aos-easing="linear" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </Fragment>
                )
            }
           })
            }
           </div>
           </section>
       }
</>
    );
}

