import './about-member.css'
// import memberOne from '../../images/member-list/42.png'
import Ed from '../../images/member-list/member-one.jpg'
import Jason from '../../images/member-list/Jason.jpg'
import Gracie from '../../images/member-list/Gracie.jpeg'
import memberFive from '../../images/member-list/member-five.jpeg'
import robertOlomi from '../../images/member-list/Robert.JPG'
import BeauCampbell from '../../images/member-list/Beau Campbell.PNG'
import Scott from '../../images/member-list/Scott.jpeg'
import AJ from '../../images/member-list/AJ.jpeg'
import AlexDeuchar from '../../images/member-list/Alex.png'
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
            <img className='member-image' src={Scott} alt="Scott Coggan" />
            <p className='member-name'>Scott Coggan (Owner)</p>
            <p className='member-text'>Scott is an aircraft owner with multiple aircraft and over 35 years of experience in aviation. He holds M1 (small aircraft) and M2 (large aircraft) mechanic licenses, with experience on most general aviation aircraft as well as large transport aircraft. He is also a licensed commercial pilot and has been flying since 1993.</p>
            {/* <p className='member-text'>35 years of experience in aviation.</p>
            <p className='member-text'>Licensed M1 (small aircraft) and M2 (large aircraft) mechanic.</p>
            <p className='member-text'>Experience on most general aviation aircraft and large transport aircraft.</p>
            <p className='member-text'>Licensed pilot with commercial license flying since 1993.</p> */}
          </div>
          <div className="member-box">
            <img className='member-image' src={Ed} alt="Ed Shanlon" />
            <p className='member-name'>Ed Saulou</p>
            <p className='member-text'>
              Ed is a commercial-licensed pilot since 1973 and an aircraft owner since 1986. 
              He is a retired heavy-duty mechanic and welder and has been performing aircraft maintenance since 2020, 
              driven by a strong passion for aviation. He has completed the ICS online aircraft mechanic course and continues to enjoy both aircraft mechanics and aviation.
            </p>
          </div>
          <div className="member-box">
            <img className='member-image' src={Jason} alt="Jason Duchesne" />
            <p className='member-name'>Jason Duchesne</p>
            <p className='member-text'>
              Jason has been a licensed pilot and aircraft owner since 2011. 
              He works as an automotive mechanic as his day job and works on 
              light aircraft recreationally as a way to support general aviation. 
              He is very passionate about flying and aircraft maintenance.
            </p>
          </div>
          <div className="member-box">
            <img className='member-image' src={robertOlomi} alt="Robert Olomi" />
            <p className='member-name'>Robert Olomi</p>
            <p className='member-text'>
              Robert has recently joined our team here at OAA.
              Having his own furnace duct cleaning business as full time employment, on his off days or when he can juggle his business, Robert joins us fixing airplanes. 
              He is a very detailed mechanic, and loves to rebuild cars, especially engine upgrades.
              He also has a passion for airplanes, and this is his first exposure to airplane maintenance.
              We are very fortunate to have met Robert, we hope he becomes a long term employee.
            </p>
          </div>
          <div className="member-box">
            <img className='member-image' src={AlexDeuchar} alt="Alex Deuchar" />
            <p className='member-name'>Alex Deuchar</p>
            <p className='member-text'>
              Alex has been around airplanes with his family his entire life in Wetaskiwin .
              He has a great passion for motor sports , whether sledding or biking, he is always planning a trip somewhere, he works locally as a motorcycle mechanic.
              He started helping us about 3 years ago and has since completed his avionics schooling in YYC.
              With his avionics training complimenting his diverse mechanical skills, Alex is a great asset to us.
            </p>
          </div>
          <div className="member-box">
            <img className='member-image' src={Gracie} alt="Gracie LeBlanc" />
            <p className='member-name'>Gracie LeBlanc</p>
            <p className='member-text'>
              Gracie loves working with aircraft and keeping the hangar clean and organized. 
              Gracie helps with every aspect of the business, from servicing planes, to mowing, preparing our taxes , shopping for supplies, etc.
              She is planning to leave us to become a doctor in the near future, she will be missed greatly.
              She supports our amazing crew and the owner, her uncle, and plans to obtain her pilot’s 
              license in the near future.
            </p>
          </div>
          <div className="member-box">
            <img className='member-image' src={BeauCampbell} alt="Beau Campbell" />
            <p className='member-name'>Beau Campbell</p>
            <p className='member-text'>
              Beau is a young man who has aspirations to become a commercial pilot, he came to us a year ago just wanting to know more about airplanes.
              Since that time he has received his commercial license and is currently working on an instrument rating. At our shop, he has gained experience in all assets of maintenance working mostly with  Ed and Jason.
              Beau comes in when he is available and has become another valued addition to our maintenance team.
            </p>
          </div>
          <div className="member-box">
            <img className='member-image' src={AJ} alt="AJ" />
            <p className='member-name'>Adam Sloan</p>
            <p className='member-text'>
              AJ is a young man we met thru Gracie, he came and helped a few times on annuals while unsure of his future career choice.
              We feel very proud that we introduced AJ to aviation, and he has since graduated from avionics school, and works full time for a commercial airline .
              When needed, AJ still comes and helps us at OAA.
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
