import React from 'react'

import PropTypes from 'prop-types'

import styles from './testimonial-card1.module.css'

const TestimonialCard1 = (props) => {
  return (
    <header
      className={` ${styles['TestimonialCard']} ${
        styles[props.rootClassName]
      } `}
    >
      <div className={styles['Testimonial']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
        <span className={styles['text']}>{props.text}</span>
        <span className={styles['text1']}>{props.text1}</span>
      </div>
    </header>
  )
}

TestimonialCard1.defaultProps = {
  text: 'Head Agent',
  text1: 'John Doe',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&ixlib=rb-1.2.1&h=1200',
  image_alt: 'profile',
}

TestimonialCard1.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default TestimonialCard1
