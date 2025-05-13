import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './AboutSection.css'

const AboutSection = () => {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(null)

  const faqItems = [
    {
      title: t("Why Choose a Bdbetsolution White Label Betting Platform?"),
      desc: t("Bdbetsolution white label betting platform provides a customizable sportsbook without licensing, website development, or complex integrations, providing top-tier features and dedicated support for brand growth.")
    },
    {
      title: t("How to start a betting business with a white label platform?"),
      desc: t("Choose Bdbetsolution a reputable provider for a white label betting business, handling technical setup, licensing, payment systems, software integration, and branding, allowing for a quick, cost-effective launch with professional support.")
    },
    {
      title: t("What is white label betting software and how does it work?"),
      desc: t("Bdbetsolution White label betting software is a pre-built, customizable platform that allows businesses to launch their own betting website under their brand. It handles all the technical aspects, including odds management, user accounts, and transactions, while the business focuses on branding and marketing.")
    },
    {
      title: t("How does the licensing process work with a white label platform?"),
      desc: t("Bdbetsolution With a white label platform, you typically don't need to acquire a separate license. The provider often holds the necessary licenses, allowing you to operate under their regulatory framework while focusing on branding and marketing.")
    },
    {
      title: t("What features are included in a white label sports betting platform?"),
      desc: t("Bdbetsolution Provides Features commonly include sportsbook integration, odds management, payment gateways, user account management, and customer support tools. Advanced platforms may also offer live betting, casino games, and mobile compatibility.")
    },
    {
      title: t("How customizable is a white label sports betting platform?"),
      desc: t("Bdbetsolution offers White label platforms are highly customizable, allowing you to tailor the user interface, design, branding, and certain functionalities to align with your business needs and target audience.")
    },
    {
      title: t("What kind of support and maintenance do white label providers offer?"),
      desc: t("Bdbetsolution Providers typically offer ongoing technical support, software updates, and maintenance to ensure the platform runs smoothly and remains secure. This support can include troubleshooting, system upgrades, and performance monitoring.")
    },
    {
      title: t("How is revenue generated with a white label sports betting platform?"),
      desc: t("Revenue is usually generated through a combination of commissions, fees on bets placed, and margins on odds. Some providers may also offer revenue-sharing models based on your platform's performance.")
    },
    {
      title: t("Can the White Label Software support multiple languages?"),
      desc: t("Yes, Bdbetsolution Provides white label platforms are designed to support multiple languages, allowing you to cater to a global audience and enhance user experience.")
    },
    {
      title: t("What are the main benefits of using a white label betting website?"),
      desc: t("Bdbetsolution Provides Benefits include quicker time-to-market, reduced development costs, access to established technology and infrastructure, and ongoing support. It allows businesses to enter the market with a professional platform without the need for extensive technical expertise.")
    }
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className='about-div'>

      <div className='about-top-div'>
        <div className='faq-title'>
          <h5>{t("10 Frequently Asked Questions")}</h5>
          <h1>{t("SPORTS BETTING PLATFORM PROVIDERS")}</h1>
        </div>

        <div className='accordion-container'>
          <div className='accordion-div'>
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className='accordion-title'>
                  <img src="https://bdbetsolution.com/assets/images/icon/faq-icon.png" alt="" />
                  <h3>{item.title}</h3>
                  <p>+</p>
                </div>

                <div className='accordion-desc'>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='about-bottom-div'>
        <div className='about-bottom-img'>
          <img src="https://bdbetsolution.com/assets/images/affilliate-image.png" alt="" />
        </div>

        <div className='about-bottom-text'>
          <h1>{t("Your Business, Our White label Betting Platform!")}</h1>
          <p>{t("Hi, Ready to launch your own White Label betting panel at a low cost? 🏆 If you have any questions or need expert guidance, I'm here to help you. Contact me today, and let's kickstart your business journey together!")}</p>
          <div className='about-bottom-text-btn'>
            <button>{t("Contact Us")}</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutSection