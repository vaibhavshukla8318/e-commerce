import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
       <Navbar/>    
       <Link to='/about'>About</Link>
       <Link to='/portfolio'>Portfolio</Link>
    </div>
  )
}

export default Home