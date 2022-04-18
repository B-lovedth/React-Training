import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
    <h2>Sorry😥</h2>  
    <p>That page cannot be found</p>
    <Link to='/'>Back to Homepage...</Link>
    </div>
  )
}

export default NotFound
