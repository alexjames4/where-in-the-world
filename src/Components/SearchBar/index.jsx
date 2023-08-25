import { useEffect, useState } from "react"

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState()


    const performSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        console.log(searchTerm)
    }, [searchTerm])

    return (
        <div className="col-3" >
            <input type="text" className="form-control" id="searchBar" placeholder="Search for a country here" onInput={performSearch}/>
        </div>
    )
}

export default SearchBar