
import React,{ useState,useEffect,Switch }  from 'react'; 
import './App.css';
import Header from './header';
import UniList from './MyUniList';
import Search from './search';
import EditedUni from './EditUni';
import Landing from './LandingPg';
import {Route} from 'react-router-dom';




function App() {
  const [universities, setUniversities] = useState([])
  const [addedUnis, setAddedUnis] = useState([])
  const [setPage] = useState('/')

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

  function deleteUni(university){
    setAddedUnis(addedUnis.filter((addedUni) => addedUni.id !==
     university.id))
  }
  function edit(){

    prompt('Add Comment!')
    return(
      
      <div></div>
    )

}

  return (
    <div className="App">
      <div><Header/></div>
      <div><Landing/></div>
      <br />
      <div class="row">
                 <div class="column" id='1' style={{ color:'white',backgroundColor:'rgb(9, 70, 9)',borderRadius:'30px',width:'45%', height:'50%',scrollbarWidth:'10px',scroll:'smooth'}}>
                  <br />
                  <Search universities={universities}/>
                  <br />
                  <div class='top'  style={{ margin:'30px 30px', borderSpacing:'10px' }}>
                  <h3>University List</h3> 
                  <button class='btn btn-success' >Add Uni</button>
                  </div>
                    <UniList universities={universities} onAdd={onAdd}/>
                  </div>
                 <div class="column" id='2' style={{color:'white',backgroundColor:'rgb(126, 201, 126)', borderRadius:'30px'}}>
                  <br />
                  <h3>Edit section</h3>
                  <EditedUni addedUnis={addedUnis} deleteUni={deleteUni} edit={edit}/>
                 </div>
                </div>
    </div>
  );
}

export default App;
