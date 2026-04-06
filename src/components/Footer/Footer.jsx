import { FaInstagram, FaFacebook  } from "react-icons/fa";
import { MdCall, MdOutlineEmail  } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import './footer.css'
const Footer = () => {
  return (
    <>
    <div className="main-footer">
        <div className="footer-section">
            <div className="footer-info">
                <p className="footer-title">Our Philosophy</p>
                <p className="footer-text">
                    Safety, honesty, and shared knowledge come first. We keep our operation small, our standards high, and our overhead low — delivering quality aircraft maintenance at a reasonable cost while keeping owners informed and involved.
                </p>
            </div>
            <div className="footer-navigation">
                <p className="footer-title">Links</p>
                <div className="navigation-list">
                    <ul className="footer-item">
                        <li className="footer-list">
                            <HashLink className="footer-link-nav" to="/" smooth>Home</HashLink>
                        </li>
                        <li className="footer-list">
                            <HashLink className="footer-link-nav" to="/home#services" smooth>Services</HashLink>
                        </li>
                        <li className="footer-list">
                            <HashLink className="footer-link-nav" to="/about" smooth>About Us</HashLink>
                        </li>
                        <li className="footer-list">
                            <HashLink className="footer-link-nav" to="/gallery" smooth>Gallery</HashLink>
                        </li>
                        <li className="footer-list">
                            <HashLink className="footer-link-nav" to="/home#contact" smooth>Contact Us</HashLink>
                        </li>
                    </ul>
                    {/* 
                    <ul className="footer-item-two">
                        <li className="footer-list">About Me</li>
                    </ul> */}
                </div>
            </div>
            <div className="footer-social-links">
                <p className="footer-title">Location</p>
                <div className="footer-location">
                    <p>4510 61st Street</p>
                    <p>PO Box 7041</p>
                    <p>Wetaskiwin Airport, AB</p>
                    <p>T9A2Y9</p>
                </div>

            </div>
            <div className="footer-contact">
                <p className="footer-title">Contact Us</p>
                <div className="footer-contact-container">
                    <p className="footer-contact-link"><MdCall className="footer-contact-icon"/><a href="tel:+1-780-903-5263">1-780-903-5263</a></p>
                    <p className="footer-contact-link"><MdOutlineEmail className="footer-contact-icon"/><a href="mailto:oaaex3@gmail.com">oaaex3@gmail.com</a></p>
                </div>

            </div>
        </div>
        <p className="copyright">Owner Assisted Aviation LTD © 2025 | Designed and Developed by <a href="https://raydenwebstudio.com/" target="_blank">Rayden Web Studio</a> </p>
    </div>
    </>
    
  )
}

export default Footer
