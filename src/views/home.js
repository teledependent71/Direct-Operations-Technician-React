import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Operations Technician</title>
        <meta property="og:title" content="Direct Operations Technician" />
      </Helmet>
    </div>
  )
}

export default Home
