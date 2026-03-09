
import './services.css'
const ServicesComponents = () => {
  return (
    <>

    <div className='main-services-home'>
        <div className="services-header">
            <h2 className='home-services-title'>Our Services</h2>
            <hr className='service-hr'/>
        </div>

        <div className="services-home">

            <div className="services-list-home nature">
                {/* <div className="image-list">
                    <img src={natureImage} className='services-img' alt="Nature Photo" />
                </div> */}
                <div className="services-info">
                        <p className='services-subtitle'>Maintenance & <br /> Annual Inspection</p>
                        <p className='services-home-text'>
                          Professional aircraft maintenance and thorough annual inspections backed by over 27 years of hands-on experience with both small and large aircraft. Focused on safety, 
                          reliability, and attention to detail to keep your aircraft airworthy and properly maintained.
                        </p>
                </div>
            </div>

                <div className="services-list-home wedding">
                    {/* <div className="image-list">
                        <img src={weddingImage} className='services-img' alt="Wedding Photo" />
                    </div> */}
                    <div className="services-info">
                   
                            <p className='services-subtitle'>Parts Sales</p>
                           <p className='services-home-text'>
                            Quality aircraft parts sourced and supplied to meet your maintenance and replacement needs at a reasonable cost.
                          </p>
                        
                    </div>
                </div>
  

                <div className="services-list-home portrait">
                    {/* <div className="image-list">
                        <img src={portraitImage} className='services-img' alt="Portrait Photo" />
                    </div> */}
                    <div className="services-info">
                        <p className='services-subtitle'>Aircraft Salvage</p>
                        <p className='services-home-text'>
                            Aircraft salvage services providing usable parts and components while helping owners recover value.
                        </p>
                    </div>
                </div>


                <div className="services-list-home food-drink">
                    {/* <div className="image-list">
                        <img src={foodImage} className='services-img' alt="Food & Drink Photo" />
                    </div> */}
                    <div className="services-info">
                            <p className='services-subtitle'>Oil & Filter Sales</p>
                            <p className='services-home-text'>
                              Oil and filter sales and service to keep your aircraft engine running clean, efficient, and properly maintained.
                            </p>
                    </div>
                </div>

      </div>
    </div>
    </>
  )
}

export default ServicesComponents
