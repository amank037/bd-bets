import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './WorksSection.css'

const WorksSection = () => {
  const { t } = useTranslation()
  const [activeImage, setActiveImage] = useState(0)
  const [dragStart, setDragStart] = useState(0)
  const [dragging, setDragging] = useState(false)

  const navigate = useNavigate()


  const images = [
    "https://bdbetsolution.com/assets/images/WhiteLabel.webp",
    "https://bdbetsolution.com/assets/images/Customized-Designs.webp",
    "https://bdbetsolution.com/assets/images/Match-Odds.png",
    "https://bdbetsolution.com/assets/images/Casino-Software.webp",
    "https://bdbetsolution.com/assets/images/customer-support.webp"
  ]

  const buttons = [
    t("Choose Your White Label"),
    t("Choose Your Customization"),
    t("Choose a Sports Odds"),
    t("Choose a Casino Software"),
    t("Choose a Customer Support")
  ]


  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const slideRef = useRef(null)

  const slides = [
    {
      image: "https://bdbetsolution.com/admin/images/product/20240925130912-2537.webp",
      title: t("Betvisa White Label"),
      text: t("Launch your Betvisa White Label Copy Betting Website in Bangladesh? Bdbetsolution delivers the right mix of price, customization & performance to fulfill your needs.")
    },
    {
      image: "https://bdbetsolution.com/admin/images/product/20240925130704-9274.webp",
      title: t("Betvisa White Label"),
      text: t("Bdbetsolution provides the most affordable Elonbet White Label Copy Betting Website in Bangladesh, designed for your specific business needs. contact now")
    },
    {
      image: "https://bdbetsolution.com/admin/images/product/20240925130451-6346.webp",
      title: t("Betvisa White Label"),
      text: t("Bdbetsolution provides Sportsbet White Label Copy Betting Websites in Bangladesh that are fully customizable, secure & user-friendly with an affordable Rate. Contact Now")
    },
    {
      image: "https://bdbetsolution.com/admin/images/product/20240925130236-7187.webp",
      title: t("Betvisa White Label"),
      text: t("Bdbetsolution provides the Krikya22 White Label Copy Betting Website in Bangladesh. We offer cost-effective & robust solutions to help your betting business succeed.")
    },
    {
      image: "https://bdbetsolution.com/admin/images/product/20241128114728-2873.webp",
      title: t("Betvisa White Label"),
      text: t("Ready to launch your betting platform? Partner with Bdbetsolution to build a feature-rich Stake White Label Betting Website in Bangladesh. Seamless, customizable, and built for growth!")
    },
    {
      image: "https://bdbetsolution.com/admin/images/product/20241128114721-4528.webp",
      title: t("Betvisa White Label"),
      text: t("Bdbetsolution! Build your Playsta White Label Betting Website and deliver a premium user experience tailored for the Bangladeshi market. Let's create success together!")
    }
  ]

  const allSlides = [...slides, ...slides]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
  
      setCurrentIndex((prev) => {
        if (prev + 1 >= slides.length + 1) {
          return prev
        }
        return prev + 1
      })
    }, 3000)
  
    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    if (currentIndex === slides.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(0)
      }, 500)
  
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, slides.length])

const handleMouseDown = (e) => {
  setDragging(true)
  setDragStart(e.pageX - (currentIndex * (393 + 20)))
}

const handleMouseMove = (e) => {
  if (!dragging) return
  
  const currentPosition = e.pageX - dragStart
  const isMobile = window.innerWidth <= 600
  const slidesToShow = isMobile ? 2 : 3
  const maxScroll = (slides.length - slidesToShow) * (isMobile ? ((window.innerWidth - 30) / 2) : (393 + 20))
  

  const boundedPosition = Math.max(Math.min(currentPosition, 0), -maxScroll)
  setCurrentIndex(-boundedPosition / (isMobile ? ((window.innerWidth - 30) / 2) : (393 + 20)))
}

const handleMouseUp = () => {
  if (!dragging) return
  
  setDragging(false)

  const nearestSlide = Math.round(currentIndex)
  const isMobile = window.innerWidth <= 600
  const slidesToShow = isMobile ? 2 : 3
  setCurrentIndex(Math.max(0, Math.min(nearestSlide, slides.length - slidesToShow)))
}

const handlePrevSlide = () => {
  setIsTransitioning(true)
  setCurrentIndex((prev) => {
    if (prev <= 0) {

      return slides.length - 1
    }
    return prev - 1
  })
}

const handleNextSlide = () => {
  setIsTransitioning(true)
  setCurrentIndex((prev) => {
    const isMobile = window.innerWidth <= 600
    const slidesToShow = isMobile ? 2 : 3
    if (prev + 1 >= slides.length - slidesToShow + 1) {
      return prev
    }
    return prev + 1
  })
}
  

  return (
    <div className='works-div'>

      <div className='works-top-div'>
        <div className='works-top-container'>
          <h2>{t("White Label Betting Website Maker & Solutions Provider in Bangladesh")}</h2>
          <h1>{t("How Bdbetsolution Works?")}</h1>
          <p>{t("Bdbetsolution stands out as a leading sports betting platform provider in Bangladesh, delivering cutting-edge, customized betting solutions designed to succeed in the market. With over a decade of experience in the sports betting industry, Bdbetsolution specializes in developing feature-rich, modern platforms that cater to diverse business needs. We provide end-to-end White Label Betting Website Maker service in Bangladesh to help new and established businesses achieve their growth goals.")}</p>
        </div>
      </div>

      <div className='works-middle-div'>
        <div className='button-group'>
          {buttons.map((text, index) => (
            <button
              key={index}
              className={`tab-button ${activeImage === index ? 'active' : ''}`}
              onClick={() => setActiveImage(index)}
            >
              {text}
            </button>
          ))}
        </div>
        <div className='image-view'>
          <div className='image-view-child'>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className={`image ${activeImage === index ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='works-bottom-div'>
        <div className='works-bottom-text'>
          <h2>{t("Your Go-To Source for Budget-Friendly")}</h2>
          <h1>{t("B2B White Label Sports Betting Software Solutions Provider")}</h1>
          <p>{t("Explore the Leading Low-Cost White Label Sports Betting Software Providers in Bangladesh. Get a fully-equipped sports betting website with integrated sports, odds, and bonus systems. Consult our experts today for the finest white label sportsbook solutions!")}</p>
        </div>

        <div className='works-bottom-slider'>
          <div 
            className='works-slides'
            ref={slideRef}
            style={{
              transform: `translateX(calc(-${currentIndex * (window.innerWidth <= 600 ? ((window.innerWidth - 40) / 2) : (393 + 20))}px))`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
              cursor: dragging ? 'grabbing' : 'grab'
          }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {allSlides.map((slide, index) => (
              <div className='slide' key={index}>
                <img src={slide.image} alt="" />
                <div className='slide-buttons'>
                  <button>{t("Play Now")}</button>
                  <button>{t("Read More")}</button>
                </div>
                <p>{slide.text}</p>
              </div>
            ))}
          </div>
          
          <div className='works-slides-buttons'>
            <button onClick={handlePrevSlide}>
              <img src="https://img.icons8.com/?size=30&id=60636&format=png&color=FFFFFF" alt="Previous" />
            </button>
            <button onClick={handleNextSlide}>
              <img src="https://img.icons8.com/?size=30&id=60671&format=png&color=FFFFFF" alt="Next" />
            </button>
          </div>
        </div>

        <div className='works-product-button'>
          <button
           onClick={() => navigate('/products')}
          >{t("View All Products")}</button>
        </div>
      </div>
    </div>
  )
}

export default WorksSection