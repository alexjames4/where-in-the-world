import { useEffect } from "react"
import FlagCard from "../FlagCard"
import { useState } from "react"


const FlagCards = ({searchData}) => {
    const [countrys, setCountrys] = useState()

    const getCountrysData = async () => {
        let response = await fetch ('https://restcountries.com/v3.1/all')
        let countrysData = await response.json()
        setCountrys(countrysData)
    } 

    const getSearchData = async () => {
        let response = await fetch (`https://restcountries.com/v3.1/name/${searchData}`)
        let countryData = await response.json()
        if (!searchData || countryData.message == "Not Found") {

        } else {
            setCountrys(countryData)
        }
    }
    
    useEffect(() => {
        if (searchData == undefined) {
            getCountrysData()
        } else {
            getSearchData()
        }
    }, [searchData])

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
            <div className="row d-flex justify-content-center">
                {
                    countrys ? fillFlagCardWithData() : 'loading'
                }
            </div>
        </div>
    )
}

export default FlagCards