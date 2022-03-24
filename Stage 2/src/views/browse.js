import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import GalleryCard3 from '../components/gallery-card3'
import GalleryCard2 from '../components/gallery-card2'
import projectStyles from '../style.module.css'
import styles from './browse.module.css'

const Browse = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Browse - realEstateApp</title>
        <meta property="og:title" content="Browse - realEstateApp" />
      </Helmet>
      <div
        className={` ${styles['Navbar']} ${projectStyles['navbar-container']} `}
      >
        <div
          className={` ${styles['max-width']} ${projectStyles['max-width']} `}
        >
          <Link to="/">
            <div className={styles['Logo']}>
              <img
                alt="image"
                src="/playground_assets/25-255811_house-key-png-contemporary-png-a-full-and-200w.png"
                className={styles['image']}
              />
              <span className={projectStyles['brand-Name']}>
                <span className={styles['text01']}>First</span>
                <span className={styles['text02']}>-</span>
                <span className={styles['text03']}>Homes</span>
              </span>
            </div>
          </Link>
          <div className={styles['Links']}>
            <Link
              to="/how-it-works"
              className={` ${styles['Text04']} ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['navbar-Link']} `}
            >
              How it works
            </Link>
            <Link
              to="/buy"
              className={` ${styles['navlink01']} ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['navbar-Link']} `}
            >
              Buy
            </Link>
            <Link
              to="/sell"
              className={` ${styles['navlink02']} ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['navbar-Link']} `}
            >
              Sell
            </Link>
          </div>
          <div
            className={` ${styles['Menu']} ${projectStyles['navbar-burger-menu']} `}
          >
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <header data-role="Header" className={styles['Header']}>
        <div className={styles['container1']}>
          <div className={styles['Nav']}>
            <input
              type="text"
              placeholder="Search for any area or listing"
              className={` ${styles['textinput']} ${projectStyles['input']} `}
            />
          </div>
        </div>
        <button className={` ${styles['button']} ${projectStyles['button']} `}>
          GO
        </button>
        <div className={styles['BtnGroup']}>
          <button
            className={` ${styles['button1']} ${projectStyles['button']} `}
          >
            Filters
          </button>
          <button
            className={` ${styles['button2']} ${projectStyles['button']} `}
          >
            Sort
          </button>
        </div>
      </header>
      <div className={styles['Container2']}>
        <span className={styles['Text05']}>15,743 Results</span>
      </div>
      <div className={styles['Gallery']}>
        <Link to="/listing-page">
          <GalleryCard3 className={styles['component']}></GalleryCard3>
        </Link>
        <Link to="/listing-page">
          <GalleryCard2
            heading="Address"
            image_src="https://www.kelownahomes.ca/r/1.1.2//uploads/featured/1829917543.jpg"
            className={styles['component1']}
          ></GalleryCard2>
        </Link>
        <Link to="/listing-page">
          <GalleryCard2
            heading="Address"
            image_src="https://s.realtyninja.com/static/images/listings/med/4933_l9bff2f41_1920x1080-virtual-tour-55832-photo-15124147388962.jpg"
            className={styles['component2']}
          ></GalleryCard2>
        </Link>
        <Link to="/listing-page">
          <GalleryCard2
            heading="Address"
            image_src="https://www.zoocasa.com/blog/wp-content/uploads/2021/10/c537983c-00a5-48cd-bbba-57953ca66562-750x562.jpg"
            className={styles['component3']}
          ></GalleryCard2>
        </Link>
        <Link to="/listing-page">
          <GalleryCard2
            heading="Address"
            image_src="https://remax-static.imgix.net/web/homepage/04_PriceReductions.jpg?ixlib=js-3.4.0&amp;auto=format%2Ccompress&amp;width=542&amp;height=339&amp;s=5d752646cfd6b21fd82b514330311b15"
            className={styles['component4']}
          ></GalleryCard2>
        </Link>
        <Link to="/listing-page">
          <GalleryCard2
            heading="Address"
            image_src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1194i215%2Fjyd3a8w12kxvmay88j86bydp22i215&amp;option=N&amp;h=472&amp;permitphotoenlargement=false"
            className={styles['component5']}
          ></GalleryCard2>
        </Link>
        <Link to="/listing-page">
          <GalleryCard2
            heading="Address"
            image_src="https://www.bwalk.com/media/22328/5004-hs004_photoshopped.jpg"
            className={styles['component6']}
          ></GalleryCard2>
        </Link>
        <Link to="/listing-page">
          <GalleryCard2
            heading="Address"
            image_src="https://photos.zolo.ca/10-woodelm-drive-st-catharines-X4454380-1.jpg?2019-05-28+04%3A30%3A29"
            className={styles['component7']}
          ></GalleryCard2>
        </Link>
        <Link to="/listing-page">
          <GalleryCard2
            heading="Address"
            image_src="https://photos.zolo.ca/63-slalom-gate-road-collingwood-40229034-1-p480.jpg?2022-03-23+12%3A54%3A07"
            className={styles['component8']}
          ></GalleryCard2>
        </Link>
      </div>
      <footer className={styles['Footer']}>
        <div className={styles['container3']}>
          <div className={styles['Logo1']}>
            <img
              alt="image"
              src="/playground_assets/25-255811_house-key-png-contemporary-png-a-full-and-200w.png"
              className={styles['image1']}
            />
            <span className={projectStyles['brand-Name']}>
              <span className={styles['text07']}>First</span>
              <span className={styles['text08']}>-</span>
              <span className={styles['text09']}>Homes</span>
            </span>
          </div>
          <div className={styles['LinksContainer']}>
            <div className={styles['Container4']}>
              <div className={styles['ProductContainer']}>
                <span className={styles['text10']}>Service</span>
                <Link to="/buy" className={styles['navlink12']}>
                  Buy
                </Link>
                <Link to="/sell" className={styles['navlink13']}>
                  <span>Sell</span>
                </Link>
              </div>
              <div className={styles['CompanyContainer']}>
                <span className={styles['text12']}>Company</span>
                <span className={styles['text13']}>About</span>
                <span className={styles['text14']}>Careers</span>
                <span className={styles['text15']}>Contact</span>
              </div>
            </div>
            <div className={styles['container5']}>
              <div className={styles['Contact']}>
                <span className={styles['text16']}>Contact Us</span>
                <a
                  href="mailto:info@firsthomes.com?subject="
                  className={styles['link']}
                >
                  info@FirstHomes.com
                </a>
                <a href="tel:1234567899" className={styles['link1']}>
                  +123 (4567) 890
                </a>
              </div>
              <div className={styles['Socials']}>
                <span className={styles['text17']}>Follow Us</span>
                <div className={styles['IconGroup']}>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles['link2']}
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className={styles['icon2']}
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles['link3']}
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className={styles['icon4']}
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles['link4']}
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className={styles['icon6']}
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['Separator']}></div>
        <span className={styles['text18']}>
          <span>
            © 2021 FirstHomes, All Rights Reserved.CREATED BY N. MISRA, H.
            IBRAHIM
          </span>
          <span className={styles['text20']}></span>
          <span></span>
        </span>
      </footer>
    </div>
  )
}

export default Browse
