const FlagCard = ({image, alt, name, population, region, capital}) => {
    return (
        <div className="card col-4">
            <img src={image} className="card-img-top" alt={alt}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div> 
            <div className="card-body">   
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Population: {population}</li>
                    <li className="list-group-item">Region: {region}</li>
                    <li className="list-group-item">Capital: {capital}</li>
                </ul>
            </div>
        </div>
    )
}

export default FlagCard