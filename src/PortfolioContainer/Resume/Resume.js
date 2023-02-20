import React,{useState} from 'react'
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from '../../Utilities/ScrollService';
import Animations  from "../../Utilities/Animations"
import "./Resume.css"
export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
     let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
   
  };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },

    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript" },
    { skill: "React JS" },
    { skill: "PHP"},
    
  
    { skill: "SQL"},
    { skill: "Java" },
    { skill: "Laravel" },
    { skill: "HTML"},
      { skill: "CSS" },
    { skill: "Wordpress"},
  ];


  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Legal, Economic and Social Sciences, Morocco"}
        subHeading={
          "Bachelor degree in computer science methods applied to business management"
        }
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"ISTA NTIC RABAT, Morocco"}
        subHeading={"diploma Technician specialized in multimedia development"}
        fromDate={"2016"}
        toDate={"2018"}
      />

      <ResumeHeading
        heading={"High School "}
        subHeading={"Abi Bakr Razi"}
        fromDate={"2014"}
        toDate={"2015"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"wadjinny - Fachkrafte"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2022-02"}
          toDate={"2022-06"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            -Developed a web App for  carpooling
          </span>
        </div>
        <ResumeHeading
          heading={"Freelancer"}
          subHeading={"BACK END DEVELOPER "}
          fromDate={"2021-03"}
          toDate={"2021-06"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            -Developed a web App for   Inventory  Systeme
          </span>
          <br />
          <ResumeHeading
            heading={"Emotrad"}
            subHeading={"BACK END DEVELOPER"}
            fromDate={"2019-01"}
            toDate={"2019-03"}
          />

          <span className="resume-description-text">
            -Developed a web App for  Billing Management 
          </span>
          <br />
        </div>
      </div>
    </div>,
  
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>

        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="interest">
      <ResumeHeading
        heading="Reading"
        description="Apart from being a code writer, i enjoy reading. as it is a form of entertainement, i also feel it's the best for improving cencentration abilities."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Sport"
        description="I like to challenge my self a lot while I do some sport"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px )" },
    };

    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullet = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops ,, no internet"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    /*hna howa 3iwad resumeDetails li west map dayr hadi resumeDetail o 7ta li mn wra map*/
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetails) => resumeDetails)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullet()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
