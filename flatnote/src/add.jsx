import React from "react";
import UniList from "./MyUniList";


function Add(){
    function handleAdd(){
        return(
        <div>
            <form action="submit">
                <h4>Add a New Uni</h4>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="name" />
                <br />
                <label htmlFor="country">Country:</label>
                <input type="text" placeholder="country" />
                <br />
                <label htmlFor="two-code">Two-Code:</label>
                <input type="text" placeholder="two-code"/>
                <br />
                <label htmlFor="url">Website_URL</label>
                <input type="text" placeholder="Website-URL" />
            </form>
        </div>
            
        )
    }
    return(
        <div>
            <button class='btn btn-success' onClick={handleAdd}>Add New Uni</button>
        </div>
      
    )
}


export default Add