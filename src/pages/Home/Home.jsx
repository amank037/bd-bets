import React from 'react'
import './Home.css'
import BannerSection from './components/BannerSection/BannerSection'
import WorksSection from './components/WorksSection/WorksSection'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import AboutSection from './components/AboutSection/AboutSection'

const Home = () => {
  return (
    <div className="home-container">
      <BannerSection />
      <WorksSection />
      <FeaturesSection />
      <AboutSection />
    </div>
  )
}

export default Home