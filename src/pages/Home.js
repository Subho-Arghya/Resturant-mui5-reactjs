import React from 'react'
import CommonUI from '../components/CommonUI'
import Banner from "../assets/banner.jpg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <CommonUI>
    <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
    <div className="headerContainer">
      <h1>Food Website</h1>
      <p>Best Food In India</p>
      <Link to="/menu">
        <button>ORDER NOW</button>
      </Link>
    </div>
  </div>
    </CommonUI>
  )
}

export default Home