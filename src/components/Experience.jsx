import React from 'react'
// sources
import headesImg from '../img/headesImg.png';
import menuImg from '../img/menuImg.png';
export default function Experience() {
  return (
    <div>
      <>
        <section className='frame'>
          <div className="heades">
            <h2 className='display-2'>Experience of 10 years in the field</h2>
            <img src={headesImg} alt="" />
          </div>
          <div className="menu">
            <ul>
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
            <img src={menuImg} alt="" />
          </div>
        </section>
      </>
    </div>
  )
}
