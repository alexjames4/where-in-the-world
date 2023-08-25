import { useEffect } from "react"
import FlagCard from "../FlagCard"
import { useState } from "react"


const FlagCards = () => {
    const [countrys, setCountrys] = useState()

    const getCountrysData = async () => {
        let response = await fetch ('https://restcountries.com/v3.1/all')
        let countrysData = await response.json()
        setCountrys(countrysData)
    } 
    
    useEffect(() => {
        getCountrysData()
    }, [])

    const fillFlagCardWithData = () => {
        return countrys.map(country => {
            return (
                <FlagCard
                key={country.name.common}
                image={country.flags.png}
                alt={country.flags.alt}
                countryName={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                />
            )
        })
    }

    return (
        <div className="container pt-1">
            <div className="row offset-2">
                {
                    countrys ? fillFlagCardWithData() : 'loading'
                }
            </div>
        </div>
    )
}

export default FlagCards