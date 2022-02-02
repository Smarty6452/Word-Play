
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';






function App() {
  const [mode, setMode] = useState('light');

    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#1a1818';
        document.title = 'wordPlay - DarkMode';
      } else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        document.title = 'wordPlay - Lightmode';
      
    }
  }
  return (
   <>
 {/* props  */}
<Navbar title="WordPlay" aboutText="About " mode={mode} toggleMode={toggleMode}/>  

<div className="container mt-4" >
<TextForm heading="Enter your Text to analyze below" mode={mode}/>
</div>
{/* <About/>  */}
   </>
  );
}

export default App;
