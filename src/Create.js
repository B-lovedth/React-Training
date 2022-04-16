import { useState } from 'react'

function Create() {
  const [ title, setTitle ] = useState('')
  const [body, setBody] = useState('') 
  const [author, setAuthor]  = useState('mario') 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }
    
   fetch('http://localhost:8000/blogs',{
     method: 'POST',
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(blog)
   }).then(()=>{ 
    console.log('new blog added')})
  }


  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="soma">soma</option>
        </select>
        <button>Add blog</button>
      </form>
      <p>{title}</p> 
      <p>{body}</p>
      <p>{author} is the author of this blog</p>
    </div>
  )
}

export default Create
