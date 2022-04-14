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
        <label>Blog body:</label>
        <textarea required></textarea>
        <label>Blog author:</label>
        <select>
          <option value="mario">mario</option>
          <option value="soma">soma</option>
        </select>
      </form>
    </div>
  )
}

export default Create
