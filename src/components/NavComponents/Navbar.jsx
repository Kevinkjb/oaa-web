import './navbar.css'
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState, useEffect, useRef } from 'react';
import logo from '../../images/logo/oaa-logo.png'
// import logo from '../../images/logo/ori-logo.png'
const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false)
    const [scroll, setScroll] = useState(false)
    const navRef = useRef(null); // NEW: ref to detect outside clicks
    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setBurgerMenu(false);
            }
        };

        if (burgerMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [burgerMenu]);


    const closeMobile = () => {
        scrollToTop();
        setBurgerMenu(false);
      };
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
      function setScrolled() {
          if(window.scrollY >= 0){
              setScroll(true)
          } else{
              setScroll(false)
          }
        }
        window.addEventListener("scroll", setScrolled)
  return (
    <>
    <div className={scroll ? 'nav-container sticky' : 'nav-container'}>
      <nav className="main-nav">
        <div className="brand">
            <div  className="logo">
              <HashLink smooth to="/" className='logo-link' >
                  <img className='logo-img' src={logo} alt="logo name" />
              </HashLink>
            </div>
        </div>
        <ul ref={navRef} className={`nav-item ${burgerMenu ? 'active' : ''}`}>
            <li className="nav-list">
              <HashLink className='nav-link' smooth  to="/" onClick={closeMobile}>Home</HashLink>
            </li>
            <li className="nav-list">
              <HashLink className='nav-link' smooth  to="/home#services" onClick={closeMobile}>Services</HashLink>
            </li>
            <li className="nav-list">
              <HashLink className='nav-link' smooth  to="/about" onClick={closeMobile}>About Us</HashLink>
            </li>
            <li className="nav-list">
              <HashLink className='nav-link' smooth  to="/gallery" onClick={closeMobile}>Gallery</HashLink>
            </li>
            {/* <li className="nav-list">
              <HashLink className='nav-link' smooth  to="/home#testimonials" onClick={closeMobile}>Testimonials</HashLink>
            </li> */}
            <li className="nav-list">
              <HashLink className='nav-link' smooth  to="/#contact" onClick={closeMobile}>Contact</HashLink>
            </li>
        </ul>

        <div  className='nav-button' onClick={() => setBurgerMenu(!burgerMenu)}>
            {
            burgerMenu ? <IoCloseSharp className='burger-menu'/>  : <GiHamburgerMenu className='burger-menu'/>
            }
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar
