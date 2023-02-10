import React from "react";
import Animations from "../../Utilities/Animations";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";


import "./Project.css";


export default function Project(props) {

    
    const ImageWork1="image1.jpeg";
    const ImageWork2="image2.jpeg";
    const ImageWork3="image3.jpeg";
    
   return (
    <div>
      <ScreenHeading title={"Projects"} subheading={"The Projects That I realised"} />
      <section className='project-container' id={props.id || ''}>
      

          <div className='work'>
            <img src={require (`../../assets/projects/${ImageWork1}`)} />
            <div className='layer'>
                <h3>Web App </h3>
                <p>Web App of Billing Managment
                </p>
                <a href='https://gestiondufacturation.000webhostapp.com/views/dashboard/index.php'>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
          </div>
          <div className='work'>
            <img src={require (`../../assets/projects/${ImageWork2}`)} />
            <div className='layer'>
                <h3>Web App </h3>
                <p>Web App of Inventory Systeme </p>
                <a href='https://inventory-sm.000webhostapp.com/'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className='work'>
            <img src={require (`../../assets/projects/${ImageWork3}`)} />
            <div className='layer'>
                <h3>Web App </h3>
                <p>Web App of Library Managment</p>
                <a href='https://library-managment.000webhostapp.com/index.php'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          

        
          
        
      </section>

      <div className='footer'>
        <img src={require ('../../assets/Home/shape-bg.png')}/>
      </div>
      <a href='#' className='btn-more' style={{textDecoration:"none"}}>See More</a>
    </div>
   )
}