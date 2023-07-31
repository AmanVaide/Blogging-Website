import React from 'react'
import classes from './navbar.module.css' 
import { Link } from 'react-router-dom'
import Profile from '../../assets/Profile.png'
import { useState } from 'react'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>BLOG</Link>
        </div>
        <ul className={classes.center}>  
        <li className={classes.listItem}>
        <Link to='/' style={{textDecoration: 'none', color: 'white'}}>Home</Link>
        </li>      
          <li className={classes.listItem}>
          <Link to='/about' style={{textDecoration: 'none',color: 'white'}}>About</Link>
          
          </li>
          <li className={classes.listItem}>
          <Link to='/create' style={{textDecoration: 'none',color: 'white'}}>Create</Link>
          
          </li>
          <li className={classes.listItem}>
          <Link to='/register' style={{textDecoration: 'none',color: 'white' }}>Logout</Link>
          
          </li>
          
          
        </ul>
       
      </div>
    </div>
  )
}

export default Navbar