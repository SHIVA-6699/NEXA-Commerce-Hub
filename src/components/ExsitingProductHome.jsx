import img1 from '../assets/ExsitingImages/img1.jpg'
import img2 from '../assets/ExsitingImages/img2.jpg'
import img3 from '../assets/ExsitingImages/img3.jpg'
import { Link } from 'react-router-dom'
import img4 from '../assets/ExsitingImages/img5.jpg'
import img5 from '../assets/ExsitingImages/img6.jpg'
import { Image } from 'react-bootstrap'
import "../Sass/componet.scss";
import '../index.css'
const ExsitingProductiHome=()=>{
    const global_color = "$primay";
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
            <h3 style={{ color: global_color }} className="mb-4 m-4 ms-5 global">
              Featured
            </h3>
            <Link className="p-4 m-4 ms-5 global" to="/Viewproducts" style={{ textDecoration: "none" }}>
              <h6 style={{ color: global_color }} className="viewtag">
                View More
              </h6>
            </Link> 
           
          </div>
          <div className="d-flex flex-wrap gap-3 m-5 justify-content-center">
            {images.map((item, index) => (
              <Image
                src={item}
                key={index}
                width={240}
                height={200}
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="shadow-lg exsimg"
                loading="lazy"
                rounded
              />
            ))}
          </div>
        </div>
      </>
    );
}
export default ExsitingProductiHome