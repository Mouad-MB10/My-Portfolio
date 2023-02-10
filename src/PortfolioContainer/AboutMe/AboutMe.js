import React,{useEffect} from 'react';
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from '../../Utilities/ScrollService';
import Animations  from "../../Utilities/Animations"
import "./AboutMe.css";
export default function AboutMe(props)  {
     let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const SCREEN_CONSTANTS={
        description:"Full Stack developer with a knack of building applications with utmost effeciency. Strong professional, I'm Mouad Bousallam From morocco. and currently a junior pursuing my studies",
        heighlights:{
            bullets:[
                "Full Stack developement",
                "React Js",
                "php Laravel",
                "Building Rest Api",
                "Managing Database"
            ],
            heading:"Here are a few Highlights:"
        }
    }
    const renderHighlights=()=>{
        return(
            SCREEN_CONSTANTS.heighlights.bullets.map((value,i)=>(
                <div className='highlight' key={i}>
                  <div className='highlight-blob'></div>
                  <span>{value}</span>
                </div>
            ))
        )
    }
  return (
<div className="about-me-container screen-container fade-in"  id={props.id || ""}>
       <div className='about-me-parent'>
         <ScreenHeading title={'About Me'} subheading={'Why choose me ?'} />
         <div className='about-me-card'>
            <div className='about-me-profile'></div>
            <div className='about-me-details'>
                <span className='about-me-description'>
                    {SCREEN_CONSTANTS.description}
                </span>
                <div className='about-me-heighlights'>
                    <div className='heighlight-heading'>
                        {SCREEN_CONSTANTS.heighlights.heading}
                    </div>
                    {renderHighlights()}
                </div>
                <div className='about-me-options'>
                    <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                        {" "}
                        Hire Me {" "}

                    </button>
                    <a href='MouadBousallamCv.pdf' download='Mouad Bousallam.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
         </div>
       </div>
    </div>
  )
}


