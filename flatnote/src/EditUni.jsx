import React from "react";


function EditedUni({addedUnis, deleteUni, edit}){

   
    return (
        
    <div className="section">
            
        <div id="data">
        <h4>Edit Uni!</h4>
       {addedUnis.map((university) =>(
           <div key={university.id} >
               <div class="card" style={{color:'black',borderRadius:'15px',textAlign:'center'}}>
                   <h6 onClick={()=> deleteUni(university)}>{university.name}</h6>
                   <small>{university.country}</small>
                   <small>{university.alpha_two_code}</small>
                   <a href={university.web_pages}>{university.web_pages}</a>
                </div>
       <div>  <button type="submit" class="btn btn-success" onClick={()=> edit()} style={{width:'40%', textAlign:'center'}}>Edit Uni</button></div>

           </div>
         
           
       ))} 
    </div>
</div>
    )
}

export default EditedUni