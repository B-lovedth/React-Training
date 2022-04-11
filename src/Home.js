import React, { useState,useEffect } from 'react'
import Bloglist from './Bloglist'

const Home = () => {
    const url = 'http://localhost:8000/blogs'
    const [blogs,setBlogs] = useState()
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)
    useEffect(() => {
      fetch(url)
      .then(res => { 
        if(!res.ok){ 
          throw Error('Could not fetch the data for that resource')
      }
      return res.json()}
      )
      .then(data => {
        setBlogs(data)
        setIsPending(false)
        setError(null)
      }
      ).catch(err=>{
        setError(err.message)
        setIsPending(false)
        setBlogs()
      })
    },[]
    )
  return (
    <div className="Home">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="My Blogs"/>}
    </div>
  )
  }


export default Home
