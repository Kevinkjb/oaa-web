import imageOne from '../../images/portfolio-images/image7.jpeg'
import imageTwo from '../../images/portfolio-images/image6.jpeg'
import imageThree from '../../images/portfolio-images/plane.jpg'
import imageFour from '../../images/portfolio-images/image9.jpeg'

import { HashLink } from "react-router-hash-link";
import './portfolio.css'
const PortfolioComponents = () => {
  return (
    <>
        <div className='portfolio-container'>
            <div className="portfolio-info">
                <img className="portfolio-img image-one" src={imageOne} alt="Portfolio" />
                <img className="portfolio-img image-two"  src={imageTwo} alt="Portfolio" />
                <img className="portfolio-img image-four"  src={imageFour} alt="Portfolio" />
                <img className="portfolio-img image-three"  src={imageThree} alt="Portfolio" />

            </div>
            <div className="portfolio-btn-container">
              <HashLink to="/gallery" smooth>
                <button className='portfolio-btn'>View Our Gallery</button>
              </HashLink>

            </div>
        </div>
    </>
    
  )
}

export default PortfolioComponents
