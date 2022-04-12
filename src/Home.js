import Bloglist from './Bloglist'
import useFetch from './useFetch'

const Home = () => {
   const { data, isPending, error } = useFetch('http://localhost:8000/blogs')
   
  return (
    <div className="Home">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
      {data && <Bloglist blogs={data} title="My Blogs"/>}
    </div>
  )
  }


export default Home
