
import Home from './Home';
import Navbar from './Navbar';
import Practice from './Practice';

function App() {
  return (
   <div className="App">   
       <Navbar/>
     <div className="content">
       <Home/>
       <Practice/>
     </div>
    </div> 
  );
}

export default App;
