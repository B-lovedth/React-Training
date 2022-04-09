import React, { useState,useEffect } from 'react'
import Bloglist from './Bloglist'

const Home = () => {
    const url =   'http://localhost:8000/blogs'
    const [blogs,setBlogs] = useState()
    const handleDelete = (id) => {
      const newBlogs = blogs.filter((blog)=> blog.id !== id)
      setBlogs(newBlogs)
    }
    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setBlogs(data))
    },[] )
  return (
    <div className="Home">
       {blogs ? <Bloglist blogs={blogs} title="My Blogs" handleDelete={handleDelete}/>:<div>Great</div>}
    </div>
  )
}

export default Home
