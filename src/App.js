
import React from 'react';

import './App.css';
import Headers from './Componants/Pages/Headers';
import Home from './Componants/Pages/Home';
import Navbar from './Componants/Pages/Navbar';
import Slider from './Componants/Pages/Slider';
import Page2 from './Componants/Pages/Page2';
import Slider2 from './Componants/Pages/Slider2';
import Slider3 from './Componants/Pages/Slider3';
import Slider4 from './Componants/Pages/Slider4';
import Slider5 from './Componants/Pages/Slider5';
import Fotter from './Componants/Pages/Fotter';

function App() {
  return (
    <div className="App ">
      
      <Headers/>
      <Slider/>
      <Page2/> 
    <Slider3/>
   <Slider2/> 
    <Slider4/>
   <Slider5/>
    <Fotter/>   
    </div>
  );
}

export default App;
