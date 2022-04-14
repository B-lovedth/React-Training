import React from 'react'
import { useState } from 'react'

const Create = () => {
  const {title,setTitle} = useState('')
  const {body,setBody} = useState('')
  const {author,setAuthor} = useState('')


  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
         />
        <label>Blog body:</label>
        <textarea
         required
         value={body}
         onChange={()=>setBody(e.target.value)}
         ></textarea>
        <label>Blog author:</label>
        <select>
          <option value="mario">mario</option>
          <option value="soma">soma</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
  )
}

export default Create
