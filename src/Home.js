import React, { useState,useEffect } from 'react'
import Bloglist from './Bloglist'

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:'My new website',body:'lorem ipsum... ', author:'Great',id:'1'},
        {title:'Welcome party',body:'lorem ipsum... ', author:'Belovedth',id:'2'},
        {title:'Web dev tool tips',body:'lorem ipsum... ', author:'Soma',id:'3'}
    ])
    const handleDelete = (id) => {
      const newBlogs = blogs.filter((blog)=> blog.id !== id)
      setBlogs(newBlogs)
    }
    useEffect(() => {

      console.log(' use effect ran',);
    })
  return (
    <div className="Home">
       <Bloglist blogs={blogs} title="My Blogs" handleDelete={handleDelete}/>
    </div>
  )
}

export default Home
