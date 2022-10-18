import React,{useState, useEffect, Fragment } from 'react';
import { IMAGES } from '../../../constants/Image-Constant';


export default function Tab(props) {
    const [currentState, setCurrentState] = useState("Office Function");
    const [galleryImage, setGalleryImage] = useState([]); 
    const [offlineData, setOfflineData] = useState([]);
    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    
      useEffect(()=>{
        const CategData = [
            {
              Name: "Office Function",
              Data: IMAGES.careerPage.OfficeFuncation,
            },
            { 
            Name: "Activity",
            Data: IMAGES.careerPage.ActivityPic,
        },
            { 
            Name: "Office Trip",
            Data: IMAGES.careerPage.AdventurePic,
        },
            { 
            Name: "Outing",
            Data: IMAGES.careerPage.OutingPic,
         },
            { 
            Name: "Celebrations",
            Data: IMAGES.careerPage.CelebrationsPic,
         },
          ];
          setOfflineData(CategData);
           //show next image in lightbox
   
      },[])
      const showImage = (gallery) => {
        setImageToShow(gallery);
        setLightBoxDisplay(true);
      };
    
      //hide lightbox
      const hideLightBox = () => {
        setLightBoxDisplay(false);
      };
      useEffect(() => {
        const imagearray = [];
        for (let i = 0; i < offlineData.length; i++) {
            const vdata = offlineData[i].Data;
        if (vdata) {
          for (let i = 0; i < vdata.length; i++) {
            imagearray.push(vdata[i]);
          }
        }
        console.log(JSON.stringify(offlineData.Data));
    }
    setGalleryImage(imagearray);
    }, [offlineData.Data]);
      const showNext = (e) =>  {
        e.stopPropagation();
        let currentIndex = galleryImage.indexOf(imageToShow);
        if (currentIndex >= galleryImage.length - 1) {
          setLightBoxDisplay(false);
        } else {
          let nextImage = galleryImage[currentIndex + 1];
          setImageToShow(nextImage);
        }
      };
    
      //show previous image in lightbox
  
      const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = galleryImage.indexOf(imageToShow);
        if (currentIndex <= 0) {
          setLightBoxDisplay(false);
        } else {
          let nextImage = galleryImage[currentIndex - 1];
          setImageToShow(nextImage);
        }
      };
    return (
      <>
        <section className="career-sec5 hidden-xs">
        <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
            <div className="col-md-10 offset-md-1">
            <div className="cen-h">
                <h2>Offline fun that <span className='text-orange'>Keeps us</span> going!</h2>
            </div>
            <p className="text-center mb-4">Client calls, team huddles, deadlines, creative thinking, and coming up with new ideas can be exhausting. Occasionally, to keep us all sane, we like to step out to happy hours, elope someplace beautiful, or plan some fun activity in-house.</p>
        </div>
            <div className="card">
                <div className="card-header">
                  <ul className="nav nav-tabs nav-tabs-neutral justify-content-center" role="tablist" data-background-color="orange">
                  {offlineData?.map((value,nameindex) => {
                    return(
                        <Fragment key={nameindex}>
                    <li className="nav-item">
                      <a className={currentState === value.Name ? "nav-link active" : "nav-link "} onClick={() => setCurrentState(value.Name)}>{value.Name}</a>
                    </li>
                        </Fragment>
                    )
                    })}
                  </ul>
                </div>
                <div className="card-body">
                  {/* <!-- Tab panes --> */}
                  <div className="tab-content">
                    {offlineData.map((value,index) => { 
                      
                        return(
                            <>
                            {currentState === value.Name && (
                            <div key={index} className={currentState === value.Name ? "tab-pane active" :"tab-pane"} id="OfficeFunction" role="tabpanel">
                        <ul>
                          {value.Data.length > 0 ? (
                            <>
                            {
                           value.Data.map((gallery,gind)=>{
                            return(
                                
                                <li key={gind}>
                                <img src={gallery} className="img-fluid" alt="gallery" onClick={() => showImage(gallery)} /></li>
                            )}
                            )}
                        </>
                          ):null
                          }
                        </ul>
                    </div>
                        )  
                    }
                </>
                    )}
                        
                        )}
                          {
        lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={(showPrev)}>⭠</button>
          <img id="lightbox-img" src={imageToShow} alt="popup image" />
          <button onClick={showNext}>⭢</button>
        </div>
       : ""
      }
                  </div>

                </div>
              </div>
           </div>
    </section>
      <section className="career-sec4 hidden-md">
      <div className="container">
      <div className="col-md-10 offset-md-1">
            <div className="cen-h">
                <h2>Offline fun that <span className='text-orange'>Keeps us</span> going!</h2>
            </div>
            <p className="text-center mb-4">Client calls, team huddles, deadlines, creative thinking, and coming up with new ideas can be exhausting. Occasionally, to keep us all sane, we like to step out to happy hours, elope someplace beautiful, or plan some fun activity in-house.</p>
        </div>
          <div className="accordion" id="faq">
              {offlineData?.map((value,index) => {
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
                                <ul>
                          {value.Data.length > 0 ? (
                            <>
                            {
                           value.Data.map((gallery,gind)=>{
                            return(
                                
                                <li key={gind}>
                                <img src={gallery} className="img-fluid" alt="gallery" onClick={() => showImage(gallery)} /></li>
                            )}
                            )}
                        </>
                          ):null
                          }
                        </ul>
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
