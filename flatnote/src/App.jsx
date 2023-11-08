
import React,{ useState,useEffect }  from 'react'; 
import './App.css';
import Header from './header';
import UniList from './MyUniList';
import Search from './search';
function App() {
  const [universities, setUniversities] = useState([])
  useEffect(()=> {
    fetch("http://localhost:8000/Universities/")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUniversities(data)
      })
  },[])
  return (
    <div className="App">
      <Header />
      <div class="row">
                 <div class="column" id='1' style={{ color:'white',backgroundColor:'#17160d',borderRadius:'30px',width:'45%', height:'50%',scrollbarWidth:'10px',scroll:'smooth'}}>
                  <br />
                  <Search />
                  <br />
                  <h3>University List</h3>
                    <UniList universities={universities} />
                  </div>
                 <div class="column" id='2' style={{color:'white',backgroundColor:'#17160d', borderRadius:'30px'}}>
                  <h3>Edit section</h3>
                 </div>
                </div>
    </div>
  );
}

export default App;
