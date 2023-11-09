import React from "react";
import './MyUniList.css';

function UniList({universities, setUniversities, onAdd}){
    
        /*function handleAddUni(university){
            return(
          <div>
            <h1>Add University</h1>
              
                <form className="add-uni">
                  <input type='text' name='name' placeholder='Name' /><br/>
                  <input type='text' name='location' placeholder='Location' /><br/>
                  <button class='btn btn-primary' >ADD UNIVERSITY</button><br/>
                  
                </form>
          </div>
            )
        }
        */
    return(
        <div className="section">
                 <div id="data">
                {universities.map((university) =>(
                    <div key={university.id}>
                        <div class="card " onClick={() => onAdd(university)} style={{color:'black',borderRadius:'15px',textAlign:'center'}}>
                            <h6  >{university.name}</h6>
                            <small>{university.country}</small>
                            <small>{university.alpha_two_code}</small>
                            <a href={university.web_pages}>{university.web_pages}</a>
                    </div>
                    <br />

                        
                    </div>
                    
                ))}
            </div>
        </div>
    )

    
}

export default UniList