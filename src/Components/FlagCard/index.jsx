import './FlagCard.css'

const FlagCard = ({image, alt, countryName, population, region, capital}) => {
    return (
        <div className="card col-8 m-1 col-md-4 col-lg-3">
            <span className="img-span">
                <img src={image} className="card-img-top flag-img mt-2" alt={alt}/>
            </span>
            <div className="card-body">
                <h5 className="card-title">{countryName}</h5>
            </div>
            <span>
                <div className="card-body">   
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Population: {population}</li>
                        <li className="list-group-item">Region: {region}</li>
                        <li className="list-group-item">Capital: {capital}</li>
                    </ul>
                </div>
            </span> 
        </div>
    )
}

export default FlagCard