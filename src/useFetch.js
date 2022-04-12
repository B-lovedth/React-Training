import { useEffect,useState } from "react"

const useFetch = () =>{
    const [blogs,setBlogs] = useState()
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => { 
          if(!res.ok){ 
            throw Error('Could not fetch the data for that resource')
        }
        return res.json()}
        )
        .then(data => {
          setBlogs(data)
          setIsPending(false)
          setError(null)
        }
        ).catch(err=>{
          setError(err.message)
          setIsPending(false)
          setBlogs()
        })
      },[]
      )
}