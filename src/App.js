// import logo from './logo.svg';
import './App.css';
import Login from './headerComponent/Login';
import SignUpp from './headerComponent/SignUp';
import { Route,Routes} from 'react-router-dom'

// import Header from './Header';
import DisplayGame from './componentDisplay/DisplayGame'
import StartPg from './start_pg_component/StartPg';

function App() {
  return (
    <div className="App">
       
      
      <Routes>
  
        
         <Route path="/login" element={<Login/>}/>
         <Route path="/" element={<SignUpp/>} /> 
         <Route  path="/game" element={<DisplayGame/>}/>
         <Route  path="/start" element={<StartPg/>}/>
          
        
      </Routes>
      
     
    </div>
  );
}

export default App;
