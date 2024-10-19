import Webpage from './pages/webpage'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="App">
        <Routes> 
          <Route path = "/" exact element = {<Webpage section ={'Home'}/>}/>
          <Route path = "/Home" element = {<Webpage section ={'Home'}/>}/>
          <Route path = "/About" element = {<Webpage section ={'About'}/>}/>
          <Route path = "/Skills" element = {<Webpage section ={'Skills'}/>}/>
          <Route path = "/Gallery" exact element = {<Webpage section ={'Gallery'}/>}/>
          <Route path = "/Contact" element = {<Webpage section ={'Contact'}/>}/>
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
