import './aircraft-services.css'
import beechcraft from '../../images/aircraft-services/beechcraft.png'
import cessna from '../../images/aircraft-services/cessna.png'
import piper from '../../images/aircraft-services/piper.png'
import mooney from '../../images/aircraft-services/mooney.png'
import vans from '../../images/aircraft-services/vans-aircraft.png'
import taylorcraft from '../../images/aircraft-services/taylorcraft.png'
import ercoupe from '../../images/aircraft-services/ercoupe.png'
const AircraftServices = () => {
  return (
    <>
      <div className="aircraft-services-container">
        <div className="aircraft-services-header">
            <h2 className='aircraft-services-title'>Aircraft We Service</h2>
        </div>
        <div className="aircraft-services-items">
            <img src={beechcraft} className='aircraft-services-img' alt="" />
            <img src={cessna} className='aircraft-services-img' alt="" />
            <img src={piper} className='aircraft-services-img' alt="" />
            <img src={mooney} className='aircraft-services-img' alt="" />
            <img src={vans} className='aircraft-services-img' alt="" />
            <img src={taylorcraft} className='aircraft-services-img' alt="" />
            <img src={ercoupe} className='aircraft-services-img' alt="" />
        </div>
      </div>
    </>
  )
}

export default AircraftServices
