import React from 'react'
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from '../../Utilities/ScrollService';
import Animations  from "../../Utilities/Animations"
import "./ContactMe.css";
const ContactMe = (props) => {

   let fadeInScreenHandler=(screen)=>{
    if(screen.fadeInScreen !== props.id) return ;
    Animations.animations.fadeInScreen(props.id)
   }
    const fadeInSubscribtion=ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  

  
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxUFpL1Hpi090rzgLbQii9GOtlZ2COMAB8XhX0bhVaR2_DSj6e901I0dVqKF5UjtTMz-A/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <div>
      <ScreenHeading title={"Contact Me"} subheading={"Let's Keep in touch"} />
      <div className='contact fade-in' id={props.id || ''}>
        <div className='container'>
            <div className='row'>
                <div className='contact-left'>
                    <h1 className='sub-title'>Contact Me</h1>
                    <p><i className="fa-solid fa-paper-plane"></i> bouslammouad1997@gmail.com</p>
                    <p><i className="fa-solid fa-square-phone"></i> 0658113359</p>
                  <div className='social-icons'>
                    <a href='web.whatsapp.com/0658113359'>
                        <i className='fa fa-brands fa-whatsapp'></i>
                    </a>
                    <a href='https://www.facebook.com/mohamedachraf.amin.5/'>
                       <i className="fa fa-brands fa-facebook"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/bousallam-mouad'>
                        <i className='fa fa-brands fa-linkedin'></i>
                    </a>
                    <a href='https://github.com/Mouad-MB10'>
                        <i className='fa fa-brands fa-github'></i>
                    </a>
     
                  </div>
                </div>
                <div className='contact-right'>
                    <form className="form" onSubmit={(e) => Submit(e)}>
                        <input type="text" name='Name' placeholder='Your Name' required/>
                        <input type="email" name='Email' placeholder='email@gmail.com' required/>
                        <textarea name='Message' rows="6" placeholder='Your Message'></textarea>
                        <input type='submit' name='submit' className='btn-more btn2' value="SEND MESSAGE"/>
                    </form>
                </div>
            </div>

        </div>
            <div className='copywrite'>
                <p>Mouad Bousallam  &copy;</p>
            </div>
      </div>
      
    </div>
  )
}

export default ContactMe
