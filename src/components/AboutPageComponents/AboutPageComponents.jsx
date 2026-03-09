import aboutImage from '../../images/about-images/image20.jpeg'
// import aboutImagePage from '../../images//portfolio-images/portfolio-two.png'
import './about-page.css'
const AboutPageComponents = () => {
  return (
    <>
      <div className="about-main-page">
            <div className="about-container">
                <div className="about-image-page">
                    <img src={aboutImage} className='about-page-img' alt="About Owner Assisted Aviation" />
                </div>
                <div className="about-page-info">
                    <h2 className="about-page-subtitle">About Owner Assisted Aviation</h2>
                    {/* <p className="home-about-text">Why I Chose Photography</p> */}
                    <p className="about-page-text">
                      In 2017, at that time with  over 27 years of maintaining both small and large aircraft in the NWT and Alberta for both airlines and friends, 
                      I decided to finally open a small shop to help a handful of friends and owners I associated with over the years.
                    </p>
                    <p className="about-page-text">
                      I realized there was  interest with most owners to learn more about their aircraft and systems,
                       many wanted to participate, not only to monitor the job and where their hard earned money is being spent, 
                      but mostly because they are interested in learning the workings of their aircraft.
                    </p>
                    <p className="about-page-text">
                       We work typically 2 days a week , as I am full time maintaining airliners all week, and my crew is also working or only able to commit 2 days a week. 
                       For that reason, we are often refusing customers and like to keep the business to a small group of owners .
                    </p>
                    <p className="about-page-text">
                     After nearly 10 years of business, not a lot has changed, we seem to retain the customers year after year, we have slowly built up tooling and stocked parts. 
                     Keeping our overhead low, is one of the keys to charging our customers reasonably.
                    </p>
                    <p className="about-page-text">
                      I feel my biggest accomplishment over the last 10 years is not only keeping our 
                      customers and their families safe, at a reasonable cost, but for me, it’s been the staff 
                      I have hand picked to help me. I know countless AME’s who want to come help, 
                      but I like to choose the best employees, The best in safety, knowledge, and teamwork
                    </p>
                </div>
            </div>
                {/* <img src={aboutImagePage} className='about-page-img-two' alt="About Owner Assisted Aviation" /> */}
        </div>
    </>
  )
}

export default AboutPageComponents
