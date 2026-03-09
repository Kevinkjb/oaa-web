import React from 'react'
import Footer from '../components/Footer/Footer'
import ContactSection from '../components/ContactSection/ContactSection'
import GalleryComponents from '../components/GalleryComponents/GalleryComponents'

const GalleryPage = () => {
  return (
    <>
      <div className="hero-section-page">
          <h1 className="page-title">Gallery</h1>
      </div>
      <GalleryComponents/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default GalleryPage
