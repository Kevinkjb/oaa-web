
import aboutImage from '../../images/portfolio-images/image26.jpeg'
import './home-about.css'
import { HashLink } from 'react-router-hash-link'
const AboutComponents = () => {
  return (
    <>
        <div className="home-about-main">
            <div className="home-about-container">
                <div className="home-image-page">
                    <img src={aboutImage} className='about-home-img' alt="About Owner Assisted Aviation" />
                </div>
                <div className="home-about-info">
                    <h2 className="home-about-subtitle">About Us</h2>
                    {/* <p className="home-about-text">Why I Chose Photography</p> */}
                    <p className="home-about-text">
                     In 2017, after over 27 years of maintaining both small and large aircraft in the NWT and Alberta 
                     for airlines and friends, I opened a small shop to support a handful of friends and owners I had worked with over the years.
                    </p>
                    <p className="home-about-text">
                      Many owners wanted to learn more about their aircraft and systems and be involved in the process — not just to monitor where their hard-earned money was going, but because they were genuinely interested in how their aircraft works. 
                      We operate two days a week while continuing full-time airline maintenance, which allows us to keep the business small, focused, and personal.
                    </p>
                    <p className="home-about-text">
                       Nearly 10 years later, we continue to serve a loyal group of customers, 
                       keeping overhead low so we can charge reasonably — with safety, knowledge, and teamwork always first.
                    </p>
                    <div className="home-about-social">
                        <HashLink to="/about" smooth>
                            <button className='home-about-btn'>Learn More</button>
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutComponents
