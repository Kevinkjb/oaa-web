import './about-member.css'
import memberOne from '../../images/member-list/42.png'
import memberTwo from '../../images/member-list/member-one.jpg'
import memberThree from '../../images/member-list/45.png'
import memberFour from '../../images/member-list/46.png'
import memberFive from '../../images/member-list/member-five.jpeg'
const AboutMember = () => {
  return (
    <>
      <div className="about-member-container">
        <div className="member-header">
          <p className='member-header-title'>Meet The Team</p>
          <hr className="member-hr"/>
        </div>
        <div className="member-list">
          <div className="member-box">
            <img className='member-image' src={memberOne} alt="Scott Coggan" />
            <p className='member-name'>Scott Coggan (Owner)</p>
            <p className='member-text'>Scott Coggan is an aircraft owner with multiple aircraft and over 35 years of experience in aviation. He holds M1 (small aircraft) and M2 (large aircraft) mechanic licenses, with experience on most general aviation aircraft as well as large transport aircraft. He is also a licensed commercial pilot and has been flying since 1993.</p>
            {/* <p className='member-text'>35 years of experience in aviation.</p>
            <p className='member-text'>Licensed M1 (small aircraft) and M2 (large aircraft) mechanic.</p>
            <p className='member-text'>Experience on most general aviation aircraft and large transport aircraft.</p>
            <p className='member-text'>Licensed pilot with commercial license flying since 1993.</p> */}
          </div>
          <div className="member-box">
            <img className='member-image' src={memberTwo} alt="Ed Shanlon" />
            <p className='member-name'>Ed Shanlon</p>
            <p className='member-text'>
              Ed Shanlon is a commercial-licensed pilot since 1973 and an aircraft owner since 1986. 
              He is a retired heavy-duty mechanic and welder and has been performing aircraft maintenance since 2020, 
              driven by a strong passion for aviation. He has completed the ICS online aircraft mechanic course and continues to enjoy both aircraft mechanics and aviation.
            </p>
          </div>
          <div className="member-box">
            <img className='member-image' src={memberThree} alt="Jason Duchesne" />
            <p className='member-name'>Jason Duchesne</p>
            <p className='member-text'>
              Jason Duchesne has been a licensed pilot and aircraft owner since 2011. 
              He works as an automotive mechanic as his day job and works on 
              light aircraft recreationally as a way to support general aviation. 
              He is very passionate about flying and aircraft maintenance.
            </p>
          </div>
          <div className="member-box">
            <img className='member-image' src={memberFour} alt="Gracie LeBlanc" />
            <p className='member-name'>Gracie LeBlanc</p>
            <p className='member-text'>
              Gracie LeBlanc loves working with aircraft and keeping the hangar clean and organized. 
              She supports the amazing crew and the owner, her uncle, and plans to obtain her pilot’s 
              license in the near future.
            </p>
          </div>
          <div className="member-box">
            <img className='member-image' src={memberFive} alt="Charlie Coggan" />
            <p className='member-name'>Charlie Coggan</p>
            <p className='member-text'>
              Charlie has 14 years of experience around aircraft, with a background in hangar security. 
              He regularly goes flying and enjoys being involved in the aviation environment.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMember
