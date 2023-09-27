import React from 'react'
import './home.css'
import { Banner } from './Banner'
import { Slide } from './Slide.js'

export const Maincomponent = () => {
  return (
    <div className='home_section'>
        <div className='banner_part'>
            <Banner />
        </div>

        <div className='slide_part'>
            <div className='left_slide'>
                <Slide title="Deal of the Day"/>
            </div>

            <div className='right_slide'>
                <h4>Festive Launches</h4>
                <img src="" alt />
                <a href='#'>See More</a>
            </div>
        </div>

        <Slide title="Today's Deals"/>
        <div className='center_img'>
            <img src='' alt='' />
        </div>
        <Slide title="Best Seller"/>
        <Slide title="Upto 80% Off"/>
    </div>
  )
}
