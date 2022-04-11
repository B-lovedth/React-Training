import React, { useState,useEffect } from 'react'
import Bloglist from './Bloglist'

const Home = () => {
    const url = 'http://localhost:8000/blogss'
    const [blogs,setBlogs] = useState()
    const [isPending,setIsPending] = useState(true)
    useEffect(() => {
      fetch(url)
      .then(res => { 
        if(res.ok){ 
       return res.json()}
       
      })
      .then(data => {
        setBlogs(data)
        setIsPending(false)
      }
      ).catch(err=>{
         console.log(err)
      })
    },[]
    )
  return (
    <div className="Home">
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="My Blogs"/>}
    </div>
  )
  }


export default Home
