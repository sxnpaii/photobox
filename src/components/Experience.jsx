import React from 'react'
// sources
import headesImg from '../img/headesImg.png';
import menuImg from '../img/menuImg.png';
export default function Experience() {
  return (
    <div>
      <>
        <section className='frame' data-aos="zoom-in"> 
          <div className="heades">
            <h2 className='display-2'  data-aos="fade-up" data-aos-duration="1000">Experience of 10 years in the field</h2>
            <img src={headesImg} data-aos="fade-up" data-aos-duration="1200" alt="" />
          </div>
          <div className="menu">
            <ul  data-aos="fade-left" data-aos-duration="900" data-aos-delay="100">
              <li>
                FOOD PHOTOGRAPHY
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              <li>
                PORTRAIT PHOTOGRAPHY
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              <li>
                ARCHITECTURE PHOTOGRAPHY
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              <li>
                CONCEPTUAL PHOTOGRAPHY
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              <button className="btn btn-dark">
                ABOUT ME <i class="ri-arrow-right-s-line"></i>
              </button>
            </ul>
            <img src={menuImg}  data-aos="fade-up" data-aos-duration="900" alt="" />
          </div>
        </section>
      </>
    </div>
  )
}
