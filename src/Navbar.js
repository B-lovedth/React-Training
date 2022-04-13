import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>The Soma Blog</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/blog" className=''>New Blog</a>
        </div>
    </nav>
  )
}

export default Navbar
