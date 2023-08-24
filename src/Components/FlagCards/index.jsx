import FlagCard from "../FlagCard"


const FlagCards = () => {
    return (
        <div className="container">
            <div className="row">
                <FlagCard
                image="https://flagcdn.com/w320/fr.png"
                alt="The flag of France is composed of three equal vertical bands of blue, white and red." 
                name="France" 
                population="1000000" 
                region="Europe" 
                capital="Paris"
                />
            </div>
        </div>
    )
}

export default FlagCards