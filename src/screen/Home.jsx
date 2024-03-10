import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import img2 from '../AgroPictures/toplin.jpeg'
import img3 from '../AgroPictures/Device6.jpeg' 
import img4 from '../AgroPictures/Device8.jpeg' 

const Home = () => {
  return (
    <div className='hBack'>
      <Navbar/>
      <br/><br/>
      <h1><marquee>Welcome to <b>SHRI THAKURJI AGROINDUSTRIES</b></marquee></h1>
      <h2><marquee>Thakur Agroindustry: Cultivating Innovation for Modern Agriculture</marquee></h2>
      <div id="carouselExampleAutoplaying" style={{marginLeft:"16vw"}} className="carousel imgC slide col-md-8" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img2} style={{height:"23rem", borderRadius:"10px", }} className="d-block w-100 cimg" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} style={{height:"23rem", borderRadius:"10px", }} className="d-block w-100 cimg" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img4} style={{height:"23rem", borderRadius:"10px", }} className="d-block w-100 cimg" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    )
}

export default Home