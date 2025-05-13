import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import AllProducts from './pages/Home/AllProducts/AllProducts'

import './App.css'

function App() {
  const [showScroll, setShowScroll] = React.useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  })

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
        </Routes>
        <Footer />
      
      <a href="" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <img src="https://bdbetsolution.com/assets/images/icon/whatsapp.svg" alt="WhatsApp" />
      </a>
      
      <div 
        className={`scroll-to-top ${showScroll ? 'visible' : ''}`}
        onClick={scrollTop}
      />
    </div>
    </Router>
  )
}

export default App
