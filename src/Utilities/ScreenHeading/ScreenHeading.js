import React from 'react'
import "./ScreenHeading.css"
const ScreenHeading = (props) => {
  return (
    <div className='heading-container'>
      <div className='screen-heading'>
        <span>{props.title}</span>
        {
            (props.subheading) ?(
                <div className='screen-sub-heading'>
                   <span>{props.subheading}</span>
                </div>
            ):(<div></div>)
        }
      </div>
      <div className='heading-seperator'>
          <div className='seperator-line'></div>
             <div className='seperator-blob'>
                  <div></div>
             </div>
      </div>
    </div>
  )
}

export default ScreenHeading
