import './App.css'
import Home from './Home';
import Navbar from './Navbar';

function App() {
  const myString = `App Component`
  const likes = 90
  return (
   <div className="App">   
       <Navbar/>
     <div className="content">
       <Home/>
     </div>
    </div> 
  );
}

export default App;
