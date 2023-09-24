import SearchBar from "../SearchBar"

const HeaderBar = ({pageHeading, setSearchData}) => {
    return (
        <>
            <div className="row col-12 bg-black text-white p-2 ps-3 sticky-top">
                <h1>{pageHeading}</h1>
                <SearchBar handleInput={setSearchData}/>
            
            </div>
        </>
    )
}

export default HeaderBar