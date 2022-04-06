import React, { useState } from 'react'

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:'My new website',body:'lorem ipsum... ', author:'Great',id:'1'},
        {title:'Welcome party',body:'lorem ipsum... ', author:'Belovedth',id:'2'},
        {title:'Web dev tool tips',body:'lorem ipsum... ', author:'Soma',id:'3'}
    ])
  return (
    <div className="Home">
        {blogs.map((myblog)=>(
            <div className="blog-preveiw" key={myblog.id}>
                <h2>{myblog.title}</h2>
                <p>Written by { myblog.author }</p>
            </div>
        ))}
    </div>
  )
}

export default Home
