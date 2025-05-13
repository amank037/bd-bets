import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='footer-div'>

        <div className='footer-top-div'>

            <div className='footer-top-logo-div'>
                <img src="https://bdbetsolution.com/admin/images/bg/20240930160324-4931.svg?v=0.01" alt="LOGO" />

                <ul>
                    <li>{t('About Us')}</li>
                    <li>{t('Payment Solutions')}</li>
                    <li>{t('Contact Us')}</li>
                </ul>
            </div>

            <div className='footer-top-list-div'>
                <ul className='list'>
                    <li>{t('MostPlay White Label')}</li>
                    <li>{t('Baji White Label')}</li>
                    <li>{t('Velki White Label')}</li>
                    <li>{t('Krikya22 White Label')}</li>
                    <li>{t('Sportsbet White Label')}</li>
                    <li>{t('Elon-Bet White Label')}</li>            
                </ul>

                <ul className='list'>
                    <li>{t('Betjili White Label')}</li>
                    <li>{t('Jita White Label')}</li>
                    <li>{t('Takabet11 White Label')}</li>
                    <li>{t('Jeetwin White Label')}</li>
                    <li>{t('SkyExch White Label')}</li>
                    <li>{t('7Wicket White Label')}</li>            
                </ul>

            </div>

        </div>

        <div className='footer-bottom-div'>

            <div className='copy-dib'>
                <p>{t('Copyright')} ©2024 <span>Bdbets</span> {t('All Rights Reserve')}</p>
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