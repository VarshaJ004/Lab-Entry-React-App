import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './home.css'


const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="home-container">
        <div className="home-card">

          <h1 className="home-title">
            Lab Entry Management System
          </h1>

          <p className="home-text">
            Manage laboratory attendance easily by recording
            student details, entry date, time in and time out.
          </p>

        </div>
      </div>
    </div>
  )
}

export default Home