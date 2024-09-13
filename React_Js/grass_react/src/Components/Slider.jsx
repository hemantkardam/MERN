import React from 'react'
import Slider1 from './img/IMG-20231129-WA0008.jpg';
import Slider2 from './img/IMG-20231129-WA0013.jpg';
import Slider3 from './img/IMG-20231129-WA0009.jpg';
const Slider = () => {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner " style={{height:"85vh"}}>
    <div className="carousel-item active">
      <img src={Slider1} className="d-block w-100" alt="..."  />
    </div>
    <div className="carousel-item">
      <img src={Slider2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Slider3} className="d-block w-100" alt="..."  />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Slider
