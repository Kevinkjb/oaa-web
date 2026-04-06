import './map.css'

const GoogleMap = () => {
  return (
    <>
        <div className='map-container'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d600.7655619144577!2d-113.40583643032689!3d52.96529460600699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53754fcef642ce6f%3A0x16f8839de5f9e803!2s4510%2061%20St%2C%20Wetaskiwin%2C%20AB%20T9A%201X8!5e0!3m2!1sen!2sca!4v1775515991562!5m2!1sen!2sca" 
              className='google-map'
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
              </iframe>
        </div>
             
    </>
  )
}

export default GoogleMap
