// import map from './map.png'
import { IoIosPin, IoIosMail  } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import './contact.css'
import GoogleMap from '../GoogleMap/GoogleMap';
const ContactSection = () => {
  return (
    <>
      <div className='contact-container'>
        <div className="contact-info-details">
          {/* CONTACT HEADER */}
          <div className="contact-header">
            <h2 className='contact-info-title'>Contact Information</h2>
            <p className='contact-text'>
              If you have any questions or would like to request an estimate for  services, 
              please contact us via phone or send us a message  and we will respond to you as soon as possible.
            </p>
          </div>
          {/* CONTACT DETAILS */}
            <div className="contact-info">
              <div className='contact-phone'>
                <FaPhoneAlt className='contact-icon'/>
                <p><a className="contact-section-link" href="tel:+1-780-903-5263">+1-780-903-5263</a></p>
              </div>

              <div className='contact-email'>
                <IoIosMail className='contact-icon'/>
                <p><a className="contact-section-link" href="mailto:oaaex3@gmail.com">oaaex3@gmail.com</a></p>
              </div>

              <div className="postal-code">
                <IoIosPin className='contact-icon'/>
                <p>
                  4510 61st Street <br />
                  PO Box 7041 <br /> 
                  Wetaskiwin Airport, AB <br />
                  T9A2Y9
                </p>
              </div>
            </div>
        </div>
        <GoogleMap/>

      </div>
    </>

  )
}

export default ContactSection
