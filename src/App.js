import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null)
  const showalert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);

    // setInterval(() => {
    //   document.title = "textbook app Downloding. . . .";
    // }, 3100);

    // setInterval(() => {
    //   document.title = "install Now - textbook app. . . ";
    // }, 3500);
  }




  const [mode, setmode] = useState('light')

  const toggleSwitch = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = "#005180";
      showalert("Darkmode has been enabled", "success")
      document.title = "Textbook - Darkmode enabled";
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "white";
      showalert("Lightmode has been enabled", "success")
      document.title = "Textbook - Lightmode enabled";
    }

    setTimeout(() => {
      document.title = "Textbook - Home";
    }, 2900);
  }
  return (
<>
<Router>
        <Navbar title="Textbook" home="Home" about="About" mode={mode} toggleSwitch={toggleSwitch}/>
        <Alert alert={alert} />

    <div className="container my-3">        
    <Routes>      

    <Route exact path="/about" element={<About mode={mode}/>} />
    <Route exact path="/" element={ <Textform showalert={showalert} heading="try - Textbook app and you can take benifits for this app" mode={mode}/> }/>
    
    </Routes>
    </div>
  </Router>  
</>
);
}
export default App;