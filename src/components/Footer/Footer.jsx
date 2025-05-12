import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-div'>

        <div className='footer-top-div'>

            <div className='footer-top-logo-div'>
                <img src="https://bdbetsolution.com/admin/images/bg/20240930160324-4931.svg?v=0.01" alt="LOGO" />

                <ul>
                    <li>About Us</li>
                    <li>Payment Solutions</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className='footer-top-list-div'>
                <ul className='list'>
                    <li>MostPlay White Label</li>
                    <li>Baji White Label</li>
                    <li>Velki White Label</li>
                    <li>Krikya22 White Label</li>
                    <li>Sportsbet White Label</li>
                    <li>Elon-Bet White Label</li>            
                </ul>

                <ul className='list'>
                    <li>Betjili White Label</li>
                    <li>Jita White Label</li>
                    <li>Takabet11 White Label</li>
                    <li>Jeetwin White Label</li>
                    <li>SkyExch White Label</li>
                    <li>7Wicket White Label</li>            
                </ul>

            </div>

        </div>

        <div className='footer-bottom-div'>

            <div className='copy-dib'>
                <p> Copyright ©2024 <span>Bdbets</span> All Rights Reserve</p>
            </div>

            <div className='social-div'>
                <img src="https://bdbetsolution.com/assets/images/icon/facebook.svg" alt="facebook" />
                <img src="https://bdbetsolution.com/assets/images/icon/telegram.svg" alt="telegram" />
                <img src="https://bdbetsolution.com/assets/images/icon/youtube.svg" alt="youtube" />
                <img src="https://bdbetsolution.com/assets/images/icon/instagram.svg" alt="instagram" />
                <img src="https://bdbetsolution.com/assets/images/icon/X-Logo.svg" alt="twitter" />
            </div>

        </div>

    </footer>
  )
}

export default Footer