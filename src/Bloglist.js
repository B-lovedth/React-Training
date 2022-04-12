import React from 'react'

const Bloglist = ({ blogs,title }) => {
  

  return (
    <div className="blog-list">
        <h2>{ title }</h2>
         {blogs.map((myblog)=>(
            <div className="blog-preveiw" key={myblog.id}>
                <h2>{myblog.title}</h2>
                <p>Written by { myblog.author }</p>
            </div>
        ))}
    </div>
  )
}

export default Bloglist
