import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import About from './About'

const Home = () => {
  return (
    <div className='hBack'>
      <Navbar/>
      <br/><br/>
      <h1><marquee>Welcome to <b><span style={{color:"red"}}>SHRI </span><span style={{color:"maroon"}}>THAKURJI AGRO</span> <span style={{color:"green"}}>INDUSTRIES</span></b></marquee></h1>
      <h2><marquee>Thakur Agroindustry: Cultivating Innovation for Modern Agriculture</marquee></h2>
      
    </div>
    )
}

export default Home