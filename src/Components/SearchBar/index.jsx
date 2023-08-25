import { useEffect, useState } from "react"

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState()


    const performSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const getSearchData = async () => {
        let response = await fetch (`https://restcountries.com/v3.1/name/${searchTerm}`)
        let searchData = await response.json()
        console.log(searchData)
    }

    useEffect(() => {
        console.log(searchTerm)
        if (!searchTerm) {
        } else {
            getSearchData()
        }
    }, [searchTerm])

    return (
        <div className="col-3" >
            <input type="text" className="form-control" id="searchBar" placeholder="Search for a country here" onInput={performSearch}/>
        </div>
    )
}

export default SearchBar