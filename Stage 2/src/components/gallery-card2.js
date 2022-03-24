import React from 'react'

import PropTypes from 'prop-types'

import styles from './gallery-card2.module.css'

const GalleryCard2 = (props) => {
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

GalleryCard2.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://www.outboundengine.com/wp-content/uploads/american-banking-buy-210617.jpg',
  text: 'Lorem ipsum dolor sit amet',
  heading: 'Project Title',
}

GalleryCard2.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default GalleryCard2
