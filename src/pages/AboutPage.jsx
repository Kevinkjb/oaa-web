import AboutMember from "../components/AboutMember/AboutMember"
import AboutPageComponents from "../components/AboutPageComponents/AboutPageComponents"
import ContactSection from "../components/ContactSection/ContactSection"
import Footer from "../components/Footer/Footer"


const AboutPage = () => {
  return (
    <>
      <div className="hero-section-page" id="top">
          <h1 className="page-title">About Us</h1>
      </div>
      <AboutPageComponents/>
      <AboutMember/>
      <ContactSection/>
      <Footer/>
    </>

  )
}

export default AboutPage
