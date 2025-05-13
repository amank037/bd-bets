import React, { useState, useEffect } from 'react'
import './Header.css'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = (
    <>
      <a href="/">{t('Home')}</a>
      <a href="">{t('About Us')}</a>
      <a href="">{t('B2C')}</a>
      
      <div className={`solutions-dropdown ${isSolutionsOpen ? 'active' : ''}`}>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          setIsSolutionsOpen(!isSolutionsOpen)
        }}>
          {t('Solutions')}
        </a>
        <ul className="dropdown-content">
          <li><a href="">{t('White Label Solutions')}</a></li>
          <li><a href="">{t('Payment Solutions')}</a></li>
          <li><a href="">{t('Casino Aggregator')}</a></li>
        </ul>
      </div>

      <a href="">{t('Our Blogs')}</a>
      <a href="">{t('Career')}</a>
      <a href="">{t('Contact')}</a>
    </>
  )

  const currentLang = i18n.language === 'bn' ? t('Bengali') : t('English');

  return (
    <div className='header-div'>
      <div className='topbar-div'>
        <div className='topbar-child-div'>
          <div className='topbar-child-left-div'>
            <div className='email-div'>
              <img src="https://bdbetsolution.com/assets/images/icon/mail.svg" alt="email" />
              placeholder@gmail.com
            </div>

            <div className='phone-div'>
              <img src="https://bdbetsolution.com/assets/images/icon/whatsapp.svg" alt="whatsapp" />
              123456789
            </div>
          </div>

          <div className='topbar-child-right-div'>
            <div className='language-div'>
              <img src="https://img.icons8.com/?size=30&id=63496&format=png&color=FFFFFF" alt="language" />
              <span>{currentLang}</span>
              <ul>
                <li onClick={() => i18n.changeLanguage('en')}>English</li>
                <li onClick={() => i18n.changeLanguage('bn')}>বাংলা</li>
              </ul>
            </div>

            <div className='social-div'>
              <img src="https://bdbetsolution.com/assets/images/icon/facebook.svg" alt="facebook" />
              <img src="https://bdbetsolution.com/assets/images/icon/telegram.svg" alt="telegram" />
              <img src="https://bdbetsolution.com/assets/images/icon/youtube.svg" alt="youtube" />
              <img src="https://bdbetsolution.com/assets/images/icon/instagram.svg" alt="instagram" />
              <img src="https://bdbetsolution.com/assets/images/icon/X-Logo.svg" alt="twitter" />
            </div>
          </div>
        </div>
      </div>

      <div className={`bottombar-div ${isScrolled ? 'sticky' : ''}`}>
        <div className='logo-div'>
          <img src="https://bdbetsolution.com/admin/images/bg/20240930160324-4931.svg?v=0.01" alt="LOGO" />
        </div>

        <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems}
        </div>

        <div className='navbar-div'>
          <div className='navbar-child-div'>
            {navItems}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header