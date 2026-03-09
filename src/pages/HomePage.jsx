import AboutComponents from "../components/AboutComponents/AboutComponents"
import AircraftServices from "../components/AircraftServicesComponents/AircraftServices"
import ContactSection from "../components/ContactSection/ContactSection"
import Footer from "../components/Footer/Footer"
import HeroComponents from "../components/HeroComponents/HeroComponents"
import PortfolioComponents from "../components/PortfolioComponents/PortfolioComponents"
import ServicesComponents from "../components/ServicesComponents/ServicesComponents"
import TestimonialsSection from "../components/Testimonial/TestimonialSection"


const HomePage = () => {
  return (
    <>
        <HeroComponents/>
        <AboutComponents/>
        <AircraftServices/>

        <div id="services">
            <ServicesComponents/>
        </div>

        <PortfolioComponents/>
        {/* <div id="testimonials">
            <TestimonialsSection/>
        </div> */}
        <div id="contact">
            <ContactSection/>
        </div>
        <Footer/>
    </>
  )
}

export default HomePage
