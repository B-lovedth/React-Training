import React, { useState,useEffect } from 'react'
import Bloglist from './Bloglist'

const Home = () => {
    const url =   'http://localhost:8000/blogs'
    const [blogs,setBlogs] = useState()
    const [isPending,setIsPending] = useState(true)
    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setBlogs(data)
        setIsPending(false)
      }
      )
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
