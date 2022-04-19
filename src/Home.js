import Bloglist from './Bloglist'
import useFetch from './useFetch'

const Home = () => {
   const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
   
  return (
    <div className="Home">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="My Articles"/>}
    </div>
  )
  }


export default Home
