import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>realEstateApp</title>
        <meta property="og:title" content="realEstateApp" />
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
              className={` ${styles['navlink1']} ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['navbar-Link']} `}
            >
              Buy
            </Link>
            <Link
              to="/sell"
              className={` ${styles['navlink2']} ${projectStyles['navbar-Link']} ${projectStyles['button-secondary']} ${projectStyles['button']} `}
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
      <div
        className={` ${styles['Intro']} ${projectStyles['hero-container']} ${projectStyles['section-container']} `}
      >
        <img
          alt="image"
          src="/playground_assets/house-1836070__480-1500w.webp"
          className={styles['hero-image']}
        />
        <div
          className={` ${styles['max-width1']} ${projectStyles['max-width']} `}
        >
          <div className={styles['Content']}>
            <div className={styles['container1']}>
              <span
                className={` ${styles['text05']} ${projectStyles['before-Heading']} `}
              >
                Home buying/selling made simple
              </span>
              <h1 className={styles['text06']}>
                <span className={styles['text07']}>
                  First-Homes is the leading buy/sell platform for houses
                </span>
              </h1>
              <span className={styles['text08']}>
                Simplicity is what we thrive for here at First-Homes and that is
                what you get. With FirstHomes, you will be able to buy or sell
                your property easily with zero hassle.
              </span>
              <div className={styles['container2']}>
                <Link
                  to="/buy"
                  className={` ${styles['navlink3']} ${projectStyles['button']} ${projectStyles['button-transparent']} `}
                >
                  Buy
                </Link>
                <Link
                  to="/sell"
                  className={` ${styles['navlink4']} ${projectStyles['button']} ${projectStyles['button-transparent']} `}
                >
                  Sell
                </Link>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/house-1836070__480-1500w.webp"
              className={styles['hero-image1']}
            />
          </div>
        </div>
      </div>
      <div
        className={` ${styles['Section-2']} ${projectStyles['hero-container']} ${projectStyles['section-container']} `}
      >
        <img
          alt="image"
          src="/playground_assets/embracing_couple_at_a_house.jpg-1500w.webp"
          className={styles['hero-image2']}
        />
        <div
          className={` ${styles['max-width2']} ${projectStyles['max-width']} `}
        >
          <div className={styles['Content1']}>
            <div className={styles['Content2']}>
              <h1 className={styles['text09']}>
                <span className={styles['text10']}>Selling</span>
                <span className={styles['text11']}>
                  {' '}
                  a home has never been this
                </span>
                <span className={styles['text12']}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text13']}>easy</span>
              </h1>
              <span className={styles['text14']}>
                Simply create an account, verify your property details and be on
                your way to selling your home and making your dreams come true
              </span>
              <div className={styles['container3']}>
                <Link
                  to="/sell"
                  className={` ${styles['navlink5']} ${projectStyles['button']} ${projectStyles['button-transparent']} `}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/embracing_couple_at_a_house.jpg-1500w.webp"
              className={styles['hero-image3']}
            />
          </div>
        </div>
      </div>
      <div
        className={` ${styles['Section-3']} ${projectStyles['hero-container']} ${projectStyles['section-container']} `}
      >
        <img
          alt="image"
          src="/playground_assets/selling-a-house-and-buying-another-one-1500w.jpeg"
          className={styles['hero-image4']}
        />
        <div
          className={` ${styles['max-width3']} ${projectStyles['max-width']} `}
        >
          <div className={styles['Content3']}>
            <div className={styles['container4']}>
              <h1 className={styles['text15']}>
                <span className={styles['text16']}>First-Homes</span>
                <span className={styles['text17']}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text18']}>
                  is the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text19']}>leading</span>
                <span className={styles['text20']}>
                  {' '}
                  platform to
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text21']}>buy</span>
                <span className={styles['text22']}> your own home</span>
              </h1>
              <span className={styles['text23']}>
                With First-Homes, setting up the process to buy your own home is
                as quick as a couple clicks. Create an account and get started!
              </span>
              <div className={styles['container5']}>
                <Link
                  to="/buy"
                  className={` ${styles['navlink6']} ${projectStyles['button']} ${projectStyles['button-transparent']} `}
                >
                  <span>
                    <span>Get Started</span>
                    <span></span>
                  </span>
                </Link>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/selling-a-house-and-buying-another-one-1500w.jpeg"
              className={styles['hero-image5']}
            />
          </div>
        </div>
      </div>
      <div
        className={` ${styles['Section-4']} ${projectStyles['section-container']} `}
      >
        <h1 className={styles['text27']}>
          <span className={styles['text28']}>Our service allows you to:</span>
          <br></br>
          <span className={styles['text30']}></span>
        </h1>
        <div
          className={` ${styles['max-width4']} ${projectStyles['max-width']} `}
        >
          <div className={styles['cards-container']}>
            <img
              alt="image"
              src="/playground_assets/marketing-hourglass-600h.jpg"
              className={styles['image1']}
            />
            <img
              alt="image"
              src="/playground_assets/save-money-optima-829x552-600h.jpg"
              className={styles['image2']}
            />
            <h1 className={styles['text31']}>
              <span className={styles['text32']}></span>
              <br></br>
              <span className={styles['text34']}>Save time</span>
            </h1>
            <h1 className={styles['text35']}>
              <span className={styles['text36']}></span>
              <br></br>
              <span className={styles['text38']}>Save money</span>
            </h1>
            <h1 className={styles['text39']}>
              and last but not least, secure your dreams.
            </h1>
          </div>
        </div>
      </div>
      <footer className={styles['Footer']}>
        <div className={styles['container6']}>
          <div className={styles['Logo1']}>
            <img
              alt="image"
              src="/playground_assets/25-255811_house-key-png-contemporary-png-a-full-and-200w.png"
              className={styles['image3']}
            />
            <span className={projectStyles['brand-Name']}>
              <span className={styles['text41']}>First</span>
              <span className={styles['text42']}>-</span>
              <span className={styles['text43']}>Homes</span>
            </span>
          </div>
          <div className={styles['LinksContainer']}>
            <div className={styles['Container7']}>
              <div className={styles['ProductContainer']}>
                <span className={styles['text44']}>Service</span>
                <Link to="/buy" className={styles['navlink7']}>
                  Buy
                </Link>
                <Link to="/sell" className={styles['navlink8']}>
                  <span>Sell</span>
                </Link>
              </div>
              <div className={styles['CompanyContainer']}>
                <span className={styles['text46']}>Company</span>
                <span className={styles['text47']}>About</span>
                <span className={styles['text48']}>Careers</span>
                <span className={styles['text49']}>Contact</span>
              </div>
            </div>
            <div className={styles['container8']}>
              <div className={styles['Contact']}>
                <span className={styles['text50']}>Contact Us</span>
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
                <span className={styles['text51']}>Follow Us</span>
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
        <span className={styles['text52']}>
          <span>
            © 2021 FirstHomes, All Rights Reserved.CREATED BY N. MISRA, H.
            IBRAHIM
          </span>
          <span className={styles['text54']}></span>
          <span></span>
        </span>
      </footer>
    </div>
  )
}

export default Home
