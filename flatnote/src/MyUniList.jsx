import React from "react";
import './MyUniList.css';

function UniList({universities, setUniversities}){
    return(
        <div className="section">
                 <div id="data">
                {universities.map((university) =>(
                    <div key={university.id}>
                        <div class="card" style={{color:'black',borderRadius:'15px',textAlign:'center'}}>
                            <h6>{university.name}</h6>
                            <small>{university.country}</small>
                            <small>{university.alpha_two_code}</small>
                            <small>{university.web_pages}</small>
                    </div>
                    <br />

                        
                    </div>
                    
                ))}
            </div>
        </div>
    )

    
}

export default UniList