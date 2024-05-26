import React from 'react'
import myImage from './img1.jpg'

const Hero = () => {
  return (
    <div>
        <h1>Benjamin Nguyen</h1>
        <img src={myImage} className = "benface" alt="Benjamin Nguyen Face"/>
        <br></br>
        Student from University of California Riverside
        <hr></hr>
    </div>
    
  )
}

export default Hero