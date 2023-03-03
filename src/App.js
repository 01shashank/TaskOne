import './App.scss';
import Routing from './routes/Routing';
import {BrowserRouter} from 'react-router-dom'


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
