import logo from './logo.svg';
import './App.css';
import Routing from './component/Routing';
import {BrowserRouter} from 'react-router-dom'
import { useState } from 'react';


const App=()=> {


  return (
    <div className="App">
      <BrowserRouter>
        <Routing/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
