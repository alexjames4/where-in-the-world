const SearchBar = ({handleInput}) => {
    
    const performSearch = (e) => {
        handleInput(e.target.value)
    }

    return (
        <div className="col-10 offset-sm-1" >
            <input type="text" className="form-control" id="searchBar" placeholder="Search for a country here" onInput={performSearch}/>
        </div>
    )
}

export default SearchBar