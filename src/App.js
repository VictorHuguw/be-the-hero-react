import React,{useState} from 'react';
import './global.css';
import Routes from './routes';

function App() {
  let [count,setCounter] = useState(0);

  function increment(){
    setCounter(count+1 );
    console.log(count);
  }

  return (
    <div>
      <Routes/>
    </div>
     
  );
}

export default App;
