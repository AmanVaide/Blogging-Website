import React from 'react'
import "../about/About.css" 
import Aman from "../about/AmanVaide.jpg"
import Navbar from '../../components/navbar/Navbar';

const About = () => {
  return (
    <>
      <Navbar /> 
      <div className='heading'>
      <h1>About </h1> 
      <h2>A Blogging Website dedicated to sharing personal stories , expert advices , lifestyle etc.</h2>
      </div>
      <div className='container'>
        <section className='about'>
        <div className='about-image'>
        <img src={Aman} />
        </div>
         <div className='about-content'>
          <h2>Blogging Website</h2>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         
          <h2>Contact</h2>
          <p>Created By - Aman Vaide</p>
           <p>Phone no. - 9589388054</p>
          <p> email - amanvaide10@gmail.com</p>
         </div>

        </section>
      </div>
    </>
  )
} 

export default About;