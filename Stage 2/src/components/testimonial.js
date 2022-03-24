import React from 'react'

import TestimonialCard1 from './testimonial-card1'
import styles from './testimonial.module.css'

const Testimonial = (props) => {
  return (
    <div className={styles['Testimonial']}>
      <h1 className={styles['text']}>
        <span>Meet Our Agents</span>
      </h1>
      <div className={styles['container']}>
        <TestimonialCard1
          text="Agent"
          rootClassName="rootClassName"
        ></TestimonialCard1>
        <TestimonialCard1
          text="Agent"
          text1="Mike Oxelong"
          image_src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
          rootClassName="rootClassName1"
        ></TestimonialCard1>
        <TestimonialCard1
          text="Agent"
          text1="Sally Doverman"
          image_src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&amp;w=1000&amp;q=80"
          rootClassName="rootClassName2"
        ></TestimonialCard1>
      </div>
      <div className={styles['container1']}>
        <TestimonialCard1
          text="Agent"
          text1="Michael Brownly"
          image_src="https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80"
          rootClassName="rootClassName3"
        ></TestimonialCard1>
        <TestimonialCard1
          text="Agent"
          text1="Alexander Dagreat"
          image_src="https://www.face.eu/wp-content/uploads/2018/09/Torbjorn-Larsson.jpg"
          rootClassName="rootClassName4"
        ></TestimonialCard1>
        <TestimonialCard1
          text="Agent"
          text1="Dan Smith"
          image_src="https://www.faceapp.com/static/img/content/compare/old-example-before@3x.jpg"
          rootClassName="rootClassName5"
        ></TestimonialCard1>
      </div>
    </div>
  )
}

export default Testimonial
