import React from 'react'

import PropTypes from 'prop-types'

import styles from './gallery-card3.module.css'

const GalleryCard3 = (props) => {
  return (
    <div className={styles['GalleryCard']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <h2 className={styles['text']}>{props.heading}</h2>
      <span className={styles['text1']}>{props.text}</span>
    </div>
  )
}

GalleryCard3.defaultProps = {
  heading: 'Address',
  image_src:
    'https://www.outboundengine.com/wp-content/uploads/american-banking-buy-210617.jpg',
  image_alt: 'image',
  text: 'Lorem ipsum dolor sit amet',
}

GalleryCard3.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
}

export default GalleryCard3
