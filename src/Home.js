import React, { useState,useEffect } from 'react'
import Bloglist from './Bloglist'

const Home = () => {
   
   
  return (
    <div className="Home">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="My Blogs"/>}
    </div>
  )
  }


export default Home
