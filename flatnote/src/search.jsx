import React, { useState}from "react";


function Search({universities}){
    const [search, setSearch] = useState('')
    
    function handleSearch(e){
        setSearch(e.target.value)
        console.log(search)
    }
    return(
        <input type="text"
         placeholder="search" 
         value={search} 
        onChange={handleSearch}

         />
    )
}


export default Search