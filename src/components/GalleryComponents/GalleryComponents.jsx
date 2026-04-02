import imageOne from '../../images/portfolio-images/plane.jpg'
import imageTwo from '../../images/portfolio-images/scrapyard.jpg'
import imageThree from '../../images/portfolio-images/image1.jpeg'
import imageFour from '../../images/portfolio-images/image2.jpeg'
import imageFive from '../../images/portfolio-images/image3.jpeg'

import imageSeven from '../../images/portfolio-images/image4.jpeg'
import imageEight from '../../images/portfolio-images/image5.jpeg'
import imageNine from '../../images/portfolio-images/image6.jpeg'
import imageTen from '../../images/portfolio-images/image7.jpeg';

import image11 from '../../images/portfolio-images/image8.jpeg'
import image12 from '../../images/portfolio-images/image9.jpeg'
import image13 from '../../images/portfolio-images/image10.jpeg'
import image14 from '../../images/portfolio-images/image11.jpeg'
import image15 from '../../images/portfolio-images/image12.jpeg'
import image16 from '../../images/portfolio-images/image13.jpeg'
import image17 from '../../images/portfolio-images/image14.jpeg'
import image18 from '../../images/portfolio-images/image15.jpeg'
import image19 from '../../images/portfolio-images/image16.jpeg'
import image20 from '../../images/portfolio-images/image17.jpeg'
import image21 from '../../images/portfolio-images/image18.jpeg'
import image22 from '../../images/portfolio-images/image19.jpeg'
import image23 from '../../images/portfolio-images/image20.jpeg'
import image24 from '../../images/portfolio-images/image21.jpeg'
import image25 from '../../images/portfolio-images/image22.jpeg'
import image26 from '../../images/portfolio-images/image23.jpeg'
import image27 from '../../images/portfolio-images/image24.jpeg'
import image28 from '../../images/portfolio-images/image25.jpeg'
import image29 from '../../images/portfolio-images/image26.jpeg'
import image30 from '../../images/portfolio-images/image27.jpeg'
import image31 from '../../images/portfolio-images/image28.jpeg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import './gallery.css'
const images = [
  {
    id: 0,
    imageURL: imageOne,
    alt: 'Gallery Images'
  },
  {
    id: 1,
    imageURL: imageTwo,
    alt: 'Gallery Images'
  },
    {
    id: 2,
    imageURL: imageThree,
    alt: 'Gallery Images'
  },
  {
    id: 3,
    imageURL: imageFour,
    alt: 'Gallery Images'
  },
  {
    id: 4,
    imageURL: imageFive,
    alt: 'Gallery Images'
  },
  {
    id: 5,
    imageURL: imageSeven,
    alt: 'Gallery Images'
  },
  {
    id: 6,
    imageURL: imageEight,
    alt: 'Gallery Images'
  },
  {
    id: 7,
    imageURL: imageNine,
    alt: 'Gallery Images'
  },
  {
    id: 8,
    imageURL: imageTen,
    alt: 'Gallery Images'
  },
  {
    id: 9,
    imageURL: image11,
    alt: 'Gallery Images'
  },
  {
    id: 10,
    imageURL: image12,
    alt: 'Gallery Images'
  },
  {
    id: 11,
    imageURL: image13,
    alt: 'Gallery Images'
  },
  {
    id: 12,
    imageURL: image14,
    alt: 'Gallery Images'
  },
  {
    id: 13,
    imageURL: image15,
    alt: 'Gallery Images'
  },
  {
    id: 14,
    imageURL: image16,
    alt: 'Gallery Images'
  },
  {
    id: 15,
    imageURL: image17,
    alt: 'Gallery Images'
  },
  {
    id: 16,
    imageURL: image18,
    alt: 'Gallery Images'
  },
  {
    id: 17,
    imageURL: image19,
    alt: 'Gallery Images'
  },
  {
    id: 18,
    imageURL: image20,
    alt: 'Gallery Images'
  },
  {
    id: 19,
    imageURL: image21,
    alt: 'Gallery Images'
  },
  {
    id: 20,
    imageURL: image22,
    alt: 'Gallery Images'
  },
  {
    id: 21,
    imageURL: image23,
    alt: 'Gallery Images'
  },
  {
    id: 22,
    imageURL: image24,
    alt: 'Gallery Images'
  },
  {
    id: 23,
    imageURL: image25,
    alt: 'Gallery Images'
  },
  {
    id: 24,
    imageURL: image26,
    alt: 'Gallery Images'
  },
  {
    id: 25,
    imageURL: image27,
    alt: 'Gallery Images'
  },
  {
    id: 26,
    imageURL: image28,
    alt: 'Gallery Images'
  },
  {
    id: 27,
    imageURL: image29,
    alt: 'Gallery Images'
  },
  {
    id: 28,
    imageURL: image30,
    alt: 'Gallery Images'
  },
  {
    id: 29,
    imageURL: image31,
    alt: 'Gallery Images'
  }
]

const GalleryComponents = () => {
  return (
    <div className='gallery-section'>
      {/* <div className="gallery-container">
        <img src={imageOne} className='gallery-image one' alt="" />
        <img src={imageTwo} className='gallery-image two' alt="" />
        <img src={imageThree} className='gallery-image three' alt="" />
        <img src={imageFour} className='gallery-image four' alt="" />
        <img src={imageFive} className='gallery-image five' alt="" />
        <img src={imageSeven} className='gallery-image six' alt="" />
        <img src={imageEight} className='gallery-image seven' alt="" />
        <img src={imageThree} className='gallery-image eight' alt="" />
        <img src={imageNine} className='gallery-image nine' alt="" />
        <img src={imageTen} className='gallery-image ten' alt="" />
      </div> */}

         {images.map((item)=>(
        <>
        <div className="gallery-container">
            <img src={item.imageURL} className='gallery-image' alt={item.alt} />
        </div>
        </>
        ))}

     
    </div>
  )
}

export default GalleryComponents
