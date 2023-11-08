
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(()=> {
    fetch("http://localhost:8000/Universities/")
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  },[])
  return (
    <div className="App">
      <h1>Hello John!</h1>
    </div>
  );
}

export default App;
