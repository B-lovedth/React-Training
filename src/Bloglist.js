import React from 'react'
import { Link } from 'react-router-dom'

const Bloglist = ({ blogs,title }) => {

  return (
    <div className="blog-list">
        <h2>{ title }</h2>
         {blogs.map((myblog)=>(
            <div className="blog-preveiw" key={myblog.id}>
                <Link to={`/blogs/${myblog.id}`}> <h2>{myblog.title}</h2>
                <p>Written by { myblog.author }</p>
                </Link>
               
            </div>
        ))}
    </div>
  )
}

export default Bloglist
