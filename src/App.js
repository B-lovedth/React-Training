import './App.css'

function App() {
  const myString = `App Component`
  const likes = 90
  return (
   <div className="App">
     <div className="content">
       <h1>{ myString }</h1>
       <p>LIked {likes} times</p>
     </div>
    </div> 
  );
}

export default App;
