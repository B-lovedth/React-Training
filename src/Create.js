import React from 'react'

const Create = () => {
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <input 
          type="text"
          required
         />
      </form>
    </div>
  )
}

export default Create
