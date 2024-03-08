import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../App.css'
import rota from "../AgroPictures/rotavatorshocker.jpeg"
import rotash from "../AgroPictures/rotavatorshocker18.jpeg"
import sona from "../AgroPictures/sonalika.jpeg"
import toplin from "../AgroPictures/toplin.jpeg"
import yogpin from "../AgroPictures/yogpin.jpeg"
import imgg from "../AgroPictures/EntireImg.jpeg"

const Product = () => {
  return (
    <>
      <div className='grad'>
        <header><Navbar /></header>
        <br />
        <div className='container'>
          <div className='row' style={{marginBottom:"20px"}}>
            <div className='col-md-4 col-12'><div className="card" style={{ width: "18rem;" }}>
              <img src={rota} className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Rotavator Shocker</h5>
                <p className="card-text"><b>Size: </b>16mm</p>
                <p className="card-text"><b>Price: </b>130/-</p>
                <center><Link to={'/contact'}><button style={{width:"fit-content", backgroundColor:"green", color:"black"}} type="button" className="btn btn-success">Place an Order?</button></Link></center>
              </div>
            </div></div>
            <div className='col-md-4 col-12'><div className="card" style={{ width: "18rem;" }}>
              <img src={yogpin} className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Yog pin</h5>
                <p className="card-text"><b>Size: </b>90mm</p>
                <p className="card-text"><b>Price: </b>10/-</p>
                <center><Link to={'/contact'}><button style={{width:"fit-content", backgroundColor:"green", color:"black"}} type="button" className="btn btn-success">Place an Order?</button></Link></center>
              </div>
            </div></div><div className='col-md-4 col-12'><div className="card" style={{ width: "18rem;" }}>
              <img src={toplin} className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Toplin Mahindra DI</h5>
                <p className="card-text"><b>Price: </b>700/-</p>
                <center><Link to={'/contact'}><button style={{width:"fit-content", backgroundColor:"green", color:"black"}} type="button" className="btn btn-success">Place an Order?</button></Link></center>
              </div>
            </div></div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-12'><div className="card" style={{ width: "18rem;" }}>
              <img src={sona} className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sonalika Challenger Series</h5>
                <p className="card-text"><b>Price: </b>320/-</p>
                <center><Link to={'/contact'}><button style={{width:"fit-content", backgroundColor:"green", color:"black"}} type="button" className="btn btn-success">Place an Order?</button></Link></center>
              </div>
            </div></div>
            <div className='col-md-4 col-12'><div className="card" style={{ width: "18rem;" }}>
              <img src={rotash} className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Rotavator Shocker</h5>
                <p className="card-text"><b>Size: </b>18mm</p>
                <p className="card-text"><b>Price: </b>160mm</p>
                <center><Link to={'/contact'}><button style={{width:"fit-content", backgroundColor:"green", color:"black"}} type="button" className="btn btn-success">Place an Order?</button></Link></center>
              </div>
            </div></div>
          </div>
          <br/><br/>
          <div className='row'>
            <img src={imgg}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product