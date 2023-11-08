
import { useEffect } from 'react';
import './App.css';
import Header from './header';
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
      <h1>Hello There!</h1>
      <Header />
    </div>
  );
}

export default App;
