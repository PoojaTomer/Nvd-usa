import React, { Fragment} from 'react';

export default function ServiceEntities(props) {
  
const  CheckIsEven =(number)=>{
    if(number% 2 === 0){
        return true;
    }
    return false;
}
 
 return (
        <section className="inner-service-sec4 bg-white">
        <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2>{props.Heading}</h2>
                    {props.para?  <p className="text-center">{props.para}</p>:null}
                    {props.para2?  <p className="text-center">{props.para2}</p>:null}
                </div>
            </div>
       {/* {
        props.EntityData ? <> */}

       {
        props.Image === false ?
        <>
          <div className="row mt-3 justify-content-center">
            {
                props.EntityData.map((value,index)=>{
                 console.log("total length=>",props.EntityData.length);
                    return(
                        <div class= {props.EntityData.length% 2 === 0? "col-md-6 d-flex" :"col-md-4 d-flex"}>
                        <div className="service-box active">
                            <h4>{value.SubHeading}</h4>
                          <p>{value.Description}</p>
                        </div>
                    </div>
                    )
                })
            }
           </div>
        </>:
        <>
        {
           props.EntityData.map((value,index)=>{
            if(CheckIsEven(index)){
                // for even
                return(
                    <Fragment key={index}>
                        <div className="right-content mt-5">
                        <div className="row align-items-center">
                         <div className="col-md-6 text-left">
                            <div className="image-box">
                            <img src={value.Image} className="img-fluid" alt="Set a Campaign" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="content">
                            <h4>{value.SubHeading}</h4>
                            <p>{value.Description}</p>
                            </div>
                            </div>
                         </div>
                         </div>
                    </Fragment>
                )
            }else{
                return(
                    <Fragment key={index}>
                        <div className="left-content mt-5">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                            <div className="content">
                            <h4>{value.SubHeading}</h4>
                            <p>{value.Description}</p>
                            </div>
                            </div>
                            <div className="col-md-6 text-left">
                            <div className="image-box">
                            <img src={value.Image} className="img-fluid" alt="Set a Campaign" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </Fragment>
                )
            }
           })
            }
            </>
       }
{/*        
       </>
       } */}
      </div>
    </section>
    );
}

