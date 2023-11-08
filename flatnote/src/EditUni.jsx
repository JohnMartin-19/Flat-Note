import React from "react";


function EditedUni({addedUnis}){
    return (
        
        <div className="section">
            
        <div id="data">
        <h4>Edit Uni!</h4>
       {addedUnis.map((university) =>(
           <div key={university.id}>
               <div class="card" style={{color:'black',borderRadius:'15px',textAlign:'center'}}>
                   <h6>{university.name}</h6>
                   <small>{university.country}</small>
                   <small>{university.alpha_two_code}</small>
                   <small>{university.web_pages}</small>
           </div>
           <button type="submit" class="btn btn-success" style={{width:'40%', textAlign:'center'}}>Edit Uni</button> 
           <br />

              
           </div>
           
       ))}
   </div>
</div>
    )
}

export default EditedUni