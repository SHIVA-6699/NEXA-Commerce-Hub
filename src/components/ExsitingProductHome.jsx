import img1 from '../assets/ExsitingImages/img1.jpg'
import img2 from '../assets/ExsitingImages/img2.jpg'
import img3 from '../assets/ExsitingImages/img3.jpg'

import img4 from '../assets/ExsitingImages/img5.jpg'
import img5 from '../assets/ExsitingImages/img6.jpg'
import { Image } from 'react-bootstrap'
import '../index.css'
const ExsitingProductiHome=()=>{
    const images=[
        img1,
        img2,
        img3,
        img4,
        img5
    ]
    return (
      <>
        <div style={{ marginBottom: "8rem" }}>
          <div className="d-flex justify-content-between">
            <h3 style={{ color: "#163A66" }} className="mb-4 m-4 ms-5">
              Featured
            </h3>
            <h6 style={{ color: "#163A66" }} className="m-3 me-5 viewtag">
              View More
            </h6>
          </div>
          <div className="d-flex flex-wrap gap-3 m-5 justify-content-center">
            {images.map((item, index) => (
              <Image
                src={item}
                key={index}
                width={240}
                height={200}
                style={{ objectFit: "cover", objectPosition: "center" }}
                className='shadow-lg'
                loading='lazy'
                rounded
              />
            ))}
          </div>
        </div>
      </>
    );
}
export default ExsitingProductiHome