
import React,{ useState,useEffect }  from 'react'; 
import './App.css';
import Header from './header';
import UniList from './MyUniList';
import Search from './search';
import EditedUni from './EditUni';
function App() {
  const [universities, setUniversities] = useState([])
  const [addedUnis, setAddedUnis] = useState([])
  useEffect(()=> {
    fetch("http://localhost:8000/Universities/")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUniversities(data)
      })
  },[])

  function onAdd(university){
    if(!addedUnis.find ((addedUni) => addedUni.id === university.id)){
      setAddedUnis([...addedUnis,university])
    }
  }
  return (
    <div className="App">
      <Header />
      <div class="row">
                 <div class="column" id='1' style={{ color:'white',backgroundColor:'#17160d',borderRadius:'30px',width:'45%', height:'50%',scrollbarWidth:'10px',scroll:'smooth'}}>
                  <br />
                  <Search />
                  <br />
                  <h3>University List</h3>
                    <UniList universities={universities} onAdd={onAdd}/>
                  </div>
                 <div class="column" id='2' style={{color:'white',backgroundColor:'#17160d', borderRadius:'30px'}}>
                  <br />
                  <h3>Edit section</h3>
                  <EditedUni addedUnis={addedUnis} />
                 </div>
                </div>
    </div>
  );
}

export default App;
