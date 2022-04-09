import React, { useState,useEffect } from 'react'
import Bloglist from './Bloglist'

const Home = () => {
    const [blogs,setBlogs] = useState(null)
    const handleDelete = (id) => {
      const newBlogs = blogs.filter((blog)=> blog.id !== id)
      setBlogs(newBlogs)
    }
    useEffect(() => {
      fetch()
    })
  return (
    <div className="Home">
       <Bloglist blogs={blogs} title="My Blogs" handleDelete={handleDelete}/>
    </div>
  )
}

export default Home
