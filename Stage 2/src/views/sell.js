import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard1 from '../components/feature-card_1'
import FeatureCard2 from '../components/feature-card_2'
import FeatureCard3 from '../components/feature-card_3'
import FeatureCard4 from '../components/feature-card_4'
import projectStyles from '../style.module.css'
import styles from './sell.module.css'

const Sell = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Sell - realEstateApp</title>
        <meta property="og:title" content="Sell - realEstateApp" />
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
              className={` ${styles['navlink2']} ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['navbar-Link']} `}
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
      <div className={styles['Hero']}>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1529859503572-5b9d1e68e952?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjYxODI1OTE&amp;ixlib=rb-1.2.1&amp;w=1200"
          className={styles['image1']}
        />
        <div className={styles['container1']}>
          <h1 className={styles['text05']}>Selling your home</h1>
          <h2 className={styles['text06']}>
            Selling your home is now easier than ever.
          </h2>
          <div className={styles['BtnGroup']}>
            <a
              href="#addressinput"
              className={` ${styles['link']} ${projectStyles['button']} `}
            >
              Get Started
            </a>
            <a
              href="#sellinfo"
              className={` ${styles['link1']} ${projectStyles['button']} `}
            >
              Learn More
            </a>
          </div>
          <div className={styles['Stats']}>
            <div className={styles['Stat']}>
              <h1 className={styles['text07']}>
                <span>515+</span>
              </h1>
              <span className={styles['text09']}>Satisfied clients</span>
            </div>
            <div className={styles['Stat1']}>
              <h1 className={styles['text10']}>
                <span>270</span>
              </h1>
              <span className={styles['text12']}>
                <span>Homes sold using First-Homes</span>
              </span>
            </div>
            <div className={styles['Stat2']}>
              <h1 className={styles['text14']}>
                <span>25</span>
              </h1>
              <span className={styles['text16']}>
                Countries that First-Homes is available in
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="sellinfo" className={styles['Features']}>
        <h1 className={styles['text17']}>
          <span>How it works</span>
        </h1>
        <span className={styles['text19']}>
          <span>
            Fill out our form with your address and contact info, one of our
            agents will get in touch to verify you address. Once that is
            complete your house will be listed on our site and clients can set
            up dates to view your home.
          </span>
          <span></span>
        </span>
        <div className={styles['container2']}>
          <FeatureCard1
            description="Enter the address of the property you are attempting to sell"
            rootClassName="rootClassName"
          ></FeatureCard1>
          <FeatureCard2
            description="Enter your contact information so we can reach you"
            rootClassName="rootClassName"
          ></FeatureCard2>
          <FeatureCard3
            description="We will validate your address based on the documents we will ask from you"
            rootClassName="rootClassName"
          ></FeatureCard3>
          <FeatureCard4
            description="Once the verification process is complete, we will connect you with prospective buyers"
            rootClassName="rootClassName"
          ></FeatureCard4>
        </div>
      </div>
      <div id="addressinput" className={styles['Banner']}>
        <span className={styles['text22']}>
          Start By Verifying Your Address...
        </span>
        <h1 className={styles['text23']}>Lets Get Started</h1>
        <span className={styles['text24']}>
          Place the address you wish to list, to get started with the best
          market in Ontario
        </span>
        <div className={styles['container3']}>
          <form enctype="text/plain" autoComplete="address-line1">
            <input
              type="Input Address"
              id="address"
              required="true"
              placeholder="Input Adress"
              autoComplete="street-address"
              className={` ${styles['textinput']} ${projectStyles['input']} `}
            />
            <Link
              to="/agent-contact-sell"
              className={` ${styles['navlink3']} ${projectStyles['button']} `}
            >
              Submit
            </Link>
          </form>
        </div>
      </div>
      <footer className={styles['Footer']}>
        <div className={styles['container4']}>
          <div className={styles['Logo1']}>
            <img
              alt="image"
              src="/playground_assets/25-255811_house-key-png-contemporary-png-a-full-and-200w.png"
              className={styles['image2']}
            />
            <span className={projectStyles['brand-Name']}>
              <span className={styles['text26']}>First</span>
              <span className={styles['text27']}>-</span>
              <span className={styles['text28']}>Homes</span>
            </span>
          </div>
          <div className={styles['LinksContainer']}>
            <div className={styles['Container5']}>
              <div className={styles['ProductContainer']}>
                <span className={styles['text29']}>Service</span>
                <Link to="/buy" className={styles['navlink4']}>
                  Buy
                </Link>
                <Link to="/sell" className={styles['navlink5']}>
                  <span>Sell</span>
                </Link>
              </div>
              <div className={styles['CompanyContainer']}>
                <span className={styles['text31']}>Company</span>
                <span className={styles['text32']}>About</span>
                <span className={styles['text33']}>Careers</span>
                <span className={styles['text34']}>Contact</span>
              </div>
            </div>
            <div className={styles['container6']}>
              <div className={styles['Contact']}>
                <span className={styles['text35']}>Contact Us</span>
                <a
                  href="mailto:info@firsthomes.com?subject="
                  className={styles['link2']}
                >
                  info@FirstHomes.com
                </a>
                <a href="tel:1234567899" className={styles['link3']}>
                  +123 (4567) 890
                </a>
              </div>
              <div className={styles['Socials']}>
                <span className={styles['text36']}>Follow Us</span>
                <div className={styles['IconGroup']}>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles['link4']}
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
                    className={styles['link5']}
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
                    className={styles['link6']}
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
        <span className={styles['text37']}>
          <span>
            © 2021 FirstHomes, All Rights Reserved.CREATED BY N. MISRA, H.
            IBRAHIM
          </span>
          <span className={styles['text39']}></span>
          <span></span>
        </span>
      </footer>
    </div>
  )
}

export default Sell
