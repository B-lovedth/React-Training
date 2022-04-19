import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Create() {
  const [ title, setTitle ] = useState('')
  const [body, setBody] = useState('') 
  const [author, setAuthor]  = useState('')
  const [isPending,setIsPending] = useState(false)  
  const history = useHistory()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }
    
    setIsPending(true);

   fetch('http://localhost:8000/blogs',{
     method: 'POST',
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(blog)
   }).then(()=>{ 
    console.log('new blog added')
    setIsPending(false)
    history.push('/')
})
  }


  return (
    <div className="create">
      <h2>Add A New Article</h2>
      <form onSubmit={handleSubmit}>
        <label>Article title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <label>Article body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Article author:</label>
        {/* <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="soma">soma</option>
        </select> */}
        <input
           type="text"
           required
           value={author}
           placeholder='-Your Name-'
           onChange={(e) => setAuthor(e.target.value)}
        />
        {!isPending && <button>Add article</button>}
        {isPending && <button disabled>Adding article...</button>}
      </form>
    </div>
  )
}

export default Create
