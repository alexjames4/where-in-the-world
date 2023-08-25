import { useEffect, useState } from "react"

const SearchBar = ({handleInput}) => {
    
    const performSearch = (e) => {
        handleInput(e.target.value)
    }

    return (
        <div className="col-3" >
            <input type="text" className="form-control" id="searchBar" placeholder="Search for a country here" onInput={performSearch}/>
        </div>
    )
}

export default SearchBar