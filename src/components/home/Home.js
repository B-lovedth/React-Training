
import React from 'react'
import Footer from '../footer/Footer'
import Header from '../Header/Header'
import Report from '../report/Report'

import './home.css'

const Home = () => {
  return (
    <div className="home-page">
        <div>
        <Header/>

        </div>
        <div>
        <Report/>

        </div>
        <div>
        <Footer/>

        </div>
      
    </div>
  )
}

export default Home
