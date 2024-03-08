import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <>
      <div className='grad'>
      <header><Navbar/></header>
      <div className='container'>
      <div className="card" style={{marginTop:"5vh"}}>
  <div className="card-body">
    <h5 className="card-title"><center><h2>CONTACT</h2></center></h5>
    <p className="card-text"><b>Address: #11061, ST.NO.8, Partap Nagar, Ludhiana</b></p>
    <p className="card-text"><b>Contact No.: 79866 65050, 99883 91293</b></p>
     <a href='https://wwww.facebook.com/share/G2brcaYrysBW8YuR/?mibextid=cR73hX' target='_blank'>Follow us on Facebook</a> &nbsp;&nbsp;&nbsp;&nbsp; 
     <a href='https://www.gmail.com' target='_blank'>Email Us On - shrithakurjiagroofficial@gmail.com</a>
  </div>
</div>
      </div>
    </div>
    </>
  )
}

export default Contact