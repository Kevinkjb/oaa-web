import map from './map.png'
import { IoIosPin, IoIosMail  } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import './contact.css'
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
                <p>+1-780-903-5283</p>
              </div>

              <div className='contact-email'>
                <IoIosMail className='contact-icon'/>
                <p>oaaex3@gmail.com</p>
              </div>

              <div className="postal-code">
                <IoIosPin className='contact-icon'/>
                <p>
                  PO Box 7041 <br /> 
                  Wetaskiwin, AB <br />
                  T9A2Y9
                </p>
              </div>
            </div>
        </div>
        <img className='contact-map' src={map} alt="" />
      </div>
    </>

  )
}

export default ContactSection
