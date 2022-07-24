import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/mainauth.css';

function MainAuth() {
  return (
    <div className='auth-container'>
        <div className='cont'>
        <h1 className='logo'>HMS</h1>
        <h2 className='sub-logo'>Hospital</h2>
        <div className='links'>
        <Link to="/login"><div className='login-page'>Login</div></Link>
        <Link to="/signup"><div className='signup-page'>signup</div></Link>
        </div>
        </div>
        </div>
  )
}

export default MainAuth