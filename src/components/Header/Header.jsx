import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)

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
      <a href="">Home</a>
      <a href="">About Us</a>
      <a href="">B2C</a>
      
      <div className={`solutions-dropdown ${isSolutionsOpen ? 'active' : ''}`}>
        <a href="#" onClick={(e) => {
          e.preventDefault()
          setIsSolutionsOpen(!isSolutionsOpen)
        }}>
          Solutions
        </a>
        <ul className="dropdown-content">
          <li><a href="">White Label Solutions</a></li>
          <li><a href="">Payment Solutions</a></li>
          <li><a href="">Casino Aggregator</a></li>
        </ul>
      </div>

      <a href="">Our Blogs</a>
      <a href="">Career</a>
      <a href="">Contact</a>
    </>
  )

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
              <ul>
                <li>English</li>
                <li>Bengali</li>
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

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
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