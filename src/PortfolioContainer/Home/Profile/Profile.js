import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../Utilities/ScrollService';
import './Profile.css';
const Profile = () => {
  return (
    <div className='profile-container'>
          <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
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
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'm <span className='highlighted-text'>Mouad Bousallam</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                   <span className='primary-text'>
                    {" "}
                    <h1>
                        {" "}
                    <Typical
                     loop={Infinity}
                    wrapper='p'
                     steps={
                        [
                            "Enthusiastic Dev 🖤",
                            1000,
                            "Software Dev 💻",
                            1000,
                            "Full Stack Developer 🧑🏻‍💻",
                            1000,
                            "Cross Platform Dev 🌐",
                            1000,
                            "Php Laravel Dev 😎",
                            1000,
                            "MERN Stack Dev 😎",
                            1000, 
                        ]
                     }
                    />
                    </h1>
                    <span className='profile-role-tagline'>
                        I can  build  software for businesses and individuals. Let me help you succeed. Contact me now
                    </span>
                   </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                        {" "}
                        Hire Me {" "}

                    </button>
                    <a href='MOUADBOUSALLAMCV.pdf' download='Mouad Bousallam.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
                <div className='profile-picture'>
                    <div className='profile-background-picture'>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Profile
