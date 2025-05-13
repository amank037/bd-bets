import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './FeaturesSection.css'

const FeaturesSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const baseSlides = [
    {
      image: "https://bdbetsolution.com/assets/images/icon/amazing-features-icon-1.png",
      text: t("Safety")
    },
    {
      image: "https://bdbetsolution.com/assets/images/icon/amazing-features-icon-2.png",
      text: t("Transparency")
    },
    {
      image: "https://bdbetsolution.com/assets/images/icon/amazing-features-icon-3.png",
      text: t("Low Commissions")
    },
    {
      image: "https://bdbetsolution.com/assets/images/icon/amazing-features-icon-4.png",
      text: t("Fast & Reliable")
    }
  ]

  const slides = [...baseSlides, ...baseSlides]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex(prev => {
        const maxIndex = window.innerWidth <= 600 ? baseSlides.length - 2 : baseSlides.length
        if (prev >= maxIndex) {
          setIsTransitioning(false)
          setCurrentIndex(0)
          return 0
        }
        return prev + 1
      })
    }, 3000)
  
    return () => clearInterval(interval)
  }, [baseSlides.length])

return (
    <div className='features-div'>
      
      <div className='features-top-div'>
        <div className='features-top-nested-div'>
          <div className='features-top-text'>
            <h5>{t("The power of white label sports betting solutions")}</h5>
            <h4>{t("An Exhaustive list of Amazing Features")}</h4>
            <p>{t("Our platform Work is fully developed, customizable solution that lets businesses provide sports betting services under their own brand.")}</p>
          </div>

          <div className='features-top-carousel'>
            <button className='carousel-left-btn' onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(prev => prev - 1);
            }}>&larr;</button>

            <div 
              className='carousel-slider'
              style={{
                transform: `translateX(${-currentIndex * (window.innerWidth <= 600 ? (window.innerWidth - 100) / 2 : 310)}px)`,
                transition: isTransitioning ? 'transform 1s ease-in-out' : 'none'
              }}
            >
              {slides.map((slide, index) => (
                <div className='features-slide' key={index}>
                  <div className='slide-nest'>
                    <img src={slide.image} alt="" />
                    <p>{slide.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className='carousel-right-btn' onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(prev => prev + 1);
            }}>&rarr;</button>
          </div>

        </div>
      </div>

      <div className='features-bottom-div'>
        <img src="https://bdbetsolution.com/assets/images/crypto-fanus-1.png" alt="" />
        <img src="https://bdbetsolution.com/assets/images/crypto-fanus-2.png" alt="" />
        <div className='features-bottom-nested'>
          <div className='features-bottom-left'>
            <img src="https://bdbetsolution.com/assets/images/About-image.png" alt="" />
          </div>

          <div className='features-bottom-right'>
            <div className='bottom-right-text'>
              <h5>{t("The power of white label sports betting solutions")}</h5>
              <h2>{t("How Do White Label Betting Platforms Work?")}</h2>
              <p>{t("Bdbetsolution's white label sports betting platforms make it easier to enter the betting market by providing a ready-to-use, fully functional solution. These platforms include essential features such as real-time odds, live betting, and mobile compatibility, all pre-built and customizable to your brand. By choosing a White Label solution, you avoid the complexities of developing and maintaining software, saving both time and cost. With our B2B white label betting platform in Bangladesh, businesses can quickly and easily launch their own branded betting operations, tapping into the lucrative Bangladeshi market. With our B2B white label betting platform in Bangladesh, businesses can quickly and easily launch their own branded betting operations, tapping into the lucrative Bangladeshi market.")}</p>
            </div>

            <div className='bottom-right-grid'>
              <div className='grid-item'>
                <img src="https://bdbetsolution.com/assets/images/icon/about-icon-1.png" alt="" />
                <p>{t("Centralized Dashboard")}</p>
              </div>
              <div className='grid-item'>
                <img src="https://bdbetsolution.com/assets/images/icon/about-icon-2.png" alt="" />
                <p>{t("User Management")}</p>
              </div>
              <div className='grid-item'>
                <img src="https://bdbetsolution.com/assets/images/icon/about-icon-3.png" alt="" />
                <p>{t("API Integration")}</p>
              </div>
              <div className='grid-item'>
                <img src="https://bdbetsolution.com/assets/images/icon/about-icon-4.png" alt="" />
                <p>{t("Reporting & Analysis")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FeaturesSection;