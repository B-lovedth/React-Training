import React from 'react'

const Practice = () => {
  // const [name,setName] = useState("Great")

  const myClick = (name,e) => {

    console.log("hello"+name,e);
  }
  return (
    <div>
      <button onClick={(newE)=>myClick("Great",newE)}>click me</button>
      
    </div>
  )
}

export default Practice
