import React, {useState} from 'react'
import './App.css';
import MyComponent from 'mycomponent'
import { useEffect } from 'react';

function App() {
  const increment = "Increment"
  const decrement = "Decrement"
  const[count, setCount] = useState(99);
  useEffect(()=>{
    console.log('Count has changed:', count);
  },[count])
  return (
    <>
    <div className="App">
      <h1>Payhuddle</h1>
      </div> 
      <div style={{margin: '2rem', padding:'2rem', borderRadius: '10px', backgroundColor:'#A1B5D8'}}>
      <MyComponent
      increment = {increment}
      decrement ={decrement}
      count = {count}
      setCount = {setCount}
      />
      </div>
      </>
  );
}

export default App;
