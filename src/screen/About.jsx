import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css' 
import { Link } from 'react-router-dom'
import Product from './Product'

const About = () => {
  return (
    <div>
      <header><Navbar /></header>
      <div className='container'>
        <br />
        <center><div className='row'>
          <h1>Thakur Agroindustry</h1></div>
        <div className='row'>
          <h2>Manufacturer & Supplier: Tractor & Rotavator Parts</h2>
          <h3>Cultivating Innovation for Modern Agriculture</h3>
          <br/><br/><br/><p>Thakur Agroindustry is a leading name in the development and manufacturing of agricultural equipment, dedicated to empowering farmers with advanced solutions for improved productivity and efficiency. Our commitment lies in fostering agricultural progress by providing top-notch products like rotavators and toplins, catering to the diverse needs of modern farming.</p>
          <center><Link to={'/product'}><button style={{width:"fit-content", backgroundColor:"lightgreen", color:"black"}} type="button" className="btn btn-success">Check Out <b>Products</b></button></Link></center>
        </div></center>
      </div>
    </div>
  )
}

export default About