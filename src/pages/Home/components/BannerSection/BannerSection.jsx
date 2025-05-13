import React from 'react'
import './BannerSection.css'
import { useTranslation } from 'react-i18next'

const BannerSection = () => {
  const { t } = useTranslation()

  return (
    <div className='banner-div'>
      <div className='banner-bg-slider'>
        <img src="https://bdbetsolution.com/assets/images/casino-bg.webp" alt="" className="slider-img" />
        <img src="https://bdbetsolution.com/assets/images/software-bg.webp" alt="" className="slider-img" />
        <img src="https://bdbetsolution.com/assets/images/about-bg.webp" alt="" className="slider-img" />
      </div>

      <div className='banner-top-div'>
        <div className='banner-top-div-container'>
          <img src="https://bdbetsolution.com/assets/images/winner-cup.png" alt="" />
          <img src="https://bdbetsolution.com/assets/images/coin-3.png" alt="" />
          <img src="https://bdbetsolution.com/assets/images/coin-4.png" alt="" />
          <div className='banner-top-div-text'>
            <h4>{t("Tailored for Success – Boost Your Business with Our White Label Panel")}</h4>
            <h1>{t("White Label Sports Betting")}<span className='typing'></span></h1>
            <p>{t("Our White Label Betting Platform in Bangladesh turns your brand into a betting powerhouse – seamless solutions, limitless possibilities, and a premium experience.")}</p>
          </div>

          <div className='banner-top-div-button'>
            <button>{t("Get Your White Label")}</button>
          </div>
        </div>
      </div>


      <div className='banner-middle-div'>
        <div className='img-div'>
          <img src="https://bdbetsolution.com/assets/images/icon/Project.png" alt="" />
          <div className='img-info-div'>
            <h3>
              <span>100</span>
              <span>+</span>
            </h3>
            <p>{t("Successful Projects")}</p>
          </div>
        </div>

        <div className='img-div'>
          <img src="https://bdbetsolution.com/assets/images/icon/Clients.png" alt="" />
            <div className='img-info-div'>
              <h3>
                <span>50</span>
                <span>+</span>
              </h3>
              <p>{t("Happy Clients")}</p>
            </div>
        </div>

        <div className='img-div'>
          <img src="https://bdbetsolution.com/assets/images/icon/Years.png" alt="" />
            <div className='img-info-div'>
              <h3>
                <span>5</span>
                <span>+</span>
              </h3>
              <p>{t("Year's Experience")}</p>
            </div>
        </div>
      </div>


      <div className='banner-bottom-div'>
        <div className='banner-bottom-img'>
          <img src="https://bdbetsolution.com/assets/images/more-features-image.webp" alt="" />
        </div>

        <div className='banner-bottom-container'>
          <div className='banner-bottom-text'>
            <h5>{t("Get Your White Label with Next-Level")}</h5>
            <h2>{t("Sports Betting Software Development Company")}</h2>
            <p>{t("Get your white label solutions with Bdbetsolution Increase your your sports betting business with our White Label Software Development Company in Bangladesh. We provide cutting-edge solutions tailored to your specific requirements, including seamless integration, modern technology, & exceptional support. Allow your White Label Betting Website Development with a platform designed for success in the global sports betting industry. As a leading Mother Panel Provider in Bangladesh, we empower you to take control of your sports betting venture. As a leading Mother Panel Provider in Bangladesh, we empower you to take control of your sports betting venture.")}</p>
          </div>

          <div className='banner-bottom-list'>
            <div className='list-div'>
              <img src="https://bdbetsolution.com/assets/images/icon/more-features-icon-1.png" alt="" />
              <div className='list-text-div'>
                <h5>{t("Betting Website & Mobile App")}</h5>
                <p>{t("Increase your audience by using both your Betting mobile app & website platforms to capture clients across multiple platforms.")}</p>
              </div>
            </div>

            <div className='list-div'>
              <img src="https://bdbetsolution.com/assets/images/icon/more-features-icon-2.png" alt="" />
              <div className='list-text-div'>
                <h5>{t("One-Touch Betting Panels")}</h5>
                <p>{t("Our skilled Sports Betting Software developers ensure that your sports betting website is created quickly.")}</p>
              </div>
            </div>

            <div className='list-div'>
              <img src="https://bdbetsolution.com/assets/images/icon/more-features-icon-3.png" alt="" />
              <div className='list-text-div'>
                <h5>{t("Quick Market Entry")}</h5>
                <p>{t("Our skilled Sports Betting Software developers ensure that your sports betting website is created quickly.")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default BannerSection