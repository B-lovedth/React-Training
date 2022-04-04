import React from 'react'

const Home = () => {
    const myClick = (name)=>{
            alert(`Hello ${name}`)
    }
  return (
    <div className="Home">
      <h2>Homepage</h2>
      <button onClick={()=>{
          myClick("Great")
      }}>Click me!</button>
    </div>
  )
}

export default Home
